// const heading = React.createElement(
//     "h1",
//     {},
//     "Hello gulshan wecome to react"
//   );

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },[
    React.createElement("h1", {}, "Hey i am H1 Tag"),
    React.createElement("h2", {}, "Hey i am H2 Tag") ,
    React.createElement("div",{id:"inner_child"},"hey")
]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
