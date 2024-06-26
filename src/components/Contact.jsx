// src/components/Contact.js
import { useState, useEffect } from "react";
import ProfilePicture from "../components/ProfilPIcture";
const BASE_URL = "http://localhost:4007";

export default function Contact() {
  const [contact, setContact] = useState([]); // oussama il ecrit useState([])

  async function getContact() {
    // fonction asynchrone
    const response = await fetch(`${BASE_URL}/contact`); // on peut mettre directement l'adresse url
    const data = await response.json();
    console.log(data);
    setContact(data);
  }

  useEffect(() => {
    // on appelle la fonction avec useEffect
    getContact();
  }, []); // pour eviter qu'il appelle plusieurs fois on met un tableau vide et comme ça il appelle une seule fois

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg ">
      {contact.length > 0 &&  // ou {contact && }
        <div>
          <ProfilePicture nom={contact[0].nom} prenom={contact[0].prenom} />
          <h2 className="text-2xl text-center font-bold bg-[#313B6D] text-white rounded-lg p-1 mb-5">
            Coordonnées
          </h2>
          <table>
            <tr className="mb-2">
              <th className="font-bold">Téléphone: </th>
              <td>{contact[0].tel}</td>
            </tr>
            <tr className="mb-2">
              <th className="font-bold">Courriel: </th>
              <td>{contact[0].email}</td>
            </tr>
            <tr className="mb-2">
              <th className="font-bold">Adresse: </th>
              <td>{contact[0].address}</td>
            </tr>
          </table>
        </div>
      }
    </div>
  );
}
