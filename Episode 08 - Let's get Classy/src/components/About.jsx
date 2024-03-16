import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>This is Namaste React WebSeries</h2>
      <User /> {/*Import Functional Based Component*/}
      <UserClass /> {/*Import Class Based Component*/}
    </div>
  );
};

export default About;
