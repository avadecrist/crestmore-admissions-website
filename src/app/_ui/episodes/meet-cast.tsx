// section with Meet the Cast header and CastCarousel
// PROP: castMembers: CastMember[] (from EpisodeExtras)
import CastCarousel from './cast-carousel';
import { CastMember } from '@/app/_types/episode';
import Image from 'next/image';

type MeetCastProps = {
    castMembers: CastMember[]
}

export default function MeetCast({
    castMembers,
}: MeetCastProps) {
    return(
    <>
        {/* Header */}
        <div className='w-full max-w-sm md:max-w-6xl border-b border-offblack pb-6 text-center'>
            <h2 className='text-navy'>Meet the Cast</h2>
        </div>
        

        {/* Carousel */}
        <div className="mt-10">
            {castMembers.length > 0 && (
            <CastCarousel 
                members={castMembers} 
            />
            )}
        </div>
    </>
    );
}