import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //* creating state variable of the class based component
    this.state = {
      count: 0,
    };

    console.log(props); //* Display props
  }
  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Count: {count} </h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
