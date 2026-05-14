import { Facebook } from 'lucide-react';

/**
 * Small social-follow strip sitting between HomeContactForm and the
 * footer. Uses the same Facebook URL that's already wired into the
 * footer icon link to keep the source of truth in one place.
 *
 * If the TOFA Facebook page URL ever changes, update it here AND in
 * src/components/Footer.tsx.
 */

// Facebook group/page URL — matches the link already used in Footer.tsx.
// TODO: replace with the public Facebook *Page* URL once TOFA Group has
// one set up (the current link is a private/group URL).
const FACEBOOK_URL = 'https://www.facebook.com/groups/1680469966691932/';

export function FacebookFollow() {
  return (
    <section className="py-12 lg:py-14 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-base lg:text-lg text-gray-600 mb-5 max-w-xl mx-auto">
          Follow TOFA Group on Facebook for updates, projects, and new home inspiration.
        </p>
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#1877F2] hover:bg-[#166fdf] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors shadow-sm"
        >
          <Facebook className="mr-2 h-5 w-5" />
          Follow us on Facebook
        </a>
      </div>
    </section>
  );
}
