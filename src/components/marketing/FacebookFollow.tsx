import { Facebook } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/social';

/**
 * Small social-follow strip sitting between HomeContactForm and the
 * footer. The Facebook URL lives in src/lib/social.ts alongside the
 * header and footer icon links.
 */

export function FacebookFollow() {
  return (
    <section className="py-12 lg:py-14 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-base lg:text-lg text-gray-600 mb-5 max-w-xl mx-auto">
          Follow TOFA Group on Facebook for updates, projects, and new home inspiration.
        </p>
        <a
          href={SOCIAL_LINKS.facebook}
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
