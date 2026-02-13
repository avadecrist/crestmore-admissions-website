type SocialEmbedFrameProps = {
  src: string;
  title?: string;
  // default is 4/5 but override per platform if needed
  aspect?: `${number}/${number}`; // e.g. '4/5', '9/16', '16/9'
  className?: string;
};

export default function SocialEmbedFrame({
  src,
  title = 'Social embed',
  aspect = '4/5',
  className = '',
}: SocialEmbedFrameProps) {
  return (
    <div className={`w-full overflow-hidden rounded-2xl border border-offblack/10 bg-white shadow-sm ${className}`}>
      <div className='w-full' style={{ aspectRatio: aspect }}>
        <iframe
          title={title}
          src={src}
          className='h-full w-full'
          loading='lazy'
          allow='encrypted-media; fullscreen'
        />
      </div>
    </div>
  );
}