import React from "react";
import { useParams } from "react-router-dom";

const StudentAdd = () => {
  let { id } = useParams();
  return <div>student Add : {id}</div>;
};

export default StudentAdd;
