import { Phone, Mail, Car, Home } from "lucide-react"

export function BusinessCard() {
  return (
    <div className="w-96 h-56 bg-white border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden">
      {/* Front Side */}
      <div className="h-full p-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>

        <div className="relative z-10">
          <div className="mb-4">
            <h1 className="text-2xl font-bold">
              <span className="text-white">DAYTONA</span>
              <br />
              <span className="text-black">BROS</span>
            </h1>
            <p className="text-sm opacity-90">Washing & Detailing</p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(555) 123-WASH</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>daytonabros@email.com</span>
            </div>
          </div>

          <div className="mt-4 flex space-x-4">
            <div className="flex items-center space-x-1 text-xs">
              <Car className="w-3 h-3" />
              <span>Car Detailing</span>
            </div>
            <div className="flex items-center space-x-1 text-xs">
              <Home className="w-3 h-3" />
              <span>Pressure Washing</span>
            </div>
          </div>

          <div className="mt-3 text-xs opacity-80">Affordable • Professional • Student-Owned</div>
        </div>
      </div>
    </div>
  )
}
