import React from "react";

import Css from "./Card.module.css";
export default function Card1(props) {
  const { id, onRemove } = props;
  const Remove = (id) => {
    onRemove(id);
  };
  return (
    <>
      <div>
        <h2>{"Name : " + props.name}</h2>
        <h3> {"UserName : " + props.user}</h3>
        <h3> {"Email : " + props.email}</h3>
        <h3> {"Password : " + props.pass}</h3>
        <button type="button" onClick={() => Remove(id)} id={props.id}>
          Remove me
        </button>
      </div>
    </>
  );
}

// // import React from "react";

// // export default function Card1(props) {
// //   const removeElement = (elementToRemove) => {
// //     setElements((prevElements) => prevElements.filter((el) => el !== elementToRemove));

// //   return (
// //     <div id={props.key}>
// //       <h2>{"Name : " + props.name}</h2>
// //       <h3> {"UserName : " + props.user}</h3>
// //       <h3> {"Email : " + props.email}</h3>
// //       <h3> {"Password : " + props.pass}</h3>
// //       <button onClick={() => removeElement(props.key)}>Remove</button>

// //     </div>
// //   );
// // // }
// // import React from "react";

// // const Card1 = (props) => {
// //   const removeElement = (elementToRemove) => {
// //     // Implement the logic to remove the element from the list using props.onRemove or any other approach
// //   };

// //   return (
// //     <div id={props.key}>
// //       <h2>{"Name : " + props.name}</h2>
// //       <h3> {"UserName : " + props.user}</h3>
// //       <h3> {"Email : " + props.email}</h3>
// //       <h3> {"Password : " + props.pass}</h3>
// //       <button onClick={() => removeElement(props.key)}>Remove</button>
// //     </div>
// //   );
// // };

// // export default Card1;
// import React from "react";

// function removeElement(elementToRemove) {
//   const updatedList = [...this.state.list].filter(
//     (item) => item.key !== elementToRemove,
//   );
//   this.setState({ list: updatedList });
// }

// const Card1 = (props) => {
//   const removeElement = (elementToRemove) => {
//     props.onRemove && props.onRemove(elementToRemove);

//     // Update the list state if managing the state in this component
//     const updatedList = [...props.list].filter(
//       (item) => item.key !== elementToRemove,
//     );
//     props.setList(updatedList);
//   };

//   return (
//     <div id={props.key}>
//       <h2>{"Name : " + props.name}</h2>
//       <h3> {"UserName : " + props.user}</h3>
//       <h3> {"Email : " + props.email}</h3>
//       <h3> {"Password : " + props.pass}</h3>
//       <button onClick={() => removeElement(props.key)}>Remove</button>
//     </div>
//   );
// };

// export default Card1;
