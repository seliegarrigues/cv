import { useState, useEffect } from "react";
import ProfilePicture from "../components/ProfilPIcture";
import { ImMobile } from "react-icons/im";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { LiaAddressCard } from "react-icons/lia";

const BASE_URL = "https://cv-api-6kin.onrender.com";

export default function Contact() {
  const [contact, setContact] = useState([]);

  async function getContact() {
    const response = await fetch(`${BASE_URL}/contact`);
    const data = await response.json();
    console.log(data);
    setContact(data);
  }

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      {contact.length > 0 && (
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <ProfilePicture nom={contact[0].nom} prenom={contact[0].prenom} />
          <div className="md:ml-6">
            <h2 className="text-2xl text-center font-bold bg-[#313B6D] text-white rounded-lg p-1 mb-5">
              Coordonnées
            </h2>
            <table className="w-full">
              <tr className="mb-2">
                <th className="font-bold">
                  <ImMobile /> Téléphone:
                </th>
                <td>{contact[0].tel}</td>
              </tr>
              <tr className="mb-2">
                <th className="font-bold">
                  <MdOutlineAlternateEmail /> Courriel:
                </th>
                <td>{contact[0].email}</td>
              </tr>
              <tr className="mb-2">
                <th className="font-bold">
                  <LiaAddressCard /> Adresse:
                </th>
                <td>{contact[0].address}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
