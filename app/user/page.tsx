"use client";

import LoginForm from "@/components/LoginForm";
import SignUpForm from "@/components/SigninForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function User() {
  const [isLogin, SetIsLogin] = useState(true);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-black">
      <div className="mb-4">
        <Button
          className="text-lg text-amber-900"
          onClick={() => SetIsLogin(!isLogin)} // Fixing the onClick handler
          variant={"ghost"}
        >
          {isLogin ? "Need to create an account?" : "Login to your account"}
        </Button>
      </div>
      {/* Conditionally render Login or SignUp form */}
      {isLogin ? <LoginForm /> : <SignUpForm />}
    </div>
  );
}
