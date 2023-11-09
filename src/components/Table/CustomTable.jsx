import React from 'react';
import { useEffect, useState } from 'react';

import { Table } from '@mui/joy';
import TextField from '@mui/material/TextField';

// Module not found: Error: Can't resolve '../../api/utils' in '/learning-react/src/components/Table'
import { useUtils } from '../../api/utils';

export default function CustomTable() {
  const [users, setUsers] = useState([]);
  const { getAllUsers } = useUtils();

  useEffect(() => {
    setUsers(getAllUsers);
  }, [getAllUsers]);

  return(
    <>
    <TextField id="standard-basic" label="Standard" variant="standard" /><Table
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
    </Table></>
  )
}