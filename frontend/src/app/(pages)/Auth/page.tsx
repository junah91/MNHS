// pages/auth.tsx
"use client";

import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useState } from "react";
import LoginForm from "./components/Login/page";
import RegisterForm from "./components/Register/page";

export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      {/* Logo and School Name */}
      <div className="text-center mb-8">
        <Image
          src="/images/logo.png"
          alt="MNHS Logo"
          width={90}
          height={90}
          className="mx-auto mb-3"
        />
        <h1 className="text-3xl font-extrabold text-green-700">
          Mantalongon National High School
        </h1>
        <p className="text-gray-600">
          Maka-Diyos • Makatao • Makakalikasan • Makabansa
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Left: Form */}
        <Card className="shadow-lg bg-white border border-gray-200">
          <CardHeader>
            <h2 className="text-lg font-semibold text-green-700">
              {showLogin ? "Login to your account" : "Register a new account"}
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            {showLogin ? <LoginForm /> : <RegisterForm />}

            <p className="text-sm text-gray-500 mt-2 text-center">
              {showLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setShowLogin(!showLogin)}
                className="text-green-600 hover:underline font-semibold"
              >
                {showLogin ? "Register" : "Login"}
              </button>
            </p>
          </CardContent>
        </Card>

        {/* Right: Quick Links */}
        <div className="space-y-4">
          <Card className="p-4 bg-white shadow-md border border-gray-200 hover:bg-green-50 cursor-pointer">
            📚 Library Access
          </Card>
          <Card className="p-4 bg-white shadow-md border border-gray-200 hover:bg-green-50 cursor-pointer">
            📝 Enrollment / Application
          </Card>
          <Card className="p-4 bg-white shadow-md border border-gray-200 hover:bg-green-50 cursor-pointer">
            🗂️ Request for Records
          </Card>
          <Card className="p-4 bg-white shadow-md border border-gray-200 hover:bg-green-50 cursor-pointer">
            👥 Alumni Portal
          </Card>
          <Card className="p-4 bg-white shadow-md border border-gray-200 hover:bg-green-50 cursor-pointer">
            📖 School Information
          </Card>
        </div>
      </div>
    </div>
  );
}
