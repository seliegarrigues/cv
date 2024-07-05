import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { GiSave } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { GrAdd } from "react-icons/gr";

const url ="https://cv-api-6kin.onrender.com";

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
    setFormations(data); // Update the state with the fetched data
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
    if (name !== "" && level !== "" && year !=="") {
      console.log(name);
      const response = await fetch(`${url}/formation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, level, year }), // or ({name : xxx, level: xxx})
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        fetchFormation();
        setName("");
        setLevel("");
        setYear("");
       
        setIsAdd(false); // Hide the add form after saving
      }
    }
  }

  function handleCancel() {
    setIsAdd(false);
  }

  function addFormation() {
    setIsAdd(true);
  }

  return (
    <div>
      <h2 className="text text-4xl text-center text-white bg-blue-600 p-2 rounded-3xl mb-2">
        Formation
      </h2>
      {!isAdd && (
        <button onClick={addFormation} className="btn btn-sm">
          <GrAdd size={24} color="blue" title="Ajouter" />
        </button>
      )}
      {isAdd && (
        <div className='"flex gap-2'>
          <input
            placeholder="Ajouter une nouvelle formation"
            type="text"
            className="input input-bordered input-primary w-full"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button onClick={handleSave}>
            <GiSave size={24} color="green" />
          </button>
          <button onClick={handleCancel}>
            <MdOutlineCancel size={24} />
          </button>
        </div>
      )}
      <div className="w-full">
        <div>
          {formations.map((item) => (
            <div key={item._id}>
              <p className="p-2"> {item.name} </p>
              <p className="p-2"> {item.level} </p>
              <p className="p-2"> {item.year} </p>
              {/* <ul>
                {item.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul> */}
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
    </div>
  );
}
