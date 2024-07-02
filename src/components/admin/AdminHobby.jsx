import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { GiSave } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { GrAdd } from "react-icons/gr";

const BASE_URL = "http://localhost:4007";

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
      fetchHobbies(); // Refresh the hobby list after deletion
    }
  }

  async function handleSave() {
    if (hobby !== "") {
      console.log(hobby); // Log the new hobby
      // Add code to save the new hobby to the server
      const response = await fetch(`${BASE_URL}/hobby`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ hobby }),
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
    <div>
      <h2 className="text text-4xl text-center text-white bg-blue-600 p-2 rounded-3xl mb-2">
        Loisirs
      </h2>
      <button onClick={addHobby} className="btn btn-sm">
        <GrAdd size={24} color="blue" title="Ajouter" />
      </button>
      {isAdd && (
        <div className="flex gap-2">
          <input
            placeholder="Ajouter un nouveau loisir"
            type="text"
            className="input input-bordered input-primary w-full"
            onChange={(e) => setHobby(e.target.value)}
            value={hobby}
          />
          <button onClick={handleSave}>
            <GiSave size={24} color="green" />
          </button>
          <button onClick={handleCancel}>
            <MdOutlineCancel size={24} />
          </button>
        </div>
      )}
      {hobbies.map((item) => (
        <div key={item._id} className="flex justify-between items-center">
          <p>{item.hobby}</p>
         
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
