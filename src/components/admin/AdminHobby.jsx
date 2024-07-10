import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { GiSave } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { GrAdd } from "react-icons/gr";

const BASE_URL = "https://cv-api-6kin.onrender.com";

export default function AdminHobby() {
  const [hobbies, setHobbies] = useState([]);
  const [hobby, setHobby] = useState("");
  const [isAdd, setIsAdd] = useState(false);

  async function fetchHobbies() {
    const response = await fetch(`${BASE_URL}/hobby`);
    const data = await response.json();
    console.log(data);
    setHobbies(data);
  }

  useEffect(() => {
    fetchHobbies();
  }, []);

  async function handleDelete(id) {
    console.log(id);
    const response = await fetch(`${BASE_URL}/hobby/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      fetchHobbies();
    }
  }

  async function handleSave() {
    if (hobby !== "") {
      console.log(hobby);
      const response = await fetch(`${BASE_URL}/hobby`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: hobby }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        fetchHobbies();
        setHobby("");
      }
    }
  }

  function handleCancel() {
    setIsAdd(false);
  }

  function addHobby() {
    setIsAdd(true);
  }

  return (
    <div className="space-y-4">
      <h2 className="text-4xl text-center text-white bg-blue-600 p-2 rounded-3xl">
        Loisirs
      </h2>
      <button
        onClick={addHobby}
        className="btn btn-sm flex items-center justify-center"
      >
        <GrAdd size={24} color="blue" title="Ajouter" />
      </button>
      {isAdd && (
        <div className="flex flex-col md:flex-row gap-2">
          <input
            placeholder="Ajouter un nouveau loisir"
            type="text"
            className="input input-bordered input-primary w-full"
            onChange={(e) => setHobby(e.target.value)}
            value={hobby}
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
      <div className="space-y-2">
        {hobbies.map((item) => (
          <div
            key={item._id}
            className="flex flex-col md:flex-row justify-between items-center border border-gray-300 rounded-lg p-4"
          >
            <p className="text-lg">{item.description}</p>
            <button
              onClick={() => handleDelete(item._id)}
              className="btn btn-primary btn-sm mt-2 md:mt-0"
            >
              <RiDeleteBinLine size={24} color="white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
