import React from "react";

const Question = ({ info, title }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{info}</p>
    </div>
  );
};

export default Question;
