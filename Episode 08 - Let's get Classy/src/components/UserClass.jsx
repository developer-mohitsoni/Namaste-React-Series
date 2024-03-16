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

    //console.log(this.props.name + " Child Constructor");
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

  render() {
    //console.log(this.props.name + " Child Render");

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
