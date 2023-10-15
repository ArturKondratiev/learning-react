import './App.css';

import { useState } from "react";
import Table from '@mui/joy/Table';
import Button from '@mui/joy/Button';


export default function App() {
  const [users, setUsers] = useState(null);

  async function getAllUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const result =  await res.json();
    return setUsers(result);
  }
  if (users !== null) {
  return (
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
  } else {
    return <Button onClick={getAllUsers}>Create Table</Button>
  }
}