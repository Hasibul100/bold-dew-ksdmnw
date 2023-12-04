import React, { useState } from "react";
import FormikForm1 from "../Form/Formik1";
import DataFetch from "./DataFetch";

// import Sign_In_page from "../Form/Sign_In_page";
// import "./faqs.module.css";
// import Sign_Up_page from "../Form/Sign_Up_page";
// import Faqs from "./Faqs1";
// import Datajson from "../User&Pass/Data";
// // import Child1 from "./Child1";
// // import ChildA from "./ChildA";
// //import FormData from "../User&Pass/Data";
// import Card from "./Card";

export default function Home() {
  const [isLog, setisLog] = useState(false);
  return (
    <>
      <DataFetch />
      {/* {isLog ? <Sign_In_page /> : <Sign_Up_page />} */}

      {/* {Datajson.map((item, key) => {
        return <Faqs key={key} {...item} />;
      })} */}
      {/* <Card /> */}
      {/* <ChildA />

      <h1>Hello</h1>
      <Child1 txt="I am from Home" /> */}
      {/* <FormikForm1 /> */}
    </>
  );
}
