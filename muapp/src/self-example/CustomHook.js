import React, { useEffect, useState } from "react";

export default function NotFound() {
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState(49);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [amount]);
  const lod = () => {
    setAmount(amount + 50);
  };
  return (
    <>
      {data &&
        data.map((item, index) => {
          if (index > amount) return null;
          return (
            <div>
              <h5>
                {"id " + item.id + ": "}
                {item.title}
              </h5>
            </div>
          );
        })}
      <button onClick={lod}>Load more</button>
    </>
  );
}
