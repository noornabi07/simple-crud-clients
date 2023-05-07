import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loaddedUsers = useLoaderData();
    const [users, setUsers] = useState(loaddedUsers)

    const handleDelete = id =>{
        console.log("This is Delete id:", id)
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('deleted succussfully');
                const remaining = users.filter(user => user._id !== id)
                setUsers(remaining)
            }
        })
    }
    return (
        <div>
            <h2>User is: {users.length}</h2>
            {
                users.map(user => 
                <p key={user._id}>{user.name} : {user.email} : {user._id}
                <Link to={`/update/${user._id}`}>
                    <button>Update</button>
                </Link>
                <button
                    onClick={() => handleDelete(user._id)}
                >X</button> </p>)
            }
        </div>
    );
};

export default Users;