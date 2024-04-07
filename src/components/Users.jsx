import React, { useEffect, useState } from 'react';

const Users = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            
    }, [])


    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/users/${_id}`, {
            method : 'DELETE'
        })
        .then(res => {
            console.log('db : ', res)
            const remaining = users.filter(user => user._id !== _id)
            setUsers(remaining)
        })
        .catch(err => console.error(err))
    }


    return (
        <div>
            <h2>Users {users.length} </h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map(user => <tr key={user._id}>
                                    <th> {users.indexOf(user) + 1} </th>
                                    <td> {user.name} </td>
                                    <td> {user.email} </td>
                                    <td onClick={() => handleDelete(user._id)} className='btn'> X </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;