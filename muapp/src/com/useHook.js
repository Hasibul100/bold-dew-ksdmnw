import React, { useState, useEffect } from "react";

export default function useHook(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("bb");
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(true);
      })
      .catch((err) => {
        console.error(err.message); // Log the entire error object
        setError(err.message); // Set a default error message
        setLoading(true);
        setData(null);
      });
  }, [data]);
  return { data, loading, error };
}
