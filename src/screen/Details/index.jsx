import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.css'


const Details = () => {
    const {id} = useParams();
    const [data,setData] = useState([])

    const fechDetails = async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        setData(response.data);
    }


    useEffect(()=> {
        fechDetails()
    },[])

  return (
    <section>
        <Link to='/'>Back</Link>
        <div className='container_details'>
        <img src={data.image} alt='' />
        <div>
        <h2>Name: {data.name}</h2>
        <p>Status: {data.status}</p>
        <p>Gender: {data.gender}</p>
        <p>Specie: {data.species}</p>
        <p>Create: {data.created}</p>
        </div>
    </div>
    </section>
  )
}

export default Details