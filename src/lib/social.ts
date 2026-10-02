/**
 * TOFA Group social profiles — single source of truth for the header
 * icons, footer icons, home-page Facebook strip and Organization schema.
 */
export const SOCIAL_LINKS = {
  // Public Facebook profile supplied by George (Oct 2026), replacing the
  // old private group URL.
  facebook: 'https://www.facebook.com/profile.php?id=61584283230501',
  instagram: 'https://www.instagram.com/thetofagroup/',
  // No TOFA Group company page exists yet, so this points at George
  // Tofa's personal profile. Swap for the company page once one is set up.
  linkedin: 'https://www.linkedin.com/in/george-tofa-64027159/',
} as const;
