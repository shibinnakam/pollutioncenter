import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Volume2,
  VolumeX,
  Sparkles,
  Sliders,
  RotateCcw,
  ExternalLink,
  Crown,
  PartyPopper,
  Pause,
  Play,
  Heart,
  ChevronRight,
} from 'lucide-react';
import './inauguration.css';
import { useInaugurationAudio } from './useInaugurationAudio';
import { ConfettiCanvas, ConfettiCanvasRef } from './ConfettiCanvas';
import {
  PersonalizeModal,
  CelebrantData,
  DEFAULT_CELEBRANT,
} from './PersonalizeModal';

/**
 * Checks if the current date is within the celebration window
 * (20-09-2026 to 28-09-2026) or if explicitly activated via query string.
 */
export const isCelebrationDate = (): boolean => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    if (
      params.get('inaugurate') === 'true' ||
      params.get('celebrate') === '1' ||
      params.get('celebration') === 'true'
    ) {
      return true;
    }
  }

  const now = new Date();
  const startDate = new Date('2026-09-20T00:00:00');
  const endDate = new Date('2026-09-28T23:59:59');

  return now >= startDate && now <= endDate;
};

export const RoyalFloatingBadge: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="royal-floating-badge group"
      title="View Royal Inauguration & Birthday Celebration"
      aria-label="View Royal Inauguration & Birthday Celebration"
    >
      <Crown className="w-5 h-5 text-amber-300 animate-pulse group-hover:rotate-12 transition-transform" />
      <span className="text-xs font-bold tracking-wider text-amber-200">
        Royal Celebration
      </span>
    </button>
  );
};

interface RoyalInaugurationProps {
  onEnterWebsite: () => void;
  autoTransitionSeconds?: number;
}

export const RoyalInauguration: React.FC<RoyalInaugurationProps> = ({
  onEnterWebsite,
  autoTransitionSeconds = 10,
}) => {
  const [curtainOpened, setCurtainOpened] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showSmoke, setShowSmoke] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(autoTransitionSeconds);
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  // Celebrant data loaded from localStorage
  const [celebrant, setCelebrant] = useState<CelebrantData>(() => {
    try {
      const saved = localStorage.getItem('vetoa_celebrant_info');
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    return DEFAULT_CELEBRANT;
  });

  const confettiRef = useRef<ConfettiCanvasRef | null>(null);
  const countdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  const {
    isMuted,
    toggleMute,
    playCurtainWhoosh,
    playFanfare,
    playCandlePuff,
    playPop,
    unlockAudio,
  } = useInaugurationAudio();

  // Save celebrant info
  const handleSaveCelebrant = (data: CelebrantData) => {
    setCelebrant(data);
    try {
      localStorage.setItem('vetoa_celebrant_info', JSON.stringify(data));
    } catch {
      // Ignore
    }
    playPop();
  };

  // Open curtains ceremony
  const handleInaugurate = useCallback(() => {
    if (curtainOpened) return;
    unlockAudio();
    playCurtainWhoosh();
    setCurtainOpened(true);

    // Play grand fanfare and shoot confetti cannons
    setTimeout(() => {
      playFanfare();
      confettiRef.current?.burstCannon();
    }, 650);

    // Secondary burst as curtains fully open
    setTimeout(() => {
      confettiRef.current?.burstCannon();
    }, 1800);
  }, [curtainOpened, unlockAudio, playCurtainWhoosh, playFanfare]);

  // Replay curtains ceremony
  const handleReplay = () => {
    playPop();
    setCurtainOpened(false);
    setCandlesBlown(false);
    setShowSmoke(false);
    setSecondsRemaining(autoTransitionSeconds);
    setIsTimerPaused(false);
  };

  // Blow / Relight candles
  const handleToggleCandles = () => {
    if (!candlesBlown) {
      // Blow out
      playCandlePuff();
      setCandlesBlown(true);
      setShowSmoke(true);
      confettiRef.current?.burstCannon();
      setTimeout(() => setShowSmoke(false), 2400);
    } else {
      // Relight
      playPop();
      setCandlesBlown(false);
    }
  };

  // 10-Second Auto-Transition Countdown
  useEffect(() => {
    if (!curtainOpened || isTimerPaused || isModalOpen) {
      if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
      return;
    }

    countdownTimerRef.current = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
          onEnterWebsite();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
    };
  }, [curtainOpened, isTimerPaused, isModalOpen, onEnterWebsite]);

  // Calculate countdown progress percentage
  const progressPercent = Math.max(
    0,
    Math.min(100, (secondsRemaining / autoTransitionSeconds) * 100)
  );

  return (
    <div
      className={`inauguration-viewport ${
        curtainOpened ? 'curtain-opened' : ''
      }`}
    >
      {/* Dynamic stage spotlights */}
      <div className="stage-spotlight-left" />
      <div className="stage-spotlight-right" />
      <div className="stage-floor-light" />

      {/* Confetti and Ambient Sparkles Canvas */}
      <ConfettiCanvas ref={confettiRef} />

      {/* Top Floating Controls */}
      <div className="controls-top-bar">
        {curtainOpened && (
          <>
            <button
              onClick={() => confettiRef.current?.burstCannon()}
              className="control-glass-btn"
              title="Launch Confetti"
            >
              <PartyPopper className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Confetti</span>
            </button>

            <button
              onClick={() => {
                playPop();
                setIsModalOpen(true);
              }}
              className="control-glass-btn"
              title="Personalize Name, Photo & Message"
            >
              <Sliders className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Personalize</span>
            </button>

            <button
              onClick={handleReplay}
              className="control-glass-btn"
              title="Close Curtains and Re-inaugurate"
            >
              <RotateCcw className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Re-play</span>
            </button>
          </>
        )}

        {/* Audio Toggle */}
        <button
          onClick={toggleMute}
          className="control-glass-btn"
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-red-400" />
          ) : (
            <Volume2 className="w-4 h-4 text-amber-300" />
          )}
        </button>

        {/* Enter Website Button */}
        <button
          onClick={onEnterWebsite}
          className="control-glass-btn bg-amber-500/30 hover:bg-amber-500/50 border-amber-300 text-white font-bold"
          title="Proceed to VETOA Website"
        >
          <span>Enter Website</span>
          <ExternalLink className="w-3.5 h-3.5 ml-1" />
        </button>
      </div>

      {/* ================================================================
          IMPERIAL VALANCE & TASSELS (THEATER PROSCENIUM)
          ================================================================ */}
      <div className="valance-container">
        <div className="valance-header">
          <div className="valance-header-pattern" />
        </div>
        <div className="valance-swags">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="valance-swag" />
          ))}
        </div>
      </div>

      {/* Left and Right Hanging Tassels */}
      <div className="curtain-tassel curtain-tassel-left">
        <div className="tassel-rope" />
        <div className="tassel-knot" />
        <div className="tassel-skirt" />
      </div>
      <div className="curtain-tassel curtain-tassel-right">
        <div className="tassel-rope" />
        <div className="tassel-knot" />
        <div className="tassel-skirt" />
      </div>

      {/* ================================================================
          ROYAL VELVET CURTAIN PANELS (CLICK ANYWHERE TO OPEN)
          ================================================================ */}
      <div
        className="curtain-container"
        onClick={!curtainOpened ? handleInaugurate : undefined}
      >
        {/* Left Curtain Panel */}
        <div className="curtain-panel curtain-left">
          <div className="curtain-fabric" />
          <div className="curtain-bottom-fringe" />
        </div>

        {/* Right Curtain Panel */}
        <div className="curtain-panel curtain-right">
          <div className="curtain-fabric" />
          <div className="curtain-bottom-fringe" />
        </div>

        {/* Center Golden Inauguration Seal Medallion */}
        {!curtainOpened && (
          <div className="seal-wrapper">
            <button
              onClick={handleInaugurate}
              className="inauguration-seal-button"
              aria-label="Begin Inauguration Ceremony"
            >
              <div className="seal-inner-ring" />
              <div className="seal-content">
                <span className="seal-inaugurate-text">INAUGURATE</span>
              </div>
            </button>
            <div className="tap-hint-text">
              ✨ Tap or Click to Inaugurate ✨
            </div>
          </div>
        )}
      </div>

      {/* ================================================================
          REVEALED BIRTHDAY CELEBRATION STAGE
          ================================================================ */}
      <div className="celebration-stage">
        <div className="max-w-3xl w-full flex flex-col items-center text-center space-y-4 sm:space-y-6">
          {/* Top Royal Crest Badge */}
          <div className="royal-badge">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-amber-200 uppercase">
              Grand Royal Celebration • Sept 2026
            </span>
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          </div>

          {/* Golden Shimmering Title */}
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-cinzel golden-text-gradient leading-tight">
              Happy Birthday!
            </h1>
            <p className="text-sm sm:text-lg font-playfair italic text-amber-100/90 font-medium">
              In Honor of our Esteemed Leader & Inspiration
            </p>
          </div>

          {/* Celebrant Portrait in Baroque Golden Filigree Frame */}
          <div className="portrait-frame-wrapper group cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <div className="portrait-photo-container">
              {celebrant.photoUrl ? (
                <img
                  src={celebrant.photoUrl}
                  alt={celebrant.name}
                  className="portrait-image"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#400812] to-[#1a0206] text-amber-300 p-2">
                  <Crown className="w-12 h-12 text-amber-400 drop-shadow-md mb-1" />
                  <span className="text-[11px] font-bold font-cinzel text-amber-200 uppercase tracking-wider">
                    {celebrant.name}
                  </span>
                </div>
              )}
            </div>

            {/* Hover tooltip */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-amber-500/90 text-neutral-950 text-[10px] font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
              Tap to Edit Photo
            </div>
          </div>

          {/* Celebrant Name & Title */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-cinzel text-amber-100 tracking-wide drop-shadow-lg">
              {celebrant.name}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-amber-300/90 uppercase tracking-widest mt-0.5">
              {celebrant.title}
            </p>
          </div>

          {/* Heartfelt Tribute Wishes Card */}
          <div className="relative max-w-xl px-5 py-4 sm:px-8 sm:py-5 bg-black/40 border border-amber-400/30 rounded-2xl backdrop-blur-md shadow-2xl">
            <div className="flex items-center justify-center gap-1.5 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              Royal Felicitation & Wishes
              <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <p className="font-playfair text-sm sm:text-base text-amber-50/95 leading-relaxed italic">
              &ldquo;{celebrant.message}&rdquo;
            </p>
          </div>

          {/* Interactive Birthday Cake with Candles */}
          <div className="cake-interactive-box" onClick={handleToggleCandles}>
            <div className="cake-structure">
              {/* Candles */}
              <div className="candles-row">
                {[0, 1, 2].map((idx) => (
                  <div key={idx} className="candle-item">
                    <div className="candle-wick" />
                    {!candlesBlown && <div className="candle-flame" />}
                    {showSmoke && <div className="candle-smoke" />}
                  </div>
                ))}
              </div>

              {/* Cake Layers */}
              <div className="cake-tier-top">
                <div className="cake-frosting-piping" />
              </div>
              <div className="cake-tier-bottom">
                <div className="cake-frosting-piping" />
              </div>
              <div className="cake-plate" />
            </div>

            <div className="mt-2 text-xs font-semibold text-amber-300 flex items-center justify-center gap-1">
              <span>
                {candlesBlown
                  ? '✨ Candles Extinguished! (Tap to Relight)'
                  : '🎂 Tap Cake to Blow Candles & Make a Wish!'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================
          10-SECOND AUTO-TRANSITION COUNTDOWN BAR
          ================================================================ */}
      {curtainOpened && (
        <div className="transition-countdown-bar">
          <div className="flex items-center justify-between text-xs text-amber-200">
            <span className="font-medium flex items-center gap-1.5">
              <span>Entering VETOA Website in</span>
              <strong className="text-amber-400 font-bold text-sm">
                {secondsRemaining}s
              </strong>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  playPop();
                  setIsTimerPaused((prev) => !prev);
                }}
                className="hover:text-white p-1 text-amber-300 transition-colors"
                title={isTimerPaused ? 'Resume Countdown' : 'Pause Countdown'}
              >
                {isTimerPaused ? (
                  <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                    <Play className="w-3.5 h-3.5" /> Resume
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[11px] text-amber-300 font-semibold">
                    <Pause className="w-3.5 h-3.5" /> Pause
                  </span>
                )}
              </button>

              <button
                onClick={onEnterWebsite}
                className="inline-flex items-center gap-1 px-3 py-1 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-full shadow-md transition-transform hover:scale-105"
              >
                <span>Enter Now</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="countdown-progress-track">
            <div
              className="countdown-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Personalize Modal */}
      <PersonalizeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        celebrant={celebrant}
        onSave={handleSaveCelebrant}
      />
    </div>
  );
};
