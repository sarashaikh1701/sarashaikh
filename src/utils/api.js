// src/utils/api.js

export async function fetchGitHubRepos() {
    const username = 'sarashaikh1701'; // Replace with your GitHub username if different
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
      throw new Error('Network response was not ok' + response.statusText);
    }
    return response.json();
  }
  