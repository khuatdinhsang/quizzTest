import React from "react";
import parse from "html-react-parser";
const Test1 = ({ data }) => {
  console.log(data);
  return <div>{parse(data)}</div>;
};

export default Test1;
