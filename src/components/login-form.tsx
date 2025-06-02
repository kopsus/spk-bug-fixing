"use client";

import { useMutationAuth } from "@/api/auth/mutation";
import { TypeLogin } from "@/api/auth/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export function LoginForm() {
  const router = useRouter();
  const [payload, setPayload] = React.useState<TypeLogin>({
    email: "",
    password: "",
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { serviceAuth, isPending } = useMutationAuth();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await serviceAuth({
        type: "login",
        body: payload,
      });
      if (res) {
        router.push("/dashboard");
      }
    } catch (err) {
      // Error sudah ditangani di hook
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              required
              onChange={onInputChange}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              required
              placeholder="******"
              onChange={onInputChange}
            />
          </div>

          <Button
            onClick={() => router.push("/dashboard")}
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending ? <LoaderCircle /> : "Login"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
