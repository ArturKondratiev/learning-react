import React from 'react';

import Table from '@mui/joy/Table';

// import { getAllUsers } from '../../api/users';
import { useEffect, useState } from 'react';

export default function CustomTable() {
  const [users, setUsers] = useState([]);

  async function getAllUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await res.json(); 
    return setUsers(result);
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return(
    <Table
    color="primary"
    size="md"
    variant="plain"
  >
    <thead>
      <tr>
        <th style={{ width: '40%' }}>User name</th>
        <th style={{ width: '40%' }}>Email</th>
        <th style={{ width: '40%' }}>Address street</th>
        <th style={{ width: '40%' }}>City</th>
        <th style={{ width: '40%' }}>Zip code</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => {
        return (
          <tr key={user.id}>
            <th style={{ width: '40%' }}>{user.username}</th>
            <td style={{ width: '40%' }}>{user.email}</td>
            <td style={{ width: '40%' }}>{user.address.street}</td>
            <td style={{ width: '40%' }}>{user.address.city}</td>
            <td style={{ width: '40%' }}>{user.address.zipcode}</td>
          </tr>
          );
        })}
    </tbody>
  </Table>
  )
}