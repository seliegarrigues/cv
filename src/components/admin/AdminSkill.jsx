import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { GiSave } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { GrAdd } from "react-icons/gr";

const url = "http://localhost:4007";

export default function AdminSkill() {
  const [skills, setSkills] = useState([]);
  const [competence, setCompetence] = useState(""); // Corrected the state variable name
  const [isAdd, setIsAdd] = useState(false);

  async function fetchSkill() {
    const response = await fetch(`${url}/skill`);
    const data = await response.json();
    console.log(data);
    setSkills(data);
  }

  useEffect(() => {
    fetchSkill();
  }, []);

  async function handleDelete(id) {
    console.log(id);
    const response = await fetch(`${url}/skill/${id}`, {
      // Fixed the URL
      method: "DELETE",
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      fetchSkill(); // Refresh the skills list after deletion
    }
  }

  async function handleSave() {
    if (competence !== "") {
      console.log(competence); // Log the new skill
      // Add code to save the new skill to the server
      const response = await fetch(`${url}/skill`, {
        method: "POST",
        headers: {
          "Content-Type": "application/icon",
        },
        body: JSON.stringify({ competence }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        fetchSkill();
        setCompetence("");
      }
    }
  }

  function handleCancel() {
    setIsAdd(false);
  }

  function addSkill() {
    setIsAdd(true);
  }

  return (
    <div className="flex flex-col gap-1">
      <h2 className="text text-3xl text-center bg-slate-400">Compétences</h2>
      {!isAdd && ( // si la valeur de isAdd n'est pas true donc False, on lance l'action
        <button onClick={addSkill} className="btn btn-primary btn-sm my-1">
          <GrAdd size={24} color="white" title="Ajouter" /> une compétence
        </button>
      )}

      {isAdd && ( // si la valeur de IsAdd est true alors on fait les actions suivantes
        <div className="flex gap-2">
          <input
            placeholder="Ajouter une nouvelle compétence"
            type="text"
            className="input input-bordered input-primary w-full"
            onChange={(e) => setCompetence(e.target.value)} // Corrected the state update function
            value={competence}
          />
          <button onClick={handleSave}>
            <GiSave size={24} color="green" />
          </button>
          <button onClick={handleCancel}>
            <MdOutlineCancel size={24} />
          </button>
        </div>
      )}

      {skills.map((item) => (
        <div key={item._id} className="flex justify-between items-center">
          <p>{item.skill}</p>
          <p>{item._id}</p>
          <button
            onClick={() => handleDelete(item._id)}
            className="btn btn-primary btn-sm my-1"
          >
            <RiDeleteBinLine size={24} color="white" />
          </button>
        </div>
      ))}
    </div>
  );
}
