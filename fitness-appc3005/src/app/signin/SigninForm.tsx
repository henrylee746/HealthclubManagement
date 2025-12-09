"use client";
import React, { useState } from "react";
import { LuUser, LuEye, LuEyeOff } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";

const UserIcon = () => (
  <span className="h-5 w-5 text-zinc-600 dark:text-zinc-400 inline-flex items-center">
    <LuUser size={20} />
  </span>
);

const EyeIcon = () => (
  <span className="h-4 w-4 text-zinc-500 dark:text-zinc-400 inline-flex items-center">
    <LuEye size={16} />
  </span>
);

const EyeOffIcon = () => (
  <span className="h-4 w-4 text-zinc-500 dark:text-zinc-400 inline-flex items-center">
    <LuEyeOff size={16} />
  </span>
);

const GoogleIcon = () => (
  <span className="h-5 w-5 inline-flex items-center">
    <FaGoogle size={20} />
  </span>
);

// --- Main App Component ---
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    // Main container with a custom background pattern and flexbox for centering. This setup is inherently responsive.
    <div className="relative w-full flex items-center justify-center font-sans overflow-hidden">
      {/* Login Card - More compact and shadcn-like */}
      <div className="relative w-full max-w-sm p-6 space-y-6 bg-white dark:bg-black rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-lg dark:shadow-zinc-900/50">
        {/* Header section with icon and title - More compact */}
        <div className="text-center space-y-3">
          <div className="inline-flex p-2 bg-zinc-100 dark:bg-zinc-900 rounded-md border border-zinc-200 dark:border-zinc-800">
            <UserIcon />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              Welcome back
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Enter your credentials to sign in
            </p>
          </div>
        </div>

        {/* Social login buttons - More compact shadcn style */}
        <div className="grid grid-cols-3 gap-2">
          {[{ icon: <GoogleIcon /> }].map((item, index) => (
            <button
              key={index}
              className="flex items-center justify-center h-9 px-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
            >
              {item.icon}
            </button>
          ))}
        </div>

        {/* OR Divider - More subtle */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-zinc-200 dark:border-zinc-800" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white dark:bg-zinc-900 px-2 text-zinc-500 dark:text-zinc-400">
              Or continue with
            </span>
          </div>
        </div>

        {/* Form - Shadcn style */}
        <form className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-900 dark:text-zinc-50"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="flex h-9 w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-5 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 dark:placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-900 dark:text-zinc-50"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="flex h-9 w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-5 pr-10 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 dark:placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2 w-full"
          >
            Sign In
          </button>
        </form>

        {/* Footer links - More compact */}
        <div className="text-center space-y-2">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Don&apos;t have an account?{" "}
            <a
              href="#"
              className="font-medium text-zinc-900 dark:text-zinc-50 underline underline-offset-4 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
            >
              Sign up
            </a>
          </p>
          <a
            href="#"
            className="text-sm font-medium text-zinc-900 dark:text-zinc-50 underline underline-offset-4 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
}
