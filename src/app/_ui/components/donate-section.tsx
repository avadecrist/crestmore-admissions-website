
import Link from 'next/link';
export default function DonateSection() {
    return (
      <section id='donate' className='mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center scroll-mt-24 pt-15 pb-40'>

        {/* Donation Card */}
        <div className='mt-12 w-full max-w-xl bg-offwhite border border-offblack rounded-2xl shadow-sm p-8 text-center'>
          <h3 className='text-navy'>
            Keep the Mics On 🎙️
          </h3>
          
          <p className='mt-4 text-offblack text-sm'>
            Any contribution, big or small, makes a difference and allows us to continue creating 
            Crestmore Admissions! Thank you for being a part of the Crestmore family and for 
            helping us keep the mics on.
          </p>

          <Link
            href='https://buy.stripe.com/test_5kQfZg6dc9EQb71aNy0sU00'
            target='_blank'
            rel='noopener noreferrer'
            className='mt-8 inline-block rounded-xl bg-navy px-8 py-3 text-offwhite font-semibold hover:opacity-90 transition'
          >
            Support Us
          </Link>

          <p className='mt-4 text-xs text-navy opacity-70'>
            Secure payments powered by Stripe
          </p>

        </div>
      </section>
    );
}