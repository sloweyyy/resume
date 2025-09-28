/**
 * GitHub API utilities for fetching user data
 */

export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

/**
 * Fetches GitHub user data including avatar URL
 * @param username - GitHub username
 * @returns Promise<GitHubUser> - GitHub user data
 */
export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'CV-Portfolio-App'
    },
    // Cache for 1 hour to avoid rate limiting
    next: { revalidate: 3600 }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub user: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetches just the avatar URL for a GitHub user
 * @param username - GitHub username
 * @returns Promise<string> - Avatar URL
 */
export async function fetchGitHubAvatar(username: string): Promise<string> {
  try {
    const userData = await fetchGitHubUser(username);
    return userData.avatar_url;
  } catch (error) {
    console.error('Failed to fetch GitHub avatar:', error);
    // Fallback to a constructed URL if API fails
    return `https://github.com/${username}.png`;
  }
}
