// Isolated Episode Page
import CastCard from "../../_ui/episodes/cast-card";
import {
  nickIconLinks,
} from '@/app/_data/social-links';


export default async function EpisodePage({
  params,
}: {
  params: { episodeId: string };
}) {
    return (
        <div className='pt-10 bg-background w-full flex flex-row items-center text-center'>
            <div className='text-navy'>
                <h1>EPISODES</h1>
                <p>New episodes will drop every Friday starting Feb 27th! Tune in on Spotify or Youtube for the latest episode.</p>
                <div className='w-full border-b'>

                
                </div>
            </div>
        </div>
    );
}