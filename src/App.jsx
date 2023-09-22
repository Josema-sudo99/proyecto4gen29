import { useEffect, useState } from 'react'
import './App.css'
import useFecth from './hooks/useFecth'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  
  const baseUrl = 'https://users-crud.academlo.tech'
  const [ users,getUsers, createUser,deleteUser, updateUser ] = useFecth(baseUrl)
  const [styleMobal, setStyliMobal]= useState ('False')


  useEffect(() => {
    getUsers('/users')
  }, [])

   console.log(users)

   const handleForm = () => {
    if (styleMobal === 'false'){
      setStyliMobal('true')
    }else{
      setStyliMobal('false')
    }
   }

   const handleForm2 = (e) => {
    e.preventDefault()
    if (styleMobal === 'false'){
      setStyliMobal('true')
    }else{
      setStyliMobal('false')
    }
   }

  return (
    <div className='container'>
      <div className='container-create'>
      <h1 className='titulo'> Usuarios</h1>
      <button className='create-usuario' onClick={handleForm}>  ➕ Registar usurio</button>
      </div>
      <FormUser 
       createUser={createUser}
       infoUpdate={infoUpdate}
       updateUser={updateUser}
       setInfoUpdate={setInfoUpdate}
       styleMobal={styleMobal}
       handleForm2={handleForm2}
      />
      <div className='usercard'>
        {
          users?.map(user => (
            <UserCard
             key={user.id}
             user={user}
             deleteUser={deleteUser}
             setInfoUpdate={setInfoUpdate}
             handleForm={handleForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
