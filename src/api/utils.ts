import { useCallback } from 'react';

export function useUtils() {
  const getAllUsers = useCallback(
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        return await res.json();
    }, []
  ) 
  return (
    getAllUsers
  )
}
