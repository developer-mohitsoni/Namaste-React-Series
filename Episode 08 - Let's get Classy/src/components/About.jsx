import React from "react";
// import {Component} from "react"; // You can use this as well
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");  //* First Parent Constructor Invoke
  }

  render() {
    console.log("Parent Render"); //* Then Parent render() this component
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is Namaste React WebSeries</h2>
        <User name={"Mohit Soni (function)"} />
        {/*Import Functional Based Component*/}
        <UserClass
          name={"Mohit Soni (class)"}
          location={"UttarPradesh"}
          contact={"developer_mohitsoni@outlook.com"}
        />
        {/*Import Class Based Component*/}
      </div>
    );
  }
}

export default About;
