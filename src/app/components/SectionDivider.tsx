"use client";

export function SectionDivider() {
  return (
    <div className="relative h-20 w-full overflow-hidden">
      <svg
        className="absolute bottom-0 w-full h-20"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H0Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
}
