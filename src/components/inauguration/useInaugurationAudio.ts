import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * Web Audio API synthesized sound generator for zero-latency,
 * zero-dependency realistic audio effects.
 */
export const useInaugurationAudio = () => {
  const [isMuted, setIsMuted] = useState(() => {
    try {
      return localStorage.getItem('vetoa_inauguration_muted') === 'true';
    } catch {
      return false;
    }
  });

  const audioCtxRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('vetoa_inauguration_muted', String(next));
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  }, []);

  /**
   * Realistic curtain glide swoosh / whoosh
   * Generated with filtered white noise swept downwards
   */
  const playCurtainWhoosh = useCallback(() => {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const duration = 2.4;
      const bufferSize = ctx.sampleRate * duration;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);

      // Generate soft pink/white noise
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99765 * b0 + white * 0.0555179;
        b1 = 0.96300 * b1 + white * 0.0750759;
        b2 = 0.57000 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2 + white * 0.08) * 0.18;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      // Filter to simulate rich velvet movement
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + duration);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.45, ctx.currentTime + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      whiteNoise.start();
    } catch {
      // Graceful fallback if audio context blocked
    }
  }, [isMuted, getAudioContext]);

  /**
   * Grand royal fanfare chimes
   * Orchestral bells arpeggio in C Major / G Major with harmonics
   */
  const playFanfare = useCallback(() => {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      // Musical notes (C5, E5, G5, C6, E6, G6)
      const frequencies = [523.25, 659.25, 783.99, 1046.5, 1318.5, 1567.98];

      frequencies.forEach((freq, index) => {
        const noteStart = now + 0.15 * index;
        const osc = ctx.createOscillator();
        const subOsc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, noteStart);

        subOsc.type = 'sine';
        subOsc.frequency.setValueAtTime(freq * 2, noteStart); // Bell shimmer harmonic

        gain.gain.setValueAtTime(0.001, noteStart);
        gain.gain.linearRampToValueAtTime(0.18, noteStart + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 1.8);

        osc.connect(gain);
        subOsc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(noteStart);
        subOsc.start(noteStart);
        osc.stop(noteStart + 1.8);
        subOsc.stop(noteStart + 1.8);
      });
    } catch {
      // Fallback
    }
  }, [isMuted, getAudioContext]);

  /**
   * Candle blow-out puff sound + celebration chime
   */
  const playCandlePuff = useCallback(() => {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      // Breath puff noise
      const duration = 0.45;
      const bufferSize = ctx.sampleRate * duration;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.25;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(700, now);
      filter.Q.setValueAtTime(1.2, now);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.35, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);

      // Cheerful chime after extinguishing
      const chimeOsc = ctx.createOscillator();
      const chimeGain = ctx.createGain();
      chimeOsc.type = 'sine';
      chimeOsc.frequency.setValueAtTime(880, now + 0.25);
      chimeOsc.frequency.exponentialRampToValueAtTime(1320, now + 0.7);

      chimeGain.gain.setValueAtTime(0.001, now + 0.25);
      chimeGain.gain.linearRampToValueAtTime(0.15, now + 0.3);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.0);

      chimeOsc.connect(chimeGain);
      chimeGain.connect(ctx.destination);
      chimeOsc.start(now + 0.25);
      chimeOsc.stop(now + 1.0);
    } catch {
      // Fallback
    }
  }, [isMuted, getAudioContext]);

  /**
   * Gentle pop sound for clicks
   */
  const playPop = useCallback(() => {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // Fallback
    }
  }, [isMuted, getAudioContext]);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try {
          audioCtxRef.current.close();
        } catch {
          // Cleanup
        }
      }
    };
  }, []);

  return {
    isMuted,
    toggleMute,
    playCurtainWhoosh,
    playFanfare,
    playCandlePuff,
    playPop,
    unlockAudio: getAudioContext,
  };
};
