import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { GiSave } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { GrAdd } from "react-icons/gr";

const url = "https://cv-api-6kin.onrender.com";

export default function AdminFormation() {
  const [formations, setFormations] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [year, setYear] = useState("");

  async function fetchFormation() {
    const response = await fetch(`${url}/formation`);
    const data = await response.json();
    console.log(data);
    setFormations(data);
  }

  useEffect(() => {
    fetchFormation();
  }, []);

  async function handleDelete(id) {
    console.log(id);
    const response = await fetch(`${url}/formation/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      fetchFormation();
    }
  }

  async function handleSave() {
    console.log(name);
    const response = await fetch(`${url}/formation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, level, year }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      fetchFormation();
      setName("");
      setLevel("");
      setYear("");
      setIsAdd(false);
    }
  }

  function handleCancel() {
    setIsAdd(false);
  }

  function addFormation() {
    setIsAdd(true);
  }

  return (
    <div className="space-y-4">
      <h2 className="text-4xl text-center text-white bg-blue-600 p-2 rounded-3xl">
        Formation
      </h2>
      {!isAdd && (
        <button
          onClick={addFormation}
          className="btn btn-sm flex items-center justify-center"
        >
          <GrAdd size={24} color="blue" title="Ajouter" />
        </button>
      )}
      {isAdd && (
        <div className="flex flex-col md:flex-row gap-2">
          <input
            placeholder="Ajouter une nouvelle formation"
            type="text"
            className="input input-bordered input-primary w-full"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            placeholder="Ajouter la période"
            type="text"
            className="input input-bordered input-primary w-full"
            onChange={(e) => setLevel(e.target.value)}
            value={level}
          />
          <input
            placeholder="Ajouter le niveau"
            type="text"
            className="input input-bordered input-primary w-full"
            onChange={(e) => setYear(e.target.value)}
            value={year}
          />
          <div className="flex gap-2">
            <button onClick={handleSave} className="btn btn-sm btn-success">
              <GiSave size={24} color="white" />
            </button>
            <button onClick={handleCancel} className="btn btn-sm btn-error">
              <MdOutlineCancel size={24} color="white" />
            </button>
          </div>
        </div>
      )}
      <div className="w-full space-y-4">
        {formations.map((item) => (
          <div key={item._id} className="border border-gray-300 rounded-lg p-4">
            <p className="p-2">{item.name}</p>
            <p className="p-2">{item.level}</p>
            <p className="p-2">{item.year}</p>
            <button
              onClick={() => handleDelete(item._id)}
              className="btn btn-primary btn-sm my-1"
            >
              <RiDeleteBinLine size={24} color="white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
