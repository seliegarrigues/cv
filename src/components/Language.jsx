// src/ components/language.jsx
import React, { useEffect, useState } from 'react'

export default function Language() {
  const [langues, setLangues] = useState([])

  async function fetchLangue() {
    const response = await fetch('http://localhost:4007/language') // declare une variable
    const data = await response.json() // parse les données
    setLangues(data)
  }

  useEffect(() => {
    fetchLangue()
  }, []) // pour eviter une boucle infinie

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-4xl text-center font-bold bg-[#313B6D] text-white rounded-lg p-1 mb-5">
        Langues
      </h2>
      <ul>
        {langues.map(item => <li key={item._id}>{item.langue}</li>)} 
       
      </ul> 
    </div>
  )
}
