'use client';

import { useTimer } from 'react-timer-hook';
import { FaPhone } from 'react-icons/fa6';

type CountdownTimerProps = {
  expiryTimestamp: Date;
  variant?: 'default' | 'small';
};

export default function CountdownTimer({ expiryTimestamp, variant = 'default', }: CountdownTimerProps) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
  } = useTimer({
    expiryTimestamp,
    autoStart: true,
  });

  const isSmall = variant === 'small';

  return (
    <div className={`relative flex z-10 items-start group cursor-pointer
        ${isSmall ? 'gap-3' : 'gap-6'}
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
    <div className='flex flex-col items-center'>
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
