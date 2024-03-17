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

  //* If we want to update the count after when it is triggered or call... We can do like this in Functional Component.
  useEffect(() => {
    // API Calls
  }, [count, count2]);

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
