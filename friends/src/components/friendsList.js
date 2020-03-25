import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth'



function FriendsList() {
    const[friends,setFriends] = useState([])
    const history = useHistory();
    useEffect(() => {
    axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res);
            setFriends(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    },[]);
    return(
        <div>
           { friends.map(friend =>{
               return(
                   <div>
                       <h3>{friend.name}</h3>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                   </div>
               )
           })}

<button onClick={() => history.push('/Add')}>You can add friends here if you had any</button>
        </div>
        
        
    )
}

export default FriendsList