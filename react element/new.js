
import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./components/header";
import Body from "./components/body";

const Applayout = () => {
    return (
        <div className="pagelayout">

            <Header />
            <Body />

        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("yash"));
root.render(<Applayout />)

