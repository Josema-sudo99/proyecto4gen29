import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import '../assets/style/FormUser.css';


const FormUser = ({createUser , infoUpdate , updateUser ,setInfoUpdate , styleMobal , handleForm2}) => {

   const {handleSubmit,register,reset} = useForm()

   useEffect(() => {
     reset(infoUpdate)
   }, [infoUpdate])

   const Submit = data => {
    if(infoUpdate) {
      //Editar
      updateUser('/users', infoUpdate.id, data)
      setInfoUpdate()
    }else{
      //Crear
      createUser('/users',data)
    }
    createUser('/users',data) 
     reset({
        email: '',
        password: '',
        first_name: '',
        last_name: '' ,
        bitthday: ''
     })
   }

  return (
    <div className={`${styleMobal} contaioner-form`}>
    <form onSubmit={handleSubmit(Submit)} className="form">
    <button  className='button-delete-usuario' onClick={handleForm2}>❎</button>
    <div className='form-text'>
    <h2 className='titulo-from'>New User</h2>
        <div className='registre'>
            <label htmlFor="email">Email <br/></label>
            <input {...register('email')} type="text" id="email" />
        </div>
        <div className='registre'>
            <label htmlFor="Password">Password<br/></label>
            <input {...register('password')} type="password" id="Password" />
        </div>
        <div className='registre'>
            <label  htmlFor="First_name">First name<br/></label>
            <input {...register('first_name')} type="text" id="First_name" />
        </div>
        <div className='registre'>
            <label htmlFor="last_name">Last name<br/></label>
            <input {...register('last_name')}  type="text" id="last_name" />
        </div>
        <div className='registre'>
            <label htmlFor="birthday">Birthday<br/></label>
            <input {...register('birthday')} type="date" id="birthday" />
        </div>
        </div>
        <button className='button-create'>{infoUpdate ? '🔁' :'▶️'}</button>
    </form>
    </div>
  );
};

export default FormUser
