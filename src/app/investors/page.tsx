import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RevealOnScroll, StaggerReveal } from '@/components/motion/Reveals';
import { MotionDiv, MotionH2, MotionP, staggerContainer, staggerItem } from '@/components/motion/MotionPrimitives';
import StickyHeader from '@/components/marketing/StickyHeader';
import Testimonials from '@/components/marketing/Testimonials';
import PartnerLogos from '@/components/marketing/PartnerLogos';
import { AnimatedButton } from '@/components/motion/AnimatedButton';
import Link from 'next/link';
import { 
  TrendingUp, 
  DollarSign, 
  Home as HomeIcon, 
  BarChart3,
  ArrowRight,
  Calendar,
  Phone,
  CheckCircle
} from 'lucide-react';

const investmentStrategies = [
  {
    title: "Turnkey Investment Properties",
    description: "Fully furnished, tenant-ready properties with guaranteed rental income from day one.",
    features: [
      "Immediate rental income",
      "Professional tenant placement",
      "Property management included",
      "Expected ROI: 6-7%",
      "Zero management hassle"
    ],
    roi: "6-7%",
    timeframe: "Immediate"
  },
  {
    title: "Custom Build Investments",
    description: "Build-to-rent properties designed specifically for maximum rental yield and capital growth.",
    features: [
      "Customized for rental market",
      "Higher rental yields",
      "Modern amenities",
      "Expected ROI: 7-8%",
      "Long-term capital growth"
    ],
    roi: "7-8%",
    timeframe: "12-18 months"
  },
  {
    title: "Portfolio Development",
    description: "Strategic property portfolio building across multiple locations for diversification.",
    features: [
      "Diversified risk",
      "Multiple income streams",
      "Scalable strategy",
      "Expected ROI: 6.5-7.5%",
      "Professional management"
    ],
    roi: "6.5-7.5%",
    timeframe: "2-3 years"
  }
];

const benefits = [
  {
    icon: <TrendingUp className="h-8 w-8 text-gtb-aero" />,
    title: "High Rental Yields",
    description: "Quality investment properties delivering strong rental returns and capital growth potential across Australia."
  },
  {
    icon: <DollarSign className="h-8 w-8 text-gtb-aero" />,
    title: "Competitive Pricing",
    description: "Quality construction delivered at competitive market rates for maximum investment returns."
  },
  {
    icon: <HomeIcon className="h-8 w-8 text-gtb-aero" />,
    title: "Quality Construction",
    description: "Every investment property built to strict quality and compliance standards."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-gtb-aero" />,
    title: "Market Expertise",
    description: "Deep knowledge of Australia's property markets and emerging investment opportunities."
  }
];

const roiProjection = {
  propertyValue: "$650,000",
  rentalIncome: "$3,250/month",
  annualRental: "$39,000",
  grossYield: "6.0%",
  netYield: "5.2%",
  capitalGrowth: "4-6% annually"
};

export default function Investors() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <StickyHeader />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center max-w-4xl mx-auto">
                <MotionH2 className="text-4xl lg:text-6xl font-bold text-gtb-navy mb-6">
                  Property Investment
                </MotionH2>
                <MotionP className="text-xl text-gray-600 mb-8">
                  {"Build a profitable property investment portfolio with quality construction and strategic project delivery across Australia."}
                </MotionP>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <AnimatedButton asChild size="lg" className="bg-gtb-aero hover:bg-gtb-aero-light text-white text-lg px-8 py-4">
                    <Link href="/contact">
                      Start Investing
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </AnimatedButton>
                  <AnimatedButton asChild variant="outline" size="lg" className="border-gtb-navy text-gtb-navy hover:bg-gtb-navy hover:text-white text-lg px-8 py-4">
                    <Link href="/packages">View Packages</Link>
                  </AnimatedButton>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <PartnerLogos />

        {/* Investment Strategies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <MotionH2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-4">
                  Investment Strategies
                </MotionH2>
                <MotionP className="text-xl text-gray-600">
                  Choose the investment approach that best fits your goals and timeline.
                </MotionP>
              </div>
            </RevealOnScroll>
            
            <StaggerReveal staggerDelay={0.1}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {investmentStrategies.map((strategy, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold text-gtb-navy mb-2">{strategy.title}</h3>
                        <p className="text-gray-600 mb-4">{strategy.description}</p>
                        <div className="flex justify-center space-x-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gtb-aero">{strategy.roi}</div>
                            <div className="text-sm text-gray-500">Expected ROI</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gtb-navy">{strategy.timeframe}</div>
                            <div className="text-sm text-gray-500">Timeframe</div>
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {strategy.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-gtb-aero" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <AnimatedButton asChild className="w-full" variant="outline">
                        <Link href="/contact">Learn More</Link>
                      </AnimatedButton>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-4">
                Investment Returns
              </h2>
              <p className="text-xl text-gray-600">
                See the potential returns on our investment properties.
              </p>
            </div>
            
            <Card className="max-w-4xl mx-auto p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gtb-navy mb-6">Sample Investment</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property Value:</span>
                      <span className="font-semibold text-gtb-navy">{roiProjection.propertyValue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Rental:</span>
                      <span className="font-semibold text-gtb-navy">{roiProjection.rentalIncome}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Annual Rental:</span>
                      <span className="font-semibold text-gtb-navy">{roiProjection.annualRental}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gross Yield:</span>
                      <span className="font-semibold text-gtb-aero">{roiProjection.grossYield}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Net Yield:</span>
                      <span className="font-semibold text-gtb-aero">{roiProjection.netYield}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Capital Growth:</span>
                      <span className="font-semibold text-gtb-aero">{roiProjection.capitalGrowth}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gtb-navy text-white p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">Why These Returns?</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-gtb-aero mt-0.5" />
                      <span>Prime growth locations across Australia</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-gtb-aero mt-0.5" />
                      <span>High-quality, modern properties</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-gtb-aero mt-0.5" />
                      <span>Professional tenant placement</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-gtb-aero mt-0.5" />
                      <span>Ongoing property management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-gtb-aero mt-0.5" />
                      <span>Exclusive builder pricing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-4">
                Why Invest With Us?
              </h2>
              <p className="text-xl text-gray-600">
                Our expertise and exclusive relationships deliver superior investment outcomes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="bg-gtb-aero/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gtb-navy mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Management */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy">
                  Complete Portfolio Management
                </h2>
                <p className="text-lg text-gray-600">
                  From property selection to ongoing management, we handle every aspect of your investment portfolio.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gtb-aero mt-1" />
                    <div>
                      <h3 className="font-semibold text-gtb-navy">Property Selection</h3>
                      <p className="text-gray-600">Strategic property selection based on market analysis and growth potential.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gtb-aero mt-1" />
                    <div>
                      <h3 className="font-semibold text-gtb-navy">Tenant Placement</h3>
                      <p className="text-gray-600">Professional tenant screening and placement to minimize vacancy periods.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gtb-aero mt-1" />
                    <div>
                      <h3 className="font-semibold text-gtb-navy">Ongoing Management</h3>
                      <p className="text-gray-600">Complete property management including maintenance, rent collection, and reporting.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gtb-aero mt-1" />
                    <div>
                      <h3 className="font-semibold text-gtb-navy">Performance Tracking</h3>
                      <p className="text-gray-600">Regular reporting on rental income, expenses, and capital growth.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-8 bg-gtb-navy text-white">
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold">200+</div>
                    <div className="text-gray-300">Investment Properties Managed</div>
                  </div>
                </Card>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6 text-center">
                    <div className="text-2xl font-bold text-gtb-navy">6.5%</div>
                    <div className="text-sm text-gray-600">Average Yield</div>
                  </Card>
                  <Card className="p-6 text-center">
                    <div className="text-2xl font-bold text-gtb-navy">98%</div>
                    <div className="text-sm text-gray-600">Occupancy Rate</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* CTA Section */}
        <section className="py-20 bg-gtb-navy">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <MotionH2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Start Investing?
              </MotionH2>
              <MotionP className="text-xl text-gray-300 mb-8">
                Book a consultation to discuss your investment goals and discover the best opportunities for your portfolio.
              </MotionP>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton asChild size="lg" className="bg-gtb-aero hover:bg-gtb-aero-light text-white text-lg px-8 py-4">
                  <Link href="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Investment Consultation
                  </Link>
                </AnimatedButton>
                <AnimatedButton asChild variant="outline" size="lg" className="border-white text-gtb-navy bg-white hover:bg-gray-100 text-lg px-8 py-4">
                  <Link href="/packages">View Available Properties</Link>
                </AnimatedButton>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
