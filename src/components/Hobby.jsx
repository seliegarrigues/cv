//src/components/Hobby.jsx
export default function Hobby() {

    
    const loisirs = ['Marche', 'Méditation', 'Investigation']
      return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl text-center font-bold bg-[#313B6D] text-white rounded-lg p-1 mb-5">
            Centre d'intérêts
          </h2>
          <ul>
            {loisirs.map(item => <li>{item}</li>)}
          </ul>
        </div>
      )
}



