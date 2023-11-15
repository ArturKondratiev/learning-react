import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';

import { Table } from '@mui/joy';
import TextField from '@mui/material/TextField';

import { getAllUsers }  from '../../api/utils';

export default function CustomTable() {
  const [users, setUsers] = useState([]);
  const [, setSearchField ] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([])
  
  useEffect(() => {
    getAllUsers().then((result) => {
      setUsers(result);
      setFilteredUsers(result);
    });
  }, []);

  const handleSearchField = useCallback((e) => {
    const searchValue = e.target.value;
    setSearchField(searchValue);
    const filteredItems = users.filter((user) =>
    user.username.toLowerCase().includes(searchValue.toLowerCase())
  );

  setFilteredUsers(filteredItems);
  }, [users]);

  return (
    <>
      <TextField id="standard-basic" label="Search user" variant="standard" onChange={handleSearchField} />
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
          {filteredUsers.map(user => {
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
    </>
  )
}