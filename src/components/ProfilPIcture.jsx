// src/components/ProfilePicture.jsx
import React from 'react'

export default function ProfilPIcture({nom,prenom}) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mb-5">
      <img className='w-[300px]rounded-full w-32 h-32' src={"./Elise-GARRIGUES.jpeg"}
       alt="Profile"  />
      <h2 className="text-4xl font-semibold ">{prenom} {nom}</h2>
    </div>
  )
}
