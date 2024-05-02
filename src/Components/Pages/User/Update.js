import React from 'react'
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';

function Update() {
    const {register, handleSubmit, setValue} = useForm();
    const navi = useNavigate();
    const {userId} = useParams()

   async function fetchData(){
      const result = await axios.get(`http://127.0.0.1:8000/a1/s1/${userId}/`)
      setValue('name', result.data.name);
      setValue('sname', result.data.sname);
      setValue('number', result.data.number);
    }
    
    function saveData(data){
      axios.put(`http://127.0.0.1:8000/a1/s1/${userId}/`, data)
      navi('/show')
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
    <div className='containar m-auto w-50 border border-5 p-5 mt-4'>
      <center><u><h1> Update form </h1></u></center>
      <form onSubmit={handleSubmit(saveData)} >
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
        <input type="submit" value="update" className='btn btn-success col-4'/>
        <input type="reset" value="cancel" className='btn btn-warning col-4 float-end'/>
      </form>
    </div>
   </>
  )
}

export default Update