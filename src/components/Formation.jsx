import { useEffect, useState } from 'react';
import { MdOutlineCastForEducation } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa6";

const url = 'https://cv-api-6kin.onrender.com';

const Education = () => {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    const fetchFormation = async () => {
      const response = await fetch(`${url}/formation`);
      const data = await response.json();
      setFormations(data);
    };

    fetchFormation();
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl text-center font-bold bg-[#313B6D] text-white rounded-lg p-1 mb-5">
        <MdOutlineCastForEducation />
        Formation <FaGraduationCap />
      </h2>
      <ul className="space-y-6">
        {formations.map(item => (
          <li key={item._id} className="space-y-2">
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-gray-700">{item.level}</p>
            <p className="text-gray-700">{item.year}</p>
            {item.skills && item.skills.length > 0 && (
              <>
                <h4 className="font-bold"><GiSkills /> Skills:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {item.skills.map((skill, index) => (
                    <li key={index} className="text-gray-700">{skill}</li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
