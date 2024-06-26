// src/components/Education.jsx
import React from 'react';

const Education = () => {
  const education = [
    {
      years: '2005-2007',
      institution: 'ESC PAU Business School',
      degree: 'Diplôme Ecole Supérieure de Commerce Bac+5',
      skills: ['Management', 'Finance', 'Marketing', 'Gestion'],
    },
    {
      years: '2024',
      institution: 'La fabrique Numérique Paloise',
      degree: 'Bootcamp développeur web Full-Stack',
      skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl text-center font-bold bg-[#313B6D] text-white rounded-lg p-1 mb-5">
        Education
      </h2>
      <ul>
        {education.map((item, index) => (
          <li key={index}>
            <h3 className="font-bold">{item.institution}</h3>
            <p>{item.degree}</p>
            <p>{item.years}</p>
            <h4 className="font-bold">Skills:</h4>
            <ul className="list-disc list-inside">
              {item.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
