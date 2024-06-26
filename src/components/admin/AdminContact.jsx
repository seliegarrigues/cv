// src/components/admin/AdminContact.jsx
import React, { useEffect, useState } from 'react'

export default function AdminContact() {
    const [nom, setNom]= useState('')
    const [prenom, setPrenom]= useState('')
    const [tel, setTel]= useState('')
    const [email, setEmail]= useState('')
    const [adresse, setAdresse]= useState('')

    async function fetchContact(){
        const response = await fetch ('http://localhost:4007/contact')
        const data = await response.json()
        console.log(data);
        setNom(data[0].nom)
        setPrenom (data[0].prenom)
        setAdresse (data[0].adresse)
        setTel (data[0].tel)
        setEmail (data[0].email)
    }
    useEffect (()=>{
        fetchContact()
    }, [])

    function handleSubmit (event){
        event.preventDefault()
        console.log(tel, email, adresse);
        fetch('http://localhost:4007/contact', {
            method: 'POST',
            headers : {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({nom, prenom, tel,email,adresse})
        })
        .then(response => response.json())
        .then( data => console.log(data))
    }
  return (
    <form onSubmit={handleSubmit}>
            <div className=''>
                <label>Tel</label>
                <input
                    className="input input-bordered input-primary w-full"
                    type="text"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)} />
            </div>
            <div className=''>
                <label>Email</label>
                <input
                    className="input input-bordered input-primary w-full"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className=''>
                <label>Adresse</label>
                <input
                    className="input input-bordered input-primary w-full"
                    type="text"
                    value={adresse}
                    onChange={(e) => setAdresse(e.target.value)} />
            </div>
            <button type="submit">Valider</button>
        </form>
  )
}
