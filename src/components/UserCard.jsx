 const UserCard = ({user, deleteUser, setInfoUpdate , handleForm}) => {1

    const handleDelete = () => {
      deleteUser('/users', user.id)
    }
    const handleEdit = () => {
      setInfoUpdate(user)
      handleForm()
    }

   return (
    <article className="text-recuadro">

    <h3 className="text-titulo">{`${user.id} ${user.first_name} ${user.last_name}`}</h3>
     <hr className="hr-color"/>
    <ul className="text-usuario">

      <li className="text-usuario-id"><span>Email: </span><br /><span> ✉️{user.email}</span></li>

      <li className="text-usuario-id"><span>Birthday: </span><br /><span>🎁 {user.birthday}</span></li>

    </ul>
    <hr className="hr-color" />
    <div className="button-usuario">
      <button className="botonsito tacho" onClick={handleDelete}>🗑️</button>
      <button className="botonsito lapiz" onClick={handleEdit}>🖋️</button>
    </div>
  </article>
   )
 }
 
 export default UserCard