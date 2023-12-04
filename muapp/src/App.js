import React, { useState } from "react";

// import "./App.css";
// import Home from "./com/home";
// import Sign_In_page from "./Form/Sign_In_page";
// import Toggle from "./com/toggle";
import FAQs from "./com/FAQs";
import CustomHook from "./self-example/CustomHook";
import Home from "./com/home";
import Datajson from "./User&Pass/Data";
function App() {
  return (
    <div style={{ height: "90vh" }}>
      <CustomHook />
      {/* <Home /> */}
      {/* {Datajson.map((item, key) => {
        <FAQs key={key} {...item} />;
      })} */}
      {/* {Datajson.map((item, key) => {
        return <FAQs key={key} {...item} />;
      })} */}
      {/* <Toggle /> */}
      {/* <Sign_In_page /> */}
    </div>
  );
}

export default App;
