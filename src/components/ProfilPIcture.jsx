import React from 'react';

export default function ProfilePicture({ nom, prenom }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mb-5">
      <img
        className="rounded-full w-32 h-32 md:w-48 md:h-48"
        src="./Elise-GARRIGUES.jpeg"
        alt="Profile"
      />
      <h2 className="text-2xl md:text-4xl font-semibold text-center">
        {prenom} {nom}
      </h2>
    </div>
  );
}
