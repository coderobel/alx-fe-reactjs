import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data.json")
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData));
    }, []);
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Recipes</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {data.map((member) => (
                    <div key={member.id} className="bg-white hover:bg-amber-100 p-6 rounded-lg shadow">
                        <h2 className="text-lg font-semibold">{member.title}</h2>
                        <p className="text-gray-500">{member.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}