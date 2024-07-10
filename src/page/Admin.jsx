//src/page/Admin.jsx
import { useState } from 'react'
import AdminContact from '../components/admin/AdminContact'
import AdminSkill from '../components/admin/AdminSkill'
import AdminLangue from '../components/admin/AdminLangue'
import AdminHobby from '../components/admin/AdminHobby'
import Login from './Login'
import AdminFormation from '../components/admin/AdminFormation'
import AdminExperience from '../components/admin/AdminExperience'

export default function Admin() {
  const [username,setUsername]= useState('')
  const [islogged,setIslogged]= useState(false)
  const [password,setPassword]= useState('')

function handleSubmit (e) {
  e.preventDefault()
  if (username === localStorage.getItem('username') && password === localStorage.getItem('password')){
    setIslogged(true)
  } else {
    alert ('les identifiants sont incorrects')
  }
}






  if (!islogged){ // une fonction doit retourner quelque chose soit is logged soit la div suivante
    return(
     
      <Login username={username} 
      password={password} 
      setUsername={(e)=>setUsername(e.target.value)} 
      setPassword={(e)=>setPassword (e.target.value)} 
      handleSubmit = {handleSubmit}/>
    )
  }
  return (
    <div className='flex gap-5 p-5 max-md:flex-col'>
      <div>
      <AdminContact />
        <AdminSkill/>
        <AdminLangue/>
        <AdminHobby/>
      </div>
      <div className='flex-row'>
        <AdminFormation/>
        <AdminExperience/>
      </div>
        
    </div>
  )
}
