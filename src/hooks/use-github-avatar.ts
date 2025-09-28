"use client";

import { useState, useEffect } from 'react';
import { fetchGitHubAvatar } from '@/lib/github-api';
import { GITHUB_USERNAME, FALLBACK_AVATAR_URL } from '@/lib/dynamic-avatar';

interface UseGitHubAvatarResult {
  avatarUrl: string;
  isLoading: boolean;
  error: string | null;
}

/**
 * Hook to fetch GitHub avatar URL dynamically
 * @param username - GitHub username (defaults to configured username)
 * @returns Object with avatarUrl, isLoading, and error state
 */
export function useGitHubAvatar(username: string = GITHUB_USERNAME): UseGitHubAvatarResult {
  const [avatarUrl, setAvatarUrl] = useState<string>(FALLBACK_AVATAR_URL);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Start with false to prevent hydration mismatch
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    async function fetchAvatar() {
      try {
        setIsLoading(true);
        setError(null);
        
        const url = await fetchGitHubAvatar(username);
        
        if (!isCancelled) {
          setAvatarUrl(url);
        }
      } catch (err) {
        if (!isCancelled) {
          const errorMessage = err instanceof Error ? err.message : 'Failed to fetch avatar';
          setError(errorMessage);
          // Keep fallback URL on error
          setAvatarUrl(FALLBACK_AVATAR_URL);
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }

    // Only fetch on client side after component mounts
    fetchAvatar();

    return () => {
      isCancelled = true;
    };
  }, [username]);

  return { avatarUrl, isLoading, error };
}
