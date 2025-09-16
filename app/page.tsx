"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Car, Home, Wrench, Users, Clock, DollarSign } from "lucide-react"
import { BeforeAfterSlider } from "@/components/before-after-slider"

export default function DaytonaBrosLanding() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section")
    servicesSection?.scrollIntoView({ behavior: "smooth" })
  }

  const callPhone = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`
  }

  const sendEmail = () => {
    window.location.href = "mailto:info@daytonabros.com?subject=Service Inquiry"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Wrench className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                <span className="text-primary">Daytona</span> Bros Washing & Detailing
              </h1>
            </div>
          </div>
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground ripple-button"
            onClick={() => callPhone("346-652-3012")}
          >
            Book Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-background to-muted relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="spray-animation"></div>
        </div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance hero-text">
            <span className="text-primary animated-text">Professional</span> Pressure Washing
            <br />& Car Repairs
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Reliable pressure washing and everyday car repair services. Quality results at affordable prices with fast
            turnaround times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground ripple-button"
              onClick={() => callPhone("346-652-3012")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call for Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent ripple-button"
              onClick={scrollToServices}
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See the Difference</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional pressure washing delivers dramatic results. Drag the slider to see the transformation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/dirty-concrete-driveway-with-stains-and-grime.jpg"
              afterImage="/clean-spotless-concrete-driveway-pressure-washed.jpg"
              beforeAlt="Dirty driveway before pressure washing"
              afterAlt="Clean driveway after pressure washing"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional pressure washing and reliable car repairs with transparent pricing and quality results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border hover:shadow-lg transition-all duration-300 service-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Pressure Washing</CardTitle>
                <CardDescription>Driveways, patios, siding, and commercial spaces</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Driveways: $80-$250</li>
                  <li>• Patios & Fences: $75-$200</li>
                  <li>• Home siding & Decks</li>
                  <li>• Storefront exteriors</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300 service-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Car Repairs</CardTitle>
                <CardDescription>Oil changes, brakes, and everyday fixes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Oil changes & fluid top-offs</li>
                  <li>• Brake pad replacement</li>
                  <li>• Battery & light replacement</li>
                  <li>• Small mechanical fixes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300 service-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Business Services</CardTitle>
                <CardDescription>Commercial pressure washing solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Storefront walkways</li>
                  <li>• Parking lot cleaning</li>
                  <li>• Signage washing</li>
                  <li>• Regular maintenance contracts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Daytona Bros?</h2>
            <p className="text-muted-foreground">Professional results with reliable service and transparent pricing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-sm text-muted-foreground">Fair, upfront pricing with no hidden fees</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Fast Service</h3>
              <p className="text-sm text-muted-foreground">Quick turnaround times that fit your schedule</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Local Business</h3>
              <p className="text-sm text-muted-foreground">Proudly serving the Houston area</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Quality Results</h3>
              <p className="text-sm text-muted-foreground">Professional equipment and attention to detail</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Call or text us for a free quote. Same-day service available!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 ripple-button"
              onClick={() => callPhone("346-652-3012")}
            >
              <Phone className="w-4 h-4 mr-2" />
              (346) 652-3012
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent ripple-button"
              onClick={() => callPhone("346-331-8270")}
            >
              <Phone className="w-4 h-4 mr-2" />
              (346) 331-8270
            </Button>
          </div>
          <div className="mt-4">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent ripple-button"
              onClick={sendEmail}
            >
              <Mail className="w-4 h-4 mr-2" />
              info@daytonabros.com
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">
                  <span className="text-primary">Daytona</span> Bros Washing & Detailing
                </h3>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>(346) 652-3012</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>(346) 331-8270</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>info@daytonabros.com</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Houston Area</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Daytona Bros Washing & Detailing | &copy; 2025 J3 Web Design</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
