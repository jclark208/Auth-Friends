import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';




function Login() {
    let history = useHistory();
    const[user,setUser] = useState({
        username:'',
        password:''
    })


    const handleChange = (event) => {
        setUser({...user,[event.target.name]: event.target.value})
    };

    const login = (user) =>{
        axios
        .post("http://localhost:5000/api/login",user)
        .then(res =>{
            console.log(res)
            localStorage.setItem('token', res.data.payload);
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(user);
        console.log(login);
        history.push('/List');
    }


    

    return(
        <form className='loginForm' onSubmit={event => handleSubmit(event)}>
            <h1>Login here</h1>
            <input type='text' name ='username' placeholder='Username' onChange={event => handleChange(event)}/>
            <input type='password' name='password' placeholder='Password' onChange={event => handleChange(event)} />
            <h3>If you dont have an account please click here</h3>
            <button>Obligitory Button</button>
        </form>
    )
}

export default Login