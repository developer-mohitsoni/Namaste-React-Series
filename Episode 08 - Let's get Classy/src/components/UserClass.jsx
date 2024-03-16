import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //* creating state variable of the class based component
    this.state = {
      count: 0,
    };

    console.log(props); //* Display props

    console.log("Child Constructor"); //* Third Child Constructor is Invoke
  }

  componentDidMount() {
    console.log("Child Component DidMount"); //* Fifth method is render after the component is mounted/load
  }

  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;

    console.log("Child Render"); //* Fourth Child render() this component

    const onHandleClick = () => {
      this.setState({
        count: count + 1,
      });
    };

    //* NEVER UPDATES STATE VARIABLES DIRECTLY
    const onHandleClick2 = () => {
      if (count > 0) {
        this.setState({
          count: count - 1,
        });
      }
    };

    return (
      <div className="user-card">
        <h1>Count: {count} </h1>
        <button onClick={onHandleClick}>Count Increase</button>&nbsp;&nbsp;
        <button onClick={onHandleClick2}>Count Decrease</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
