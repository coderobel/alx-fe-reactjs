import axios from "axios";

export async function fetchUserData({ username, location, minRepos }) {
  let queryParts = [];

  if (username) queryParts.push(`${username} in:login`);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  const query = queryParts.join(" ");

  // 🔹 Prevent sending an empty or invalid query
  if (!query) {
    throw new Error("Search query cannot be empty. Provide username, location, or minRepos.");
  }

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );
    return response.data;
  } catch (error) {
    console.error("GitHub API error:", error.response?.data || error.message);
    throw error;
  }
}

