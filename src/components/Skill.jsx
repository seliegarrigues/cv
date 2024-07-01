// src/ components/ Skill.jsx
import {useState, useEffect} from 'react'
const BASE_URL = "http://localhost:4007"

export default function Skill() {
  const [skills, setSkills] = useState([])

  async function getSkills () {
    const response = await fetch(`${BASE_URL}/skill`)
    const data = await response.json()
    console.log(data)
    setSkills(data)
  }

  useEffect(()=> {
    getSkills()
  }, [])

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl text-center font-bold bg-[#313B6D] text-white rounded-lg p-1 mb-5">
        Compétences
      </h2>
      <ul>
        {skills.length > 0 && skills.map(item => <li key={item._id}>{item.skill}</li>)}
      </ul>
    </div>
  )
}
