import React, { useEffect, useState } from 'react';
import { GrValidate } from "react-icons/gr";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa6";

export default function AdminContact() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [adresse, setAdresse] = useState('');

  async function fetchContact() {
    const response = await fetch('https://cv-api-6kin.onrender.com/contact');
    const data = await response.json();
    console.log(data);
    setNom(data[0].nom);
    setPrenom(data[0].prenom);
    setAdresse(data[0].adresse);
    setTel(data[0].tel);
    setEmail(data[0].email);
  }

  useEffect(() => {
    fetchContact();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(tel, email, adresse);
    fetch('https://cv-api-6kin.onrender.com/contact', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nom, prenom, tel, email, adresse })
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col md:flex-row items-center md:space-x-4">
        <label className="flex items-center">
          <CiMobile1 size={32} className="mr-2" />
          Tel
        </label>
        <input
          className="input input-bordered input-primary w-full md:w-auto"
          type="text"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center md:space-x-4">
        <label className="flex items-center">
          <MdOutlineAlternateEmail size={24} className="mr-2" />
          Email
        </label>
        <input
          className="input input-bordered input-primary w-full md:w-auto"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center md:space-x-4">
        <label className="flex items-center">
          <FaRegAddressCard size={24} className="mr-2" />
          Adresse
        </label>
        <input
          className="input input-bordered input-primary w-full md:w-auto"
          type="text"
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
        />
      </div>
      <button className="flex justify-center" type="submit">
        <GrValidate size={24} className="mr-2" />
        Valider
      </button>
    </form>
  );
}
