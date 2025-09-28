import { fetchGitHubAvatar } from './github-api';

/**
 * Configuration for dynamic avatar
 */
export const GITHUB_USERNAME = 'sloweyyy';

/**
 * Fallback avatar URL in case GitHub API fails
 */
export const FALLBACK_AVATAR_URL = `https://github.com/${GITHUB_USERNAME}.png`;

/**
 * Gets the dynamic avatar URL from GitHub API
 * This function will be called at build time and cached
 */
export async function getDynamicAvatarUrl(): Promise<string> {
  try {
    return await fetchGitHubAvatar(GITHUB_USERNAME);
  } catch (error) {
    console.warn('Failed to fetch dynamic avatar, using fallback:', error);
    return FALLBACK_AVATAR_URL;
  }
}

/**
 * Gets the avatar URL synchronously for static data
 * This will use the cached/static value or fallback
 */
export function getStaticAvatarUrl(): string {
  // Return the actual GitHub avatar URL for initial render
  // This prevents hydration mismatches
  return "https://avatars.githubusercontent.com/u/37492460?v=4";
}
