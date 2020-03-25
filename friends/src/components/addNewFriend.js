import React, { useState } from "react";
import axios from 'axios';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";



function AddNewFriends(){
    let history =useHistory();
    const [friends,setFriends] =useState({
        name:'',
        age:'',
        email:''
    });

    const handleChange = (event) => {
        setFriends({...friends,[event.target.name]: event.target.value})
    };

    const addNewFriends = (friends) =>{
        axiosWithAuth()
        .post("http://localhost:5000/api/friends",friends)
        .then(res =>{
            console.log(res);
            history.push('/List');
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewFriends(friends);
        console.log(addNewFriends)
    }

    return(
        <form className='addNewFriends' onSubmit={event => handleSubmit(event)}>
            <h1>Add new friends</h1>
            <input type='text'name='name' placeholder='Enter your friends name' onChange={event => handleChange(event)}/>
            <input type='text' name='age' placeholder='Enter their age'onChange={event => handleChange(event)}/>
            <input type='email' name ='email' placeholder='Enter their Email'onChange={event => handleChange(event)} />
            <button>Touch me</button>
        </form>

    )
}
export default AddNewFriends