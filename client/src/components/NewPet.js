import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import '../App.css';

const NewPet = (props) => {
    const [errors, setErrors] = useState("");
    const [petName, setPetName] =useState("");
    const [petType, setPetType] =useState("");
    const [petDescription, setPetDescription] =useState("");
    const [skillOne, setSkillOne] =useState("");
    const [skillTwo, setSkillTwo] =useState("");
    const [skillThree, setSkillThree] =useState("");

    const newSubmitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/pets`,{
        petName,
        petType,
        petDescription,
        skillOne,
        skillTwo,
        skillThree
        })
        .then((response) => {
            console.log(response.data);
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
        })
    }

    return (
        <div>
            <header>
                <h1>Pet Shelter</h1>
                <Link to={"/"}>back to home</Link>
            </header>
            <h3>Know a pet needing a home?:</h3>
            <form onSubmit={newSubmitHandler} className='form-box'>
                <div>
                <label>Pet Name: </label>
                <input onChange={(e) => setPetName(e.target.value)}
                value={petName}
                name="petName"
                type="text"
                /> 
                {errors.petName ? <span>{errors.petName.message}</span> :null}
                </div>
                <div>
                <label>Pet Type: </label>
                <input onChange={(e) => setPetType(e.target.value)}
                value={petType}
                name="petType"
                type="text"
                /> 
                {errors.petType ? <span>{errors.petType.message}</span> :null}
                </div>
                <div>
                <label>Pet Description: </label>
                <input onChange={(e) => setPetDescription(e.target.value)}
                value={petDescription}
                name="petDescription"
                type="text"
                /> 
                {errors.petDescription ? <span>{errors.petDescription.message}</span> :null}
                </div>
                <p>Skills (optional):</p>
                <div>
                    <div>
                    <label>Skill 1: </label>
                    <input onChange={(e) => setSkillOne(e.target.value)}
                    value={skillOne}
                    name="skills"
                    type="text"
                    /> 
                    </div>
                    <div>
                    <label>Skill 2: </label>
                    <input onChange={(e) => setSkillTwo(e.target.value)}
                    value={skillTwo}
                    name="skills"
                    type="text"
                    /> 
                    </div>
                    <div>
                    <label>Skill 3: </label>
                    <input onChange={(e) => setSkillThree(e.target.value)}
                    value={skillThree}
                    name="skills"
                    type="text"
                    /> 
                    </div>
                </div>
                <div>                
                    <button className='button-form' type="submit">Add Pet</button>
                </div>
            </form>
        </div>
    );

}

export default NewPet;