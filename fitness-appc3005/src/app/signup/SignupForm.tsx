"use client";
import React, { useState, useRef } from "react";
import { LuUser, LuMail, LuLock, LuEye, LuEyeOff } from "react-icons/lu";
import { SiGoogle } from "react-icons/si";

const UserIcon: React.FC = () => <LuUser size={16} />;

const MailIcon: React.FC = () => <LuMail size={16} />;

const LockIcon: React.FC = () => <LuLock size={16} />;

const EyeIcon: React.FC = () => <LuEye size={16} />;

const EyeOffIcon: React.FC = () => <LuEyeOff size={16} />;

const GoogleIcon: React.FC = () => <SiGoogle size={16} />;

// Floating Label Input Component
const FloatingLabelInput: React.FC<{
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
}> = ({
  id,
  type,
  value,
  onChange,
  placeholder,
  icon,
  rightIcon,
  onRightIconClick,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground transition-colors group-focus-within:text-foreground">
        {icon}
      </div>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 peer placeholder-transparent"
        placeholder={placeholder}
        style={
          {
            "--tw-ring-color": "hsl(var(--ring))",
          } as React.CSSProperties
        }
      />
      <label
        htmlFor={id}
        className={`absolute left-10 transition-all duration-200 pointer-events-none text-sm font-medium ${
          isFocused || value
            ? "-top-2 text-xs bg-white dark:bg-black px-2 text-foreground rounded-sm"
            : "top-2.5 text-muted-foreground"
        }`}
      >
        {placeholder}
      </label>
      {rightIcon && (
        <button
          type="button"
          onClick={onRightIconClick}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:text-foreground"
        >
          {rightIcon}
        </button>
      )}
    </div>
  );
};

// Main Component with shadcn/ui styling
const Signin: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

  const cardRef = useRef<HTMLDivElement>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-sm relative">
          {/* Main Card with shadcn/ui styling */}
          <div
            ref={cardRef}
            className="relative bg-white dark:bg-zinc-900 border border-border rounded-lg p-6 shadow-sm transition-all duration-200 hover:shadow-md"
          >
            {/* Header */}
            <div className="flex flex-col space-y-2 text-center mb-6">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                Become a member today
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details below to create your account
              </p>
            </div>

            <form className="space-y-4">
              {/* Full Name Input */}
              <div className="space-y-2">
                <FloatingLabelInput
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  icon={<UserIcon />}
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <FloatingLabelInput
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  icon={<MailIcon />}
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <FloatingLabelInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  icon={<LockIcon />}
                  rightIcon={showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  onRightIconClick={togglePasswordVisibility}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-black px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Login */}
            <div className="flex items-center justify-center">
              <button
                type="button"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                <GoogleIcon />
                <span className="ml-2">Google</span>
              </button>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">
                Already have an account?{" "}
                <a
                  href="/signin"
                  className="underline underline-offset-4 hover:text-primary transition-colors"
                >
                  Sign in
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
