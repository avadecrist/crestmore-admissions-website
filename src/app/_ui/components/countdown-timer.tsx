'use client';
import { useState, useEffect, useRef } from 'react';
import { useTimer } from 'react-timer-hook';
import confetti from 'canvas-confetti';
import { FaPhone } from 'react-icons/fa6';

type CountdownTimerProps = {
  expiryTimestamp: Date;
  variant?: 'default' | 'small';
};

const LAUNCH_CONFETTI_SESSION_KEY = 'crestmore_launch_confetti_fired_v1';

export default function CountdownTimer({ expiryTimestamp, variant = 'default', }: CountdownTimerProps) {

  // mounted guard for server and client load times
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const isSmall = variant === 'small';

  const confettiFiredRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  const fireConfettiOnce = () => {
    if (!isSmall) return;

    // Prevent repeats within this component instance
    if (confettiFiredRef.current) return;

    // Prevent repeats within this browser session (tab/window session)
    try {
      if (sessionStorage.getItem(LAUNCH_CONFETTI_SESSION_KEY) === '1') return;
      sessionStorage.setItem(LAUNCH_CONFETTI_SESSION_KEY, '1');
    } catch {
      // If storage is unavailable, fall back to per-instance guard only
    }

    confettiFiredRef.current = true;

    confetti({ particleCount: 120, spread: 70, origin: { y: 0.65 } }); // or { y: 0.25 }
    timeoutRef.current = window.setTimeout(() => {
      confetti({ particleCount: 80, spread: 90, origin: { y: 0.6 } });
    }, 250);
  };

  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({
    expiryTimestamp,
    autoStart: true,
    onExpire: fireConfettiOnce,
  });

  // Catch-up: if user arrives AFTER expiry, trigger once on mount/after hydration
  useEffect(() => {
    if (!isSmall) return;

    const now = new Date();
    if (now >= expiryTimestamp) fireConfettiOnce();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSmall, expiryTimestamp]);

  // Cleanup the timeout (optional polish)
  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);
  if (!mounted) return null;

  return (
    <div className={`relative flex z-10 items-start group
        ${isSmall ? 'gap-3' : 'gap-6 cursor-pointer'}
      `}>

      {!isSmall && (
      <div className='relative inline-flex justify-center items-start'>
          <span className='big-wave big-wave--1 text-navy' aria-hidden='true' />
          <span className='big-wave big-wave--2 text-navy' aria-hidden='true' />
          <FaPhone className='mt-3 ring-icon text-offblack text-2xl transition-transform duration-200' />
      </div>
      )}
        <TimeBlock label='Days' value={days} small={isSmall} />
        <TimeBlock label='Hours' value={hours} small={isSmall} />
        <TimeBlock label='Minutes' value={minutes} small={isSmall} />
        <TimeBlock label='Seconds' value={seconds} small={isSmall} />
    </div>
  );
}

function TimeBlock({ label, value, small = false }: { label: string; value: number; small?: boolean }) {
  return (
    <div className='flex flex-col items-center text-offblack'>
      <span className={`
          font-semibold tabular-nums
          ${small ? 'text-lg' : 'text-4xl'}
        `}>
        {String(value).padStart(2, '0')}
      </span>

      <span className={`tracking-widest opacity-70 ${small ? 'text-xs lowercase' : 'text-sm uppercase'}`}>
        {label}
      </span>

    </div>
  );
}
