'use client';

import { useTimer } from 'react-timer-hook';
import { FaPhone } from 'react-icons/fa6';

type CountdownTimerProps = {
  expiryTimestamp: Date;
};

export default function CountdownTimer({ expiryTimestamp }: CountdownTimerProps) {
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

  return (
    <div className="relative flex z-10 gap-6 items-top group cursor-pointer">
      <div className="relative inline-flex justify-center items-start">
          <span className="big-wave big-wave--1 text-navy" aria-hidden="true" />
          <span className="big-wave big-wave--2 text-navy" aria-hidden="true" />
          <FaPhone className="mt-3 ring-icon text-offblack text-2xl transition-transform duration-200" />
      </div>
        <TimeBlock label="Days" value={days} />
        <TimeBlock label="Hours" value={hours} />
        <TimeBlock label="Minutes" value={minutes} />
        <TimeBlock label="Seconds" value={seconds} />
    </div>
  );
}

function TimeBlock({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-semibold tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs tracking-widest uppercase opacity-70">
        {label}
      </span>
    </div>
  );
}
