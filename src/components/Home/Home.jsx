import { useCallback, useState } from "react";
import { useDispatch } from "react-redux"

import { createCustomer } from "../../store/customerSlice";

export default function Home() {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');

  const dispatch = useDispatch();
  
  const handleCustomer = useCallback(() => {
    if (!fullName || !age) return;
    const createdAt = new Date().toISOString();
    dispatch(createCustomer({fullName, age, createdAt}));
  },[age, dispatch, fullName]);

  return(
    <>
      <h1>Hello at home {fullName === '' ? false : `, ${fullName}`} !</h1>
      <div>
        <label>Enter your name: </label>
        <input value={fullName} onChange={(e) => setFullName(e.target.value)}/>
        <br />
        <br />
        <label>Enter your age: </label>
        <input value={age} onChange={(e) => setAge(e.target.value)}/>
        <br />
        <br />
        <button onClick={handleCustomer}>Enter</button>
      </div>
    </>
  )
}