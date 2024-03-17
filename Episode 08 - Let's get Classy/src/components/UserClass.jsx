import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default",
        avatar_url: "https://dummy-photo.com",
      },
    };

    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + " Child Component DidMount");
    //* API Call

    const data = await fetch("https://api.github.com/users/akshaymarch7");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  // If we want to update the count after when it is triggered or call... We can do like this.

  // In a ClassBasedComponent we can do this process in a hactic way like this:-

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.count !== this.state.count ||
      prevState.count !== this.state.count2
    ) {
      // code
    }
    console.log("Component DidUpdate");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    // console.log(this.props.name + " Child Render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="Akshay Saini Profile" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;

/*
 * ------- MOUNTING CYCLE --------
 *  Constructor (dummy)
 *  Render (dummy)
 *      <HTML Dummy>
 *  Component Did Mount
 *      <API CALL>
 *      <this.setState>  -> state variale is updated
 *
 * ------- UPDATING CYCLE --------
 *      render(API data)
 *      <HTML (new API data)>
 *      componentDidUpdate
 *
 *
 *
 *
 */
