 // src/ components/Experience.jsx
 import React from 'react'



export default function 
() {
        const experience = [
          
          {
            years: '1999-2018',
            company: 'Mediapost',
            position: 'Business local Developper',
            missions: [
              'Développer et maintenir un portefeuille clients',
              'relayer les besoins du clients vers les équipes de productions ou de SAV',
              'Concevoir et présenter des propositions  mutlicanales  personnalisée',
            ],
          },
          {
            years: '2019-2023',
            company: 'Lumoeb',
            position: 'CEO',
            missions: [
              'Optimiser des sites web sur le référencement, e-reputation, marketing de marque',
              'Concevoir et appliquer des stratégies web marketing en mode gestion de projets',
              'Créer , planifier et rédiger du contenu Web',
            ],
          },
        ];
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl text-center font-bold bg-[#313B6D] text-white rounded-lg p-1 mb-5">
        Experiences
      </h2>
      <ul>
        {experience.map((item, index) => (
          <li key={index}>
            <h3 className="font-bold">{item.company}</h3>
            <p>{item.position}</p>
            <p>{item.years}</p>
            <h4 className="font-bold">Missions principales:</h4>
            <ul className="list-disc list-inside">
              {item.missions.map((mission, missionIndex) => (
                <li key={missionIndex}>{mission}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
        
    </div>
  )
}
