// section with "keep up woth Sam and Lucy's shenanigans"
// can add this to bottom of contact page too!
import IconLink from '../socials/icon';
import {
  spotifyIconLinks,
  instaIconLinks,
  tiktokIconLinks,
} from '@/app/_data/social-links';

export default function LinksSection(){
  return(
    <>
      {/* Top Border Line */}
      <div className='w-full border-b border-offblack mt-10' />
      
      <div className='py-10 text-offblack flex flex-col items-start gap-5'>

        <div className='flex flex-col md:flex-row items-start gap-4'>
          <p>Keep up with Sam and Lucy’s shenanigans!</p>
          {/* Linked Icon components */}
          <div className='flex flex-row items-center gap-2'>
            {spotifyIconLinks.map((link) => (
              <IconLink
                key={link.href}
                href={link.href}
                iconKey={link.iconKey}
                label={link.label}
                size={18}
                variant='icon'
                className='text-beige bg-navy hover:bg-navy/90 rounded-lg p-1'
              />
            ))}
            <p>Spotify</p>
          </div>
        </div>

        <div className='flex flex-row justify-start gap-4'>
          <p>Follow Us:</p>

          {/* Linked Icon components */}
          <div className='flex flex-row items-center gap-2'>
            {instaIconLinks.map((link) => (
              <IconLink
                key={link.href}
                href={link.href}
                iconKey={link.iconKey}
                label={link.label}
                size={18}
                variant='icon'
                className='text-beige bg-navy hover:bg-navy/90 rounded-lg p-1'
              />
            ))}
            <p>Instagram</p>

            <p>|</p>

            {tiktokIconLinks.map((link) => (
              <IconLink
                key={link.href}
                href={link.href}
                iconKey={link.iconKey}
                label={link.label}
                size={18}
                variant='icon'
                className='text-beige bg-navy hover:bg-navy/90 rounded-lg p-1'
              />
            ))}
            <p>Tiktok</p>
          </div>
        </div>

      </div>

      {/* Bottom Border Line */}
      <div className='w-full border-t border-offblack pb-2'></div>
    </>
  );
}