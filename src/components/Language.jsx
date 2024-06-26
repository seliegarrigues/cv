//src/components/Language.jsx
import React from 'react'

export default function Language() {
  const Language = ['Francais', 'Anglais', 'Allemand', '']
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl text-center font-bold bg-[#313B6D] text-white rounded-lg p-1 mb-5">
        Langues 
      </h2>
      <ul>
        {Language.map(item => <li>{item}</li>)}
      </ul>
    </div>
  )
}