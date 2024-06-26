// src/components/ProfilePicture.jsx
import React from 'react'

export default function ProfilPIcture() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <img src={"./Elise-GARRIGUES.jpeg"} alt="Profile" className="rounded-full w-32 h-32" />
      <h1 className="text-3xl font-bold mt-4">Elise Garrigues</h1>
    </div>
  )
}
