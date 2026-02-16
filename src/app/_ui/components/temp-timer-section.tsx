import dynamic from 'next/dynamic';
// only render CountdownTimer on client side to avoid ssr hydration error
const CountdownTimer = dynamic(
  () => import('@/app/_ui/components/countdown-timer'),
  { ssr: false }
);

export default function TimerSection() {
  const launchDate = new Date(Date.UTC(2026, 1, 27, 19, 0, 0));

  return ( 
    <section className="py-20 px-6 flex flex-col items-center relative">
        <h3 className="text-offblack w-full md:w-2/3 text-center pb-8 leading-tight tracking-tight">
        CRESTMORE ADMISSIONS EPISODE 1 IS RELEASED IN
        </h3>

        <CountdownTimer expiryTimestamp={launchDate} />
        
    </section>
  );
}
