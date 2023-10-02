import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../assets/style/FormUser.css';

const FormUser = ({
  createUser,
  infoUpdate,
  updateUser,
  setInfoUpdate,
  styleMobal,
  handleForm2,
}) => {
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    reset(infoUpdate);
  }, [infoUpdate, reset]);

  const onSubmit = (data) => {
    if (infoUpdate) {
      // Editar usuario
      updateUser('/users', infoUpdate.id, data);
      setInfoUpdate(null); // Limpiar la información de actualización
    } else {
      // Crear usuario
      createUser('/users', data);
    }

    // Restablecer el formulario después de enviar los datos
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: '',
    });
  };

  return (
    <div className={`${styleMobal} contaioner-form`}>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <button className='button-delete-usuario' onClick={handleForm2}>❎</button>
        <div className='form-text'>
          <h2 className='titulo-from'>{infoUpdate ? 'Edit User' : 'New User'}</h2>
          <div className='registre'>
            <label className='registre-text' htmlFor="email">Email <br /></label>
            <input className='registre-cuadro' {...register('email')} type="text" id="email" />
          </div>
          <div className='registre'>
            <label className='registre-text' htmlFor="password">Password<br /></label>
            <input className='registre-cuadro' {...register('password')} type="password" id="password" />
          </div>
          <div className='registre'>
            <label className='registre-text' htmlFor="first_name">First name<br /></label>
            <input className='registre-cuadro' {...register('first_name')} type="text" id="first_name" />
          </div>
          <div className='registre'>
            <label className='registre-text' htmlFor="last_name">Last name<br /></label>
            <input className='registre-cuadro' {...register('last_name')} type="text" id="last_name" />
          </div>
          <div className='registre'>
            <label className='registre-text' htmlFor="birthday">Birthday<br /></label>
            <input className='registre-cuadro' {...register('birthday')} type="date" id="birthday" />
          </div>
        </div>
        <button className='button-create'> {infoUpdate ? 'Update User' : 'Create User'} <br />{infoUpdate ? '🔁' : '▶️'} <br />  </button>
      </form>
    </div>
  );
};

export default FormUser;


