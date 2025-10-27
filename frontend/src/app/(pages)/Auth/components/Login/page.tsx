"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Lock } from "lucide-react";

export default function LoginForm() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <User className="text-gray-500" size={18} />
        <Input placeholder="School ID" />
      </div>
      <div className="flex items-center gap-2">
        <Lock className="text-gray-500" size={18} />
        <Input type="password" placeholder="Password" />
      </div>
      <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold shadow-md">
        Login
      </Button>
      <p className="text-xs text-gray-500 mt-2">
        Forgot your password?{" "}
        <a href="#" className="text-green-600 hover:underline">
          Reset here
        </a>
      </p>
    </div>
  );
}