import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Locations | TOFA Group Builds Across Melbourne & Surrounds",
  description: "TOFA Group builds custom homes and commercial projects across Melbourne & surrounds — Avondale Heights, Essendon, Moonee Ponds, Keilor, Taylors Lakes and beyond. Find your local builder.",
};

const locations = [
  {
    name: "Melbourne",
    badge: "Greater Melbourne",
    description: "Licensed residential and commercial builder serving all of Melbourne & surrounds.",
    href: "/locations/melbourne",
    photo: "/tofaphotos/Verv_PROJECTS_Acacia.jpg",
  },
  {
    name: "Essendon",
    badge: "Moonee Valley Council",
    description: "Custom homes, knockdown rebuilds, and renovations in one of Melbourne's most sought-after northwest suburbs.",
    href: "/locations/essendon",
    photo: "/tofaphotos/Verv_PROJECTS_Alma.jpg",
  },
  {
    name: "Moonee Ponds",
    badge: "Moonee Valley Council",
    description: "Knockdown rebuilds, extensions, and heritage-sensitive renovations in Moonee Ponds' popular inner suburbs.",
    href: "/locations/moonee-ponds",
    photo: "/tofaphotos/Verv_PROJECTS_Amara.jpg",
  },
  {
    name: "Avondale Heights",
    badge: "Our Home Base",
    description: "TOFA Group is based in Avondale Heights — giving you the fastest response times and deepest local knowledge.",
    href: "/locations/avondale-heights",
    photo: "/tofaphotos/Verv_PROJECTS_Clara.jpg",
  },
  {
    name: "Keilor",
    badge: "Brimbank Council",
    description: "Larger blocks and growing demand for custom builds in Keilor — just 5 minutes from TOFA Group's base.",
    href: "/locations/keilor",
    photo: "/tofaphotos/Verv_PROJECTS_Terano.jpg",
  },
  {
    name: "Taylors Lakes",
    badge: "Brimbank Council",
    description: "Family-focused suburb with large blocks and strong demand for quality custom homes over volume builders.",
    href: "/locations/taylors-lakes",
    photo: "/tofaphotos/691d82d537bc214fa00e9901_HIGHBURY-15--EDEN--OAK-VELOUR.avif",
  },
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gtb-navy py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">
              <MapPin className="h-4 w-4" />
              Melbourne &amp; Surrounds
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We Build Across Melbourne &amp; Surrounds
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Based in Avondale Heights, TOFA Group delivers quality residential and commercial construction across
              Melbourne &amp; surrounds. Select your suburb to learn more about building in your area.
            </p>
          </div>
        </section>

        {/* Location Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((loc) => (
                <Link
                  key={loc.name}
                  href={loc.href}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-72 flex flex-col justify-end"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${loc.photo})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gtb-navy/90 via-gtb-navy/40 to-transparent" />
                  <div className="relative z-10 p-6">
                    <span className="bg-gtb-aero text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                      {loc.badge}
                    </span>
                    <h2 className="text-2xl font-bold text-white mb-2">{loc.name}</h2>
                    <p className="text-white/80 text-sm mb-3 leading-relaxed">{loc.description}</p>
                    <div className="flex items-center text-gtb-aero text-sm font-semibold">
                      Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gtb-navy mb-2">500+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gtb-navy mb-2">15+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gtb-navy mb-2">$75M+</div>
                <div className="text-gray-600 text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gtb-navy mb-2">98%</div>
                <div className="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-gtb-navy to-gtb-navy-light text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-4">Don&apos;t See Your Suburb?</h2>
            <p className="text-xl text-white mb-8">
              TOFA Group takes on projects across greater Melbourne. Contact us to discuss your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-10 py-5 rounded-lg text-lg font-bold shadow-xl transition-colors inline-flex items-center justify-center group"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:1300000685"
                className="bg-white text-gtb-navy hover:bg-gray-100 px-10 py-5 rounded-lg text-lg font-bold shadow-xl transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                1300 000 685
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
