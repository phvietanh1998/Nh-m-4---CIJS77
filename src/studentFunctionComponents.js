import React, { useState } from "react";

function Student() {
  const [student, setStudent] = useState({ name: "Anh", age: 24 });
  const countAge = () => {
    setStudent((prevValue) => {
      return { ...prevValue, age: prevValue.age + 1 };
    });
  };
  const resetStudent = () => {
    setStudent({ name: "Anh", age: 24 });
  };
  return (
    <div>
      <div>
        <button onClick={resetStudent}>Reset ...</button>
        <button onClick={countAge}>Increase Age!</button>
      </div>
      <span>
        Hello! My name is {student.name} and I am {student.age} years old!
      </span>
    </div>
  );
}
export default Student;
