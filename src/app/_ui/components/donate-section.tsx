import Link from 'next/link';
export default function DonateSection() {
    return (
      <section id='donate' className='mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center scroll-mt-24 pt-15 pb-25'>
        <div className='w-full border-b border-offblack pb-6 text-center'>
          <h2 className='text-navy'>Support the Podcast</h2>
          <p className='text-navy mt-2 max-w-2xl mx-auto'>
            This original Audio Fiction podcast series was entirely made by students.
            Your support helps cover production fees, hosting fees, and opens up more opportunities for student creators to bring their stories to life.
          </p>
        </div>

        {/* Donation Card */}
        <div className='mt-12 w-full max-w-xl bg-offwhite border border-offblack rounded-2xl shadow-sm p-8 text-center'>
          <h3 className='text-xl font-semibold text-navy'>
          Keep the Mics On 🎙️
          </h3>

          <p className='mt-4 text-navy text-sm'>
            Any contribution, big or small, makes a difference and allows us to progress our journey with Crestmore Admissions!
            Thank you for being a part of our community and helping us keep the mics on.
          </p>

          <Link
            href='https://buy.stripe.com/test_5kQfZg6dc9EQb71aNy0sU00'
            target='_blank'
            rel='noopener noreferrer'
            className='mt-8 inline-block rounded-xl bg-navy px-8 py-3 text-white font-semibold hover:opacity-90 transition'
          >
            Donate Now
          </Link>

          <p className='mt-4 text-xs text-navy opacity-70'>
            Secure payments powered by Stripe
          </p>

        </div>
      </section>
    );
}