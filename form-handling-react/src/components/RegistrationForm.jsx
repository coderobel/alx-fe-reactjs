import { useState } from "react";

export default function RegistrationForm() {
    
    const {formData, setFormData} = useState({username : '', email: '', password : '',});

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({...formData, [name]: value,});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.username || !formData.email || !formData.password){
            setError("All fields are required!");
            return;
        }

        setError("");
        console.log("Form submitted:", formData);
        alert(`Welcome, ${formData.username}! Registration successful.`);
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Registration Form</h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <div className="mb-3">
                <label htmlFor="username" className="block mb-1 font-medium">
                    Username
                </label>
                <input 
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded"/>
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                </label>
                <input 
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border px-2 py-1 rounded"/>
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block mb-1 font-medium">
                    Password
                </label>
                <input 
                    type="text"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border px-2 py-1 rounded"
                    />
            </div>

            <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Register
            </button>
        </form>
    );   
}