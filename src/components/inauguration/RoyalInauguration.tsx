import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Volume2,
  VolumeX,
  Sparkles,
  RotateCcw,
  ExternalLink,
  Crown,
  PartyPopper,
  Pause,
  Play,
  ChevronRight,
  ShieldCheck,
  User,
  Camera,
} from 'lucide-react';
import './inauguration.css';
import { useInaugurationAudio } from './useInaugurationAudio';
import { ConfettiCanvas, ConfettiCanvasRef } from './ConfettiCanvas';
import {
  DEFAULT_COMMITTEE_MEMBERS,
  CommitteeMember,
} from './committeeData';
import { EditMemberModal } from './EditMemberModal';

/**
 * Checks if current date is within celebration window (20-09-2026 to 28-09-2026)
 * or explicitly enabled via URL query parameter.
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
      title="View VETOA Kozhikode District Committee Inauguration"
      aria-label="View VETOA Kozhikode District Committee Inauguration"
    >
      <Crown className="w-5 h-5 text-amber-300 animate-pulse group-hover:rotate-12 transition-transform" />
      <span className="text-xs font-bold tracking-wider text-amber-200">
        Committee
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
  autoTransitionSeconds = 20,
}) => {
  const [curtainOpened, setCurtainOpened] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(autoTransitionSeconds);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [editingMember, setEditingMember] = useState<CommitteeMember | null>(null);

  // Committee members list loaded from localStorage if customized
  const [members, setMembers] = useState<CommitteeMember[]>(() => {
    try {
      const saved = localStorage.getItem('vetoa_committee_members_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.map((m: CommitteeMember) =>
            m.id === 'anand-kumar'
              ? DEFAULT_COMMITTEE_MEMBERS.find((d) => d.category === 'president') || m
              : m
          );
        }
      }
    } catch {
      // Ignore
    }
    return DEFAULT_COMMITTEE_MEMBERS;
  });

  const confettiRef = useRef<ConfettiCanvasRef | null>(null);
  const countdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  const {
    isMuted,
    toggleMute,
    playCurtainWhoosh,
    playFanfare,
    playPop,
    unlockAudio,
  } = useInaugurationAudio();

  // Save updated member profile
  const handleSaveMember = (updated: CommitteeMember) => {
    setMembers((prev) => {
      const next = prev.map((m) => (m.id === updated.id ? updated : m));
      try {
        localStorage.setItem('vetoa_committee_members_v1', JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
    playPop();
  };

  // Open curtains ceremony
  const handleInaugurate = useCallback(() => {
    if (curtainOpened) return;
    unlockAudio();
    playCurtainWhoosh();
    setCurtainOpened(true);
    setSecondsRemaining(autoTransitionSeconds);

    // Play grand fanfare and shoot confetti cannons as curtains open
    setTimeout(() => {
      playFanfare();
      confettiRef.current?.burstCannon();
    }, 900);

    // Secondary celebratory burst as curtains fully reach the sides
    setTimeout(() => {
      confettiRef.current?.burstCannon();
    }, 2600);
  }, [curtainOpened, unlockAudio, playCurtainWhoosh, playFanfare, autoTransitionSeconds]);

  // Replay ceremony
  const handleReplay = () => {
    playPop();
    setCurtainOpened(false);
    setSecondsRemaining(autoTransitionSeconds);
    setIsTimerPaused(false);
  };

  // 20-Second Auto-Transition Countdown
  useEffect(() => {
    if (!curtainOpened || isTimerPaused || editingMember !== null) {
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
  }, [curtainOpened, isTimerPaused, editingMember, onEnterWebsite]);

  // Progress percentage
  const progressPercent = Math.max(
    0,
    Math.min(100, (secondsRemaining / autoTransitionSeconds) * 100)
  );

  const getRoleBadgeClass = (category: CommitteeMember['category']) => {
    switch (category) {
      case 'president':
        return 'role-badge-president';
      case 'secretary':
        return 'role-badge-sec';
      case 'treasurer':
        return 'role-badge-treasurer';
      case 'vp':
        return 'role-badge-vp';
      case 'advisor':
        return 'role-badge-advisor';
      default:
        return 'role-badge-vp';
    }
  };

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
              onClick={() => {
                playPop();
                confettiRef.current?.burstCannon();
              }}
              className="control-glass-btn"
              title="Launch Confetti"
            >
              <PartyPopper className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Celebrate</span>
            </button>

            <button
              onClick={handleReplay}
              className="control-glass-btn"
              title="Close Curtains and Re-inaugurate"
            >
              <RotateCcw className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Re-inaugurate</span>
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
          {curtainOpened && (
            <span className="ml-1 text-xs text-amber-200 font-semibold bg-black/40 px-1.5 py-0.5 rounded-full border border-amber-400/40">
              {secondsRemaining}s
            </span>
          )}
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

        {/* Center Golden Inauguration Seal Medallion (INAUGURATE only) */}
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
          </div>
        )}
      </div>

      {/* ================================================================
          REVEALED EXECUTIVE COMMITTEE SHOWCASE STAGE (ONE-PAGE NEAT VIEW)
          ================================================================ */}
      <div className="celebration-stage">
        <div className="w-full max-w-7xl flex flex-col items-center text-center space-y-2 sm:space-y-3">
          {/* Main Title Hierarchy - Grand, Prominent & Centered */}
          <div className="space-y-1 text-center max-w-5xl px-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold font-cinzel golden-text-gradient tracking-wider uppercase leading-tight">
              Kozhikode District Committee
            </h1>
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-playfair font-semibold tracking-wide text-amber-100/95">
              Vehicle Emission Testing Owners Association <span className="text-amber-400">•</span> Executive Board
            </h2>
          </div>

          {/* 8-Member Executive Committee Grid (Expanded & Prominent) */}
          <div className="committee-grid mt-1">
            {members.map((member) => (
              <div
                key={member.id}
                className="committee-card group cursor-pointer"
                onClick={() => {
                  playPop();
                  setEditingMember(member);
                }}
                title={`Click to view or edit photo for ${member.name}`}
              >
                {/* Portrait Photo Frame */}
                <div className="committee-photo-wrap">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={`${member.name} - ${member.role}`}
                      className="committee-photo"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#400812] to-[#1a0206] flex flex-col items-center justify-center text-amber-300 border-2 border-amber-300/80">
                      <User className="w-12 h-12 text-amber-300/90 drop-shadow-sm" />
                    </div>
                  )}

                  {/* Hover Camera Icon */}
                  <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Camera className="w-4 h-4 text-amber-300" />
                  </div>
                </div>

                {/* Member Name */}
                <h3 className="committee-name">
                  {member.name}
                </h3>

                {/* Role Badge */}
                <div className={`committee-role-badge ${getRoleBadgeClass(member.category)}`}>
                  <span>{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit / Upload Member Photo Modal */}
      <EditMemberModal
        isOpen={editingMember !== null}
        onClose={() => setEditingMember(null)}
        member={editingMember}
        onSave={handleSaveMember}
      />
    </div>
  );
};
