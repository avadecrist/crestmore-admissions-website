// import CastCard from '@/app/_ui/episodes/cast-card';
import CastCarousel from '@/app/_ui/episodes/cast-carousel';
import { chloe, shaira, nick, lauren, sebastian, ethan, lars, sophia, ashley } from '@/app/_data/cast';

export default function CastCardTestPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-center text-navy">CastCard Preview</h1>

        <div className="mx-auto max-w-6xl">
          <CastCarousel members={[chloe, shaira, nick, lauren, sebastian, ethan, lars, sophia, ashley]} />
        </div>
      </div>
    </main>
  );
}

