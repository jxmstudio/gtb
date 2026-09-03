import { Star } from 'lucide-react';

/**
 * GoogleReviews — Google Business Profile reviews section, stubbed behind
 * an env flag until the client claims their GBP listing.
 *
 * Enable by setting NEXT_PUBLIC_GBP_PLACE_ID (the Place ID from the
 * claimed Google Business Profile) in the environment — see README
 * "Google reviews" section. While unset, this component renders nothing,
 * so users never see an empty or broken state.
 *
 * TODO: once the client provides the claimed GBP link/Place ID, consider
 * upgrading this from a "read our reviews" link section to an embedded
 * reviews widget (Places API or a third-party embed) — the flag and
 * placement stay the same.
 */
export function GoogleReviews() {
  const placeId = process.env.NEXT_PUBLIC_GBP_PLACE_ID;
  if (!placeId) return null;

  const reviewsUrl = `https://search.google.com/local/reviews?placeid=${encodeURIComponent(placeId)}`;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center gap-1 mb-4" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
          ))}
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-gtb-navy mb-3 font-brand">
          See what clients say on Google
        </h2>
        <p className="text-gray-600 mb-6">
          Real reviews from TOFA Group clients, straight from our Google Business Profile.
        </p>
        <a
          href={reviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-gtb-aero hover:bg-gtb-aero-light text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
        >
          Read our Google reviews
        </a>
      </div>
    </section>
  );
}
