// src/components/admin/AdminLangue.jsx
import { useEffect, useState } from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { GiSave } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { GrAdd } from "react-icons/gr";

const url = 'http://localhost:4007';

export default function AdminLangue() {
  const [langues, setLangues] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [langue, setLangue] = useState("");

  async function fetchLangue() {
    const response = await fetch(`${url}/langue`);
    const data = await response.json();
    console.log(data);
    setLangues(data);
  }

  useEffect(() => {
    fetchLangue();
  }, []);

  async function handleDelete(id) {
    console.log(id);
    const response = await fetch(`${url}/langue/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      fetchLangue(); // Refresh the language list after deletion
    }
  }

  async function handleSave() {
    if (langue !== "") {
      console.log(langue); // Log the new language
      // Add code to save the new language to the server
      const response = await fetch(`${url}/langue`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: langue }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        fetchLangue();
        setLangue("");
      }
    }
  }

  function handleCancel() {
    setIsAdd(false);
  }

  function addLangue() {
    setIsAdd(true);
  }

  return (
    <div>
      <button onClick={addLangue} className="btn btn-primary btn-sm">
        <GrAdd size={24} /> Ajouter une langue
      </button>
      {isAdd && (
        <div className="flex gap-2">
          <input
            placeholder="Ajouter une nouvelle langue"
            type="text"
            className="input input-bordered input-primary w-full"
            onChange={(e) => setLangue(e.target.value)}
            value={langue}
          />
          <button onClick={handleSave}>
            <GiSave size={24} color="green" />
          </button>
          <button onClick={handleCancel}>
            <MdOutlineCancel size={24} />
          </button>
        </div>
      )}

      {langues.map((item) => (
        <div key={item._id} className="flex justify-between items-center">
          <p>{item.name}</p>
          <p>{item.level}</p>
          <button
            onClick={() => handleDelete(item._id)}
            className="btn btn-primary btn-sm my-1"
          >
            <RiDeleteBinLine size={24} color="red" />
          </button>
        </div>
      ))}
    </div>
  );
}
