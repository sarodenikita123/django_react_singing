import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Add() {
  const {register, handleSubmit} = useForm();
  const navi = useNavigate();

  function saveData(data){
    const result = axios.post(" http://127.0.0.1:8000/a1/s1/", data)
    navi('/show')
  }

  return (
   <>
    <div className='containar border border-5 p-4 mt-5 w-50 m-auto'>
      <center><u><h1>SINGING </h1></u></center>
      <form onSubmit={handleSubmit(saveData)}>
        <label htmlFor='n'>Name:</label>
        <input type="text" id="n" className='form-control'
        {...register('name')}/>
        <br/><br/>
        <label htmlFor='s'>Song Name:</label>
        <input type="text" id="s" className='form-control'
        {...register('sname')}/>
        <br/><br/>
        <label htmlFor='no'>Mobile no:</label>
        <input type="number" id="no" className='form-control'
        {...register('number')}/>
        <br/><br/>
        <input type="submit" value="submit" className='btn btn-success'/>
        <input type="reset" value="cancel" className='btn btn-warning float-end'/>
      </form>
    </div>
   </>
  )
}

export default Add