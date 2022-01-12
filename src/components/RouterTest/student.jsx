import React from "react";
import { Outlet } from "react-router-dom";

const Student = () => {
  return (
    <>
      <div>Student </div>
      <Outlet />
    </>
  );
};

export default Student;
