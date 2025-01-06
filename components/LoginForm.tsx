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
  };

  return (
    <div
      className="min-h-screen flex items-center  h-40 w-1/3 justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg1.png')",
      }}
    >
      <Card className="w-[350px]  bg-opacity-80 shadow-lg backdrop-blur-md">
        <CardHeader>
          <CardTitle >Log In</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
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
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <Button
                type="submit"
                className="w-full"
                onClick={() => alert("THANKS FOR LOGGING IN")}
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
