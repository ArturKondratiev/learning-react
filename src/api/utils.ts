import { useCallback } from 'react';

export function useUtils() {
  const getAllUsers = useCallback(
    async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        return await res.json();
      } catch(err) {
        console.log(err);
      }
    }, []
  ) 
  return {
    getAllUsers
  }
}