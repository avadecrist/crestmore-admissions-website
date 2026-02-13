
import type { ReactNode } from 'react';
import { SocialMediaData } from '@/app/data/social-links';
import IconLink from '../socials/icon';

type EmbeddedSectionProps = {
  title?: string;
  iconLinks: SocialMediaData[];
  embeddedContent: ReactNode;
};

export default function EmbeddedSection({
  title,
  iconLinks,
  embeddedContent,
}: EmbeddedSectionProps) {
    return (
        <div className='flex flex-col items-center gap-2'>
            {/* Placeholder for iconKey link with account name as label */}
            {iconLinks.map((link) => (
                <IconLink
                    key={link.href}
                    href={link.href}
                    iconKey={link.iconKey}
                    label={link.label}
                    variant="labeled"
                    className="text-navy"
                />
                ))}

            {/* Placeholder for embedded content */}
            <div className="w-full overflow-hidden rounded-2xl border border-offblack/10 bg-white shadow-sm">
                {embeddedContent}
            </div>

        </div>
    );
}