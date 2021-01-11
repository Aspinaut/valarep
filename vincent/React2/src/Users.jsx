import React, { useEffect, useState } from 'react';
var faker = require('faker');

const Users = () => {
    const [users, setUsers] = useState([]);
    const [newUserLastName, setNewUserLastName] = useState('');
    const [newUserFirstName, setNewUserFirstName] = useState('');

    // const fetchUsers = async () => {
    //     const data = await [
    //         { id: 1, lastName: 'Brocheton', firstName: 'Vincent' }
    //     ]
    //     setUsers(data);
    // }
    const arrayUsers = [];
    for (let i =0; i < 25; i++){
      arrayUsers[i] = { id: i, lastName: faker.name.lastName(), firstName: faker.name.firstName() };
    }
    console.log(arrayUsers[5]);
    const fetchUsers = async () => {
        const data = await [

        ]
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers().then(r => '');
    }, []);

    const handleChangeNom = ({ currentTarget }) => {
        setNewUserLastName(currentTarget.value);
    }

    const handleChangePrénom = ({ currentTarget }) => {
        setNewUserFirstName(currentTarget.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const id = new Date().getTime();
        const lastName = newUserLastName;
        const firstName = newUserFirstName;

        const copieUsers = [...users];
        copieUsers.push({id, lastName, firstName});

        setUsers(copieUsers);
        setNewUserFirstName('');
        setNewUserLastName('');
    }

    return <>
        <h1>Liste d'utilisateurs</h1>
        <ul>
            {users.map(user =>
                <li key={user.id}>{user.lastName} {user.firstName}</li>
            )}
        </ul>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">Prénom : </label>
            <input value={newUserFirstName} onChange={handleChangePrénom} type="text" name="firstName" id="firstName" />
            <label Style="margin-left:1em" htmlFor="lastName">Nom : </label>
            <input value={newUserLastName} onChange={handleChangeNom} type="text" name="lastName" id="lastName" />
            <button Style="margin-left:1em">Valider</button>
        </form>
        <br />
    </>
}

export default Users;
