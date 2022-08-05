import React from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '@mui/material'
import './stylesss.css'

function FormUse() {
    const {  handleSubmit,watch,getValues, register, formState:{errors} } = useForm()


  return (
  <div className='container'>
    <form onSubmit={handleSubmit((data) => console.log('submiteed', data))}>
        <h1>LogIn</h1>
        <label>FirstName:</label>
        <Input {...register('firstName')} 
        sx={{backgroundColor:'white', width:'100%', borderRadius:'5px',padding:'10px 10px'}} 
        placeholder='LastName'
        />
        <label>LastName:</label>
        <Input {...register('lastName')} sx={{backgroundColor:'white', width:'100%', borderRadius:'5px',padding:'10px 10px'}} placeholder='LastName'/>
        <label>Email:</label>
        <Input type='email' {...register('email')} sx={{backgroundColor:'white', width:'100%', borderRadius:'5px',padding:'10px 10px'}} placeholder='emailaddress@example.com'/>
        <label>Password:</label>
        <Input type='password' id='password' {...register('password', {required:true, minLength:6})} 
        sx={{backgroundColor:'white', width:'100%', borderRadius:'5px',padding:'10px 10px'}} placeholder='******'/>
        {errors?.password?.type === 'required' && <p>Password Obbligatoria</p> }
        {errors?.password?.type === 'minLength' && <p>Password deve essere di almeno 6 cifre</p> }
        <label>Confirm Password:</label>
        <Input type='password' id='password' {...register('password-repeat', {required:true})} 
        sx={{backgroundColor:'white', width:'100%', borderRadius:'5px',padding:'10px 10px'}} placeholder='******'/>
        {watch('password-repeat') !== watch('password') && getValues('password-repeat') ? (<p>password non corrisponde</p>) : null}
        <input type='submit'/>
    </form>
  </div>
  )
}

export default FormUse