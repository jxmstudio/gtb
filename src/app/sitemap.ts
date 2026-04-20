import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.tofagroup.com.au';

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('T')[0];

  return [
    // Core pages
    { url: `${BASE_URL}`,                                    lastModified: today, changeFrequency: 'monthly',  priority: 1.0 },
    { url: `${BASE_URL}/about`,                              lastModified: today, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${BASE_URL}/contact`,                            lastModified: today, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${BASE_URL}/projects`,                           lastModified: today, changeFrequency: 'weekly',   priority: 0.9 },
    { url: `${BASE_URL}/team`,                               lastModified: today, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${BASE_URL}/faqs`,                               lastModified: today, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${BASE_URL}/packages`,                           lastModified: today, changeFrequency: 'weekly',   priority: 0.8 },
    { url: `${BASE_URL}/first-home-buyers`,                  lastModified: today, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${BASE_URL}/investors`,                          lastModified: today, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${BASE_URL}/build-now-pay-later`,                lastModified: today, changeFrequency: 'monthly',  priority: 0.7 },

    // Services
    { url: `${BASE_URL}/services`,                           lastModified: today, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${BASE_URL}/services/residential-construction`,  lastModified: today, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${BASE_URL}/services/knockdown-rebuild`,         lastModified: today, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${BASE_URL}/services/renovations-extensions`,    lastModified: today, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${BASE_URL}/services/design-and-build`,          lastModified: today, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${BASE_URL}/services/commercial-construction`,   lastModified: today, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${BASE_URL}/services/project-management`,        lastModified: today, changeFrequency: 'monthly',  priority: 0.7 },

    // Locations
    { url: `${BASE_URL}/locations`,                          lastModified: today, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${BASE_URL}/locations/melbourne`,                lastModified: today, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${BASE_URL}/locations/avondale-heights`,         lastModified: today, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${BASE_URL}/locations/essendon`,                 lastModified: today, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${BASE_URL}/locations/moonee-ponds`,             lastModified: today, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${BASE_URL}/locations/keilor`,                   lastModified: today, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${BASE_URL}/locations/taylors-lakes`,            lastModified: today, changeFrequency: 'monthly',  priority: 0.7 },
  ];
}
