

const heading=React.createElement("div",{id: "yashchild"},
React.createElement("h1",{id: "yashchild2"},"Hi I am a nested object yash"));

const root=ReactDOM.createRoot(document.getElementById("yash"));
root.render(heading);//converting react element into browser understanding html

