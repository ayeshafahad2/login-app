"use client";

import LoginForm from "@/components/LoginForm";
import SignUpForm from "@/components/SigninForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function User() {
  const [isLogin, SetIsLogin] = useState(true);
  return (
    <div className="min-h-screen flex flex-col  items-center justify-center content-center text-black">
      
      <div className="mb=4">
        <Button
          className="text-lg text-amber-900"
          onClick={(isLogin) => SetIsLogin(!isLogin)}
          variant={"ghost"}
        >
          {isLogin ? "Need to create an account" : "Login Your Account"}
        </Button>
      </div>
      {isLogin ? <LoginForm/> : <SignUpForm/>}
    </div>
  );
}
