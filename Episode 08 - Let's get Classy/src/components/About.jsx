import React from "react";
// import {Component} from "react"; // You can use this as well
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component DidMount"); 
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is Namaste React WebSeries</h2>
        <UserClass
          name={"Mohit Soni (class)"}
          location={"UttarPradesh"}
          contact={"developer_mohitsoni@outlook.com"}
        />
      </div>
    );
  }
}

export default About;

/*
 * - Parent Constructor
 *  - Parent render
 *    - Mohit Functional Component Render
 *
 *    - Mohit Child Constructor
 *    - Mohit render
 *
 *    - Akshay Constructor
 *    - Akshay render
 *
 *    <DOM UPDATED - IN SINGLE BATCH>\
 *    - Mohit ComponentDidMount
 *    - Akshay ComponentDidMount
 *
 *  - Parent ComponentDidMount
 *
 */
