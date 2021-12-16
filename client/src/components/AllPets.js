import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import '../App.css';

const AllPets = (props) => {
    const [petList, setPetList] = useState([]);
        
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
        .then((response) => {
            console.log(response);
            console.log(response.data);
            setPetList(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const deleteHandler = (idToDelete) =>{
        axios.delete(`http://localhost:8000/api/pets/${idToDelete}`)
        .then((response) => {
            console.log(response.data);
            setPetList(petList.filter((pet) => pet._id !== idToDelete))
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <div>
            <header>
                <h1>Pet Shelter</h1>
                <Link to={"/new"}>add a pet to the shelter</Link>
            </header>
            <h3>These pets are looking for a good home</h3>
            <table className='table'>
                <thead className='table-head'>
                    <tr>
                        <th>Pet</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        petList?
                        petList.map((pet, index) => (
                            <tr key={index}>
                                <td>{pet.petName}</td>
                                <td>{pet.petType}</td>
                                <td>
                                    <button className='button-main' onClick={() => {navigate(`/${pet._id}`)}}>details</button> |
                                    <button className='button-main' onClick={() => {navigate(`/edit/${pet._id}`)}}>edit</button>
                                </td>
                            </tr>
                        ))
                        :null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllPets;