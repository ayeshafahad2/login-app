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
      className="min-h-screen flex items-center justify-center px-4 sm:px-5 md:px-10 lg:px-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg1.png')",
      }}
    >
      <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white bg-opacity-90 rounded-lg shadow-lg">
        <CardHeader className="text-amber-900">
          <CardTitle className="text-xl sm:text-2xl">{isSignUp ? "Sign Up" : "Log In"}</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            {isSignUp
              ? "Create an account to get started"
              : "Enter your details to log into your account"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                required
              />
              <Button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </div>
            {isSignUp && (
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
                <Button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-sm"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </Button>
              </div>
            )}
            <div>
              <Button
                type="submit"
                className="w-full py-2 text-black rounded-md transition duration-200"
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
                className="text-blue-600 hover:underline"
                onClick={() => setIsSignUp(!isSignUp)}
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
