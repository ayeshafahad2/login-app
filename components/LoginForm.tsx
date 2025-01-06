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

export default function LogInform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
    alert("Thanks for logging in!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-5 md:px-20 lg:px-30 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg1.png')",
      }}
    >
      <Card className="w-full max-w-md bg-white sm:px-5 md:px-20 lg:px-30 bg-opacity-80 shadow-lg backdrop-blur-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-800">
            Log In
          </CardTitle>
          <CardDescription className="text-gray-600 text-sm sm:text-base">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 "
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 "
                required
              />
            </div>
            <div>
              <Button
                type="submit"
                className="w-full py-2 text-black rounded-md transition duration-200"
              >
                Log In
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
