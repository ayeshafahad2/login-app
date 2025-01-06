"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between sign-up and login
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle confirm password visibility

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form before submitting
    if (isSignUp && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log(isSignUp ? "Sign up data:" : "Login data:", {
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <div
      className="min-h-screen flex items-center h-40 w-1/3 justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg1.png')", 
      }}
    >
      <Card className="w-[380px] font-semibold text-2xl bg-opacity-90 shadow-lg backdrop-blur-md">
        <CardHeader>
          <CardTitle>{isSignUp ? "Sign Up" : "Log In"}</CardTitle>
          <CardDescription className="font-semibold text-lg">
            {isSignUp
              ? "Create an account to get started"
              : "Enter your details to log into your account"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2 relative">
              <Input
                type={showPassword ? "text" : "password"} // Toggle password visibility
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-0 right-2"
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </div>
            {isSignUp && (
              <div className="space-y-2 relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"} // Toggle confirm password visibility
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-0 right-2"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </Button>
              </div>
            )}
            <div>
              <Button
                type="submit"
                className="w-full"
                onClick={() =>
                  alert(isSignUp ? "Sign up form submitted" : "Login form submitted")
                }
              >
                {isSignUp ? "Sign Up" : "Log In"}
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <span>
              {isSignUp
                ? "Already have an account? "
                : "Don't have an account? "}
              <button
                className="text-amber-900"
                onClick={() => setIsSignUp(!isSignUp)} // Toggle between Sign Up and Login
              >
                {isSignUp ? "Log In" : "Sign Up"}
              </button>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
