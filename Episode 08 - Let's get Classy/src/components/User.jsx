import { useState, useEffect } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClick2 = () => {
    if (count > 0) setCount(count - 1);
  };

  
  //* Suppose i want to do something when count is changing and i want to do something when my count2 chnaging. So, in Functional Component using Two Hooks we can do that as:-
  useEffect(() => {
    // API Calls
  }, [count]);
  useEffect(() => {
    // API Calls
  }, [count2]);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <button onClick={handleClick}>Count Increase</button>&nbsp;&nbsp;
      <button onClick={handleClick2}>Count Decrease</button>
      <h2>Name: {name}</h2>
      <h3>Location: UttarPradesh</h3>
      <h4>Contact: developer_mohitsoni@outlook.com</h4>
    </div>
  );
};
export default User;
