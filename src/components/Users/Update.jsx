import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const updateUsers = useLoaderData();

    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = {name, email};
        console.log(updatedUser);
        fetch(`http://localhost:5000/users/${updateUsers._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Your updated successfully');
            }
            console.log(data)
        })
    }

    return (
        <div>
            <h2>Update user name: {updateUsers.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" defaultValue={updateUsers?.name} name="name" id="" />
                <br />
                <input type="email" defaultValue={updateUsers?.email} name="email" id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;