// src/components/Education.jsx
import { useEffect, useState } from 'react';
import { MdOutlineCastForEducation } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa6";

const url = 'http://localhost:4007'

const Education = () => {
  const [formations, setFormations] = useState([])

  useEffect(() => {
    const fetchFormation = async () => {
      const response = await fetch(`${url}/formation`)
      const data = await response.json()
      setFormations(data)
    }

    fetchFormation()
  }, [])

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl text-center font-bold bg-[#313B6D] text-white rounded-lg p-1 mb-5">
        <MdOutlineCastForEducation />
        Formation <FaGraduationCap />
      </h2>
      <ul>
  {formations.map(item =>
    <li key={item._id}>
      <h3 className="font-bold">{item.name}</h3>
      <p>{item.level}</p>
      <p>{item.year}</p>
      {item.skills && item.skills.length > 0 && (
        <>
          <h4 className="font-bold"><GiSkills />Skills:</h4>
          <ul>
            {item.skills.map((skill, index) =>
              <li key={index}>{skill}</li>
            )}
          </ul>
        </>
      )}
    </li>
  )}
</ul>

    </div>
  );
};

export default Education;
