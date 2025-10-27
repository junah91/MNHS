import Image from "next/image"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User, Lock } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-gray-200 p-6">
      
      {/* Logo and School Name */}
      <div className="text-center mb-8">
        <Image 
          src="/images/logo.png"  // <-- place your school logo in public/mnhs-logo.png
          alt="MNHS Logo"
          width={80}
          height={80}
          className="mx-auto mb-2"
        />
        <h1 className="text-2xl font-bold text-gray-800">
          Mantalongon National High School
        </h1>
        <p className="text-gray-600">Maka-Diyos • Makatao • Makakalikasan • Makabansa</p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        
        {/* Left: Login Form */}
        <Card className="shadow-lg bg-white/10 backdrop-blur-lg border border-white/20">
          <CardHeader>
            <h2 className="text-lg font-semibold">Login to your account</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <User className="text-gray-500" size={18} />
              <Input placeholder="School ID" />
            </div>
            <div className="flex items-center gap-2">
              <Lock className="text-gray-500" size={18} />
              <Input type="password" placeholder="Password" />
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Login
            </Button>
            <p className="text-xs text-gray-500 mt-2">
              Forgot your password? <a href="#" className="text-blue-600">Reset here</a>
            </p>
          </CardContent>
        </Card>

        {/* Right: Quick Links */}
        <div className="space-y-4">
          <Card className="p-4 hover:bg-gray-50 cursor-pointer">📚 Library Access</Card>
          <Card className="p-4 hover:bg-gray-50 cursor-pointer">📝 Enrollment / Application</Card>
          <Card className="p-4 hover:bg-gray-50 cursor-pointer">🗂️ Request for Records</Card>
          <Card className="p-4 hover:bg-gray-50 cursor-pointer">👥 Alumni Portal</Card>
          <Card className="p-4 hover:bg-gray-50 cursor-pointer">📖 School Information</Card>
        </div>
      </div>
    </div>
  )
}
