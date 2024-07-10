import { useState, useEffect } from 'react';

const url = 'https://cv-api-6kin.onrender.com';

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  async function fetchExperience() {
    const response = await fetch(`${url}/experience`);
    const data = await response.json();
    console.log(data);
    setExperiences(data);
  }

  useEffect(() => {
    fetchExperience();
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl text-center font-bold bg-[#313B6D] text-white rounded-lg p-1 mb-5">
        Experiences
      </h2>
      <ul className="space-y-6">
        {experiences.map(item => (
          <li key={item._id} className="space-y-2">
            <h3 className="font-bold text-lg">{item.company}</h3>
            <p className="text-gray-700">{item.position}</p>
            <p className="text-gray-700">{item.years}</p>
            <h4 className="font-bold">Missions principales:</h4>
            <ul className="list-disc list-inside space-y-1">
              {item.mission.length > 0 && item.mission.map(task => (
                <li key={task} className="text-gray-700">{task}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
