// src/ components/language.jsx
import React, { useEffect, useState } from 'react'
import { TbMessageLanguage } from "react-icons/tb";

const url = 'https://cv-api-6kin.onrender.com'

export default function Language() {
  const [langues, setLangues] = useState([])

  async function fetchLangue() {
    const response = await fetch(`${url}/langue`) // declare une variable
    const data = await response.json() // parse les données de réponse
    setLangues(data)
  }

  useEffect(() => { // appelle la fonction
    fetchLangue()
  }, []) // pour eviter une boucle infinie

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl text-center font-bold bg-[#313B6D] text-white rounded-lg p-1 mb-5"><TbMessageLanguage />
        Langues
      </h2>
      <table>
        <tbody>
        {langues.map(item => 
        <tr key={item._id}>
          
          <th className='p-2 font-size text 2xl font-bold'>{item.name}</th> 
          <td className='p-2 border'>{item.level}</td>
          
          </tr>)} 
        </tbody>
      </table> 
    </div>
  )
}
