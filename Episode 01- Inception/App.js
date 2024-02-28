// {} this is the place where you give the attribute to your tags

// React,createElement() finally gives an Object
const heading = React.createElement(
  // type
  "h1",

  // props
  { id: "heading" },

  // children
  "Hello World from React"
);

// heading becomes a "React Element" finally.

console.log(heading); // printing object

const root = ReactDOM.createRoot(document.querySelector("#root"));

// We are paasing a React element a JavaScript object

// this .render is responsible for coverting this object into an "h1" tag
root.render(heading);
