import React from "react";
import CustomeHook from "./httpCustomeHook";

const UseHttpCustomHook = () => {
  const [data] = CustomeHook("https://fakestoreapi.com/products");

  return (
    <div>
      {data?.map((x) => {
        return x.title;
      })}
    </div>
  );
};

export default UseHttpCustomHook;
