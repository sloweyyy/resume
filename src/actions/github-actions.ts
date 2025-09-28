"use server";

import { fetchGitHubAvatar, fetchGitHubUser } from '@/lib/github-api';
import { GITHUB_USERNAME } from '@/lib/dynamic-avatar';

/**
 * Server action to fetch GitHub avatar URL
 * @param username - GitHub username (optional, defaults to configured username)
 * @returns Promise<string> - Avatar URL
 */
export async function getGitHubAvatarAction(username: string = GITHUB_USERNAME): Promise<string> {
  try {
    return await fetchGitHubAvatar(username);
  } catch (error) {
    console.error('Server action failed to fetch GitHub avatar:', error);
    // Return fallback URL
    return `https://github.com/${username}.png`;
  }
}

/**
 * Server action to fetch complete GitHub user data
 * @param username - GitHub username (optional, defaults to configured username)
 * @returns Promise<GitHubUser> - Complete GitHub user data
 */
export async function getGitHubUserAction(username: string = GITHUB_USERNAME) {
  return await fetchGitHubUser(username);
}
