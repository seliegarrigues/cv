// src/components/Contact.js
import { useState, useEffect } from 'react'
const BASE_URL = "http://localhost:4007"

export default function Contact() {
  const [contact, setContact] = useState(null)

  async function getContact() {
    const response = await fetch(`${BASE_URL}/contact`)
    const data = await response.json()
    console.log(data)
    setContact(data[0]);
  }

  useEffect(() => {
    getContact()
  }, [])

  return (
    <>
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg bg-black">
        {contact &&
          <>
            <h2 className="text-2xl text-center font-bold bg-[#313B6D] text-white rounded-lg p-1 mb-5">
              {contact.nom} {contact.prenom}
            </h2>
            <div className="mb-2">
              <span className="font-bold">Phone: {contact.tel}</span>
            </div>
            <div className="mb-2">
              <span className="font-bold">@: {contact.email}</span>
            </div>
            <div className="mb-2">
              <span className="font-bold">Address: {contact.address}</span>
            </div>
          </>
        }
      </div>
    </>
  )
}
