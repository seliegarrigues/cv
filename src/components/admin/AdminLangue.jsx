import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { GiSave } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { GrAdd } from "react-icons/gr";

const url = "http://localhost:4007";

export default function AdminLangue() {
  const [langues, setLangues] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");

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
      fetchLangue(); // rafraichit la liste apres la suppression
    }
  }

  async function handleSave() {
    if (name !== "" && level !=="") {
      console.log(name); // Log la nouvelle langue
      // Add code to save the new language to the server
      const response = await fetch(`${url}/langue`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name,level}), // ou ({name: xxx, level: XXX})
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        fetchLangue();
        setName("");
        setLevel("");
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
      <h2 className="text text-4xl text-center text-white bg-blue-600 p-2 rounded-3xl mb-2">
        Langues
      </h2>
      {! isAdd && (<button onClick={addLangue} className="btn btn-sm">
        <GrAdd size={24} color="blue" title="Ajouter" />
      </button>)}
      {isAdd && (
        <div className="flex gap-2">
          <input
            placeholder="Ajouter une nouvelle langue"
            type="text"
            className="input input-bordered input-primary w-full"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e) => setLevel(e.target.value)}
            value={level}
          >
            <option selected hidden value="">
              Choisir le niveau
            </option>
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Avancé">Avancé</option>
            <option value="Maternelle">Maternelle</option>
          </select>
          <button onClick={handleSave}>
            <GiSave size={24} color="green" />
          </button>
          <button onClick={handleCancel}>
            <MdOutlineCancel size={24} />
          </button>
        </div>
      )}
      <table className="w-full">
        <tbody>
          {langues.map((item) => (
            <tr key={item._id}>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.level}</td>
              <td className="p-2">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-primary btn-sm my-1"
                >
                  <RiDeleteBinLine size={24} color="white" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
