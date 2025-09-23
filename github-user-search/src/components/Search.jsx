import { useState } from "react";
import { fetchUserData } from "../services/githubService";
function Search (){
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try{
        const data = await fetchUserData(username, location, minRepos);
        setResults(data.items || []);
    } catch (err) {
        setError("Something went wrong fetching results.");
    } finally {
        setLoading(false);
    }
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSearch} className="space-y-4 bg-gray-100 p-4 rounded-lg shadow">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div key={user.id} className="flex items-center gap-4 p-4 bg-white shadow rounded">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;