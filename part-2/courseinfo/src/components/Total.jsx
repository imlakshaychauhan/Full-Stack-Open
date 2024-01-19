import { useEffect, useState } from "react";

const Total = ({ parts }) => {
  const sum = parts.reduce((acc, curr) => {
    acc += curr.exercises;
    return acc;
  }, 0);

  return <p> total of {sum} exercises </p>;
};

export default Total;
