import CountdownTimer from '@/app/ui/components/countdown-timer';

export default function TimerSection() {
  const launchDate = new Date(Date.UTC(2026, 1, 10, 17, 0, 0));

  return (
    
    <section className="py-20 flex flex-col items-center relative">
        <h2 className="font-sans text-black w-full md:w-2/3 text-center pb-8 leading-tight tracking-tight">
        CRESTMORE ADMISSIONS EPISODE 1 IS RELEASED IN
        </h2>

        {/* wave for pulse animation */}
        <div className="relative inline-flex justify-center items-start">
            <span className="big-wave big-wave--1 text-navy" aria-hidden="true" />
            <span className="big-wave big-wave--2 text-navy" aria-hidden="true" />

            <CountdownTimer expiryTimestamp={launchDate} />
        </div>
    </section>
  );
}
