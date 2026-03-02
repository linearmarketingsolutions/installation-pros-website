"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className, variant = "dark" }: LogoProps) {
  const fill = variant === "light" ? "#FFFFFF" : "#0A0A0A";
  const accent = "#CC0000"; // Red accent for both variants

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden
      >
        {/* House outline */}
        <path
          d="M24 4L4 20V44H18V28H30V44H44V20L24 4Z"
          stroke={fill}
          strokeWidth="2"
          fill="none"
        />
        {/* Wrench/tool marks inside house */}
        <path
          d="M16 24L20 28M20 24L16 28"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M28 24L32 28M32 24L28 28"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="24" cy="18" r="2" fill={accent} />
      </svg>
      <div>
        <span className="font-display font-extrabold text-xl tracking-tight text-current block leading-tight">
          INSTALLATION
        </span>
        <span className="font-display font-bold text-sm tracking-[0.2em] text-current/80">
          PROS
        </span>
      </div>
    </div>
  );
}
