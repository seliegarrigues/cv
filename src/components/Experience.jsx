 // src/ components/Experience.jsx
 import { useState, useEffect } from 'react'

const url = 'http://localhost:4007'

export default function Experience
() {
        const [experiences, setExperiences] = useState([])

        async function fetchExperience(){
          const response = await fetch(`${url}/experience`)
          const data = await response.json()
          console.log(data)
          setExperiences(data)
        }
        
useEffect(()=>{
  fetchExperience()
}, [])
         
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl text-center font-bold bg-[#313B6D] text-white rounded-lg p-1 mb-5">
        Experiences
      </h2>
      <ul>
        {experiences.map(item => (
          <li key={item._id}>
            <h3 className="font-bold">{item.company}</h3>
            <p>{item.position}</p>
            <p>{item.years}</p>
            <h4 className="font-bold">Missions principales:</h4>
            <ul className="list-disc list-inside">
              
              {item.mission.length > 0 && item.mission.map(task => (
                <li>{task}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
        
    </div>
  )
}
