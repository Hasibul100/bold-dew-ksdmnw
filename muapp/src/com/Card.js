// import React, { useState } from "react";

// import Sign_Up_page from "../Form/Sign_Up_page";
// export default function Card() {
//   const [formData, setFormData] = useState([""]);
//   const fdata = (dt) => {
//     setFormData((prev) => {
//       return [...prev, ...dt]; // Added return statement
//     });
//   };

//   return (
//     <>
//       <Sign_Up_page fdt={fdata} />

//       <div>
//         <h1>{"Nmae : " + FormData.name}</h1>
//         <h3>{"User Name : " + FormData.username}</h3>
//         <h3>{"Email :" + FormData.email}</h3>
//         <h3>{"Password : " + FormData.password}</h3>
//       </div>

//       <h1>hi</h1>
//     </>
//   );
// }
import React, { useState } from "react";
import Sign_Up_page from "../Form/Sign_Up_page";
import Card1 from "./Card1";
export default function Card() {
  const [formData, setFormData] = useState([]);
  const fdata = (dt) => {
    setFormData((prev) => [...prev, dt]);
  };
  const onRemove = (id) => {
    setFormData((prev) => {
      return prev.filter((item, index) => index !== id);
    });
  };

  // console.log(formData);
  return (
    <>
      <Sign_Up_page fdt={fdata} />

      <div>
        {" "}
        {formData.map((itm, ind) => (
          <Card1
            onRemove={onRemove}
            pass={itm.password}
            email={itm.email}
            name={itm.fullname}
            user={itm.username}
            key={ind}
            id={ind}
          />
        ))}
      </div>
    </>
  );
}
