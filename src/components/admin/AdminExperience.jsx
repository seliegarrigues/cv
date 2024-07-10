import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { GiSave } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { GrAdd } from "react-icons/gr";

const url = "https://cv-api-6kin.onrender.com";

export default function AdminExperience() {
  const [experiences, setExperiences] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [years, setYears] = useState("");
  const [mission, setMission] = useState("");

  async function fetchExperience() {
    const response = fetch(`${url}/experience`);
    const data = await response.json();
    console.log(data);
    setExperiences(data);
  }

  useEffect(() => {
    fetchExperience();
  }, []);

  async function handleDelete(id) {
    console.log(id);
    const response = await fetch(`${url}/experience/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      fetchExperience();
    }
  }

  async function handleSave() {
    if (company !== "" && position !== "" && years !== "" && mission !== "") {
      console.log(company);
      const response = await fetch(`${url}/experience`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ company, position, years, mission }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        fetchExperience();
        setCompany("");
        setPosition("");
        setYears("");
        setMission("");

        setIsAdd(false);
      }
    }
  }
  function handleCancel() {
    setIsAdd(false);
  }
  function addExperience() {
    setIsAdd(true);
  }
  return (
    <div>
      <h2 className="text text-4xl text-center text-white bg-blue-600 p-2 rounded-3xl mb-2">
        Expériences
      </h2>
      {!isAdd && (
        <button onClick={addExperience} type="button" className="btn btn-sm">
          <GrAdd size={24} color="blue" title="Ajouter" />
        </button>
      )}
      {isAdd && (
        <form className='"flex gap-2' onSubmit={handleSave}>
          <input
            placeholder="Ajouter une nouvelle Company"
            type="text"
            name="company"
            className="input input-bordered input-primary w-full"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
          />
          <input
            className="input input-bordered input-primary w-full"
            placeholder="Ajouter une Date"
            onChange={(e) => setYears(e.target.value)}
            type="text"
            name="year"
            value={years}
          />
          <input
            className="input input-bordered input-primary w-full"
            placeholder="Ajouter une mission"
            onChange={(e) => setMission(e.target.value)}
            type="text"
            name="mission"
            value={mission}
          />
          <input
            className="input input-bordered input-primary w-full"
            placeholder="Ajouter une position"
            onChange={(e) => setPosition(e.target.value)}
            type="text"
            name="position"
            value={position}
          />

          <button onClick={handleSave}>
            <GiSave size={24} color="green" />
          </button>
          <button onClick={handleCancel}>
            <MdOutlineCancel size={24} />
          </button>
        </form>
      )}
      <div className="w-full">
        <div>
          {experiences.map((item) => (
            <div key={item._id}>
              <p className="p-2">{item.company}</p>
              <p className="p-2">{item.position}</p>
              <p className="p-2">{item.years}</p>
              <p className="p-2">{item.mission}</p>
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
