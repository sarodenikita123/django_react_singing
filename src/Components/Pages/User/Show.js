import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Show() {
    const [user, setUser] = useState([])

    async function fetchData(){
        const result = await axios.get('http://127.0.0.1:8000/a1/s1/')

        setUser(result.data)
    }
    useEffect(()=>{
        fetchData();
    },[])

  return (
    <>
        <center><u><h2>Singing details</h2></u></center>
        <table class="table table-success table-striped w-50 m-auto p-6">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Song</th>
                    <th>Number</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((obj)=>{
                        return(
                            <tr>
                                
                                <td>{obj.name}</td>
                                <td>{obj.sname}</td>
                                <td>{obj.number}</td>
                                 <td>
                                    <NavLink to={`/update/${obj.id}`}><button className="btn btn-outline-warning btn-sm me-3">UPDATE</button></NavLink>
                                    <NavLink to={`/delete/${obj.id}`}><button className="btn btn-outline-danger btn-sm" >DELETE</button></NavLink>
                                </td>
                            </tr>
                    )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default Show