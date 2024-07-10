import { useState, useEffect } from "react";

const BASE_URL = "https://cv-api-6kin.onrender.com";

export default function Hobby() {
  const [hobbies, setHobbies] = useState([]);

  async function getHobbies() {
    const response = await fetch(`${BASE_URL}/hobby`);
    const data = await response.json();
    console.log("Fetched data:", data);
    setHobbies(data);
  }

  useEffect(() => {
    getHobbies();
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl text-center font-bold bg-[#313B6D] text-white rounded-lg p-1 mb-5">
        Centre d'intérêts
      </h2>
      <ul className="space-y-2">
        {hobbies.map((item) => (
          <li key={item._id} className="text-gray-700">
            {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
