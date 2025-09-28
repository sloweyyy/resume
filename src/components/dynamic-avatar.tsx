"use client";

import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useGitHubAvatar } from "@/hooks/use-github-avatar";
import { GITHUB_USERNAME } from "@/lib/dynamic-avatar";

interface DynamicAvatarProps {
  alt: string;
  fallback: string;
  className?: string;
  username?: string;
  staticSrc?: string; // Fallback to static src if provided
}

export function DynamicAvatar({
  alt,
  fallback,
  className,
  username = GITHUB_USERNAME,
  staticSrc
}: DynamicAvatarProps) {
  const [mounted, setMounted] = React.useState(false);
  const { avatarUrl, isLoading, error } = useGitHubAvatar(username);
  const [imageError, setImageError] = React.useState(false);

  // Ensure component is mounted before showing dynamic content
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Always use staticSrc for initial render to prevent hydration mismatch
  // Only use dynamic avatar after component is mounted on client
  const finalSrc = !mounted ? staticSrc : (imageError || error ? staticSrc : avatarUrl);

  return (
    <div
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-xl bg-muted",
        className
      )}
    >
      {!imageError && finalSrc ? (
        <div className="relative w-full h-full">
          {mounted && isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
              <div className="text-sm text-muted-foreground">Loading...</div>
            </div>
          )}
          <Image
            src={finalSrc}
            alt={alt}
            width={112}
            height={112}
            className={cn(
              "aspect-square h-full w-full object-cover transition-opacity",
              mounted && isLoading ? "opacity-0" : "opacity-100"
            )}
            onError={() => setImageError(true)}
            onLoad={() => {
              // Image loaded successfully, no need to show loading
            }}
            priority={true}
            unoptimized={finalSrc.startsWith("http")} // For external URLs
          />
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center text-lg font-semibold">
          {fallback}
        </div>
      )}
      {mounted && error && !staticSrc && (
        <div className="absolute bottom-0 left-0 right-0 bg-red-500/10 text-xs text-red-600 p-1 text-center">
          Failed to load
        </div>
      )}
    </div>
  );
}
