import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { GiSave } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { GrAdd } from "react-icons/gr";

const url = "https://cv-api-6kin.onrender.com";

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
      fetchLangue();
    }
  }

  async function handleSave() {
    if (name !== "" && level !== "") {
      console.log(name);
      const response = await fetch(`${url}/langue`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, level }),
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
    <div className="space-y-4">
      <h2 className="text-4xl text-center text-white bg-blue-600 p-2 rounded-3xl">
        Langues
      </h2>
      {!isAdd && (
        <button
          onClick={addLangue}
          className="btn btn-sm flex items-center justify-center"
        >
          <GrAdd size={24} color="blue" title="Ajouter" />
        </button>
      )}
      {isAdd && (
        <div className="flex flex-col md:flex-row gap-2">
          <input
            placeholder="Ajouter une nouvelle langue"
            type="text"
            className="input input-bordered input-primary w-full"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <select
            className="select select-bordered w-full"
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
      <div className="overflow-x-auto">
        <table className="table w-full">
          <tbody>
            {langues.map((item) => (
              <tr key={item._id}>
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.level}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-primary btn-sm"
                  >
                    <RiDeleteBinLine size={24} color="white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
