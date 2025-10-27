"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterForm() {
  return (
    <div className="space-y-4">
      <Input placeholder="Full Name" />
      <Input placeholder="Email" />
      <Input placeholder="School ID" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold shadow-md">
        Register
      </Button>
    </div>
  );
}