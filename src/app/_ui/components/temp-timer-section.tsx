import CountdownTimer from '@/app/_ui/components/countdown-timer';

export default function TimerSection() {
  const launchDate = new Date(Date.UTC(2026, 1, 27, 19, 0, 0));

  return (
    
    <section className="py-20 px-6 flex flex-col items-center relative">
        <h3 className="text-black w-full md:w-2/3 text-center pb-8 leading-tight tracking-tight">
        CRESTMORE ADMISSIONS EPISODE 1 IS RELEASED IN
        </h3>

        <CountdownTimer expiryTimestamp={launchDate} />
        
    </section>
  );
}
