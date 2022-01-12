import React, { useEffect, useState } from "react";

const HttpRequestComponent = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    debugger;
    var response = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
    );
    setData(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data?.map((x) => {
        return x.title;
      })}
    </div>
  );
};

export default HttpRequestComponent;
