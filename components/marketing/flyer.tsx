import { Badge } from "@/components/ui/badge"
import { Phone, Car, Home, Sparkles, DollarSign } from "lucide-react"

export function MarketingFlyer() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-xl">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full translate-y-16 -translate-x-16"></div>

        <div className="relative z-10">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">NEW IN TOWN</Badge>
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-white">DAYTONA</span> <span className="text-black">BROS</span>
          </h1>
          <p className="text-xl opacity-90 mb-4">Washing & Detailing</p>
          <p className="text-lg font-semibold">Affordable Pressure Washing by College Students</p>
        </div>
      </div>

      {/* Services */}
      <div className="p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground">Our Services</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Home className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Pressure Washing</h3>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• Driveways ($75-$100)</li>
                <li>• Patios & Sidewalks</li>
                <li>• House Siding</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Car className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Car Detailing</h3>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• Exterior Wash ($40)</li>
                <li>• Full Detail ($120-$150)</li>
                <li>• Interior Cleaning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-muted/50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-center mb-4 text-foreground">Why Choose Daytona Bros?</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-primary" />
              <span>Student-Friendly Prices</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Professional Results</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>Same-Day Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Car className="w-4 h-4 text-primary" />
              <span>Local & Reliable</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-3 text-foreground">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-4">Call or text for a FREE quote!</p>

          <div className="bg-primary text-primary-foreground rounded-lg p-4 mb-4">
            <div className="text-2xl font-bold">(555) 123-WASH</div>
            <div className="text-sm opacity-90">Available 7 Days a Week</div>
          </div>

          <p className="text-xs text-muted-foreground">
            Serving Daytona Beach Area • Licensed & Insured • Student-Owned Business
          </p>
        </div>
      </div>
    </div>
  )
}
