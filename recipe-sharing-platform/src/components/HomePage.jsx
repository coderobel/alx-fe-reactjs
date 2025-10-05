import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Recipes</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {data.map((member) => (
          <Link
            to={`/recipes/${member.id}`}
            key={member.id}
            className="block bg-white p-6 rounded-lg shadow-md hover:bg-amber-100 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold text-gray-800">{member.title}</h2>
            <p className="text-gray-500">{member.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
