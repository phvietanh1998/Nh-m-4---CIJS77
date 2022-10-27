import React from "react";

class StudentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Anh", age: 24 };
    this.countAge = this.countAge.bind(this);
    this.resetStudent = this.resetStudent.bind(this);
  }
  countAge() {
    this.setState((prevValue) => {
      return { ...prevValue, age: prevValue.age + 1 };
    });
  }

  resetStudent() {
    this.setState({ name: "Anh", age: 24 });
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.resetStudent}>Reset ...</button>
          <button onClick={this.countAge}>Increase Age!</button>
        </div>
        <span>
          Hello! My name is {this.state.name} and I am {this.state.age} years
          old!
        </span>
      </div>
    );
  }
}
export default StudentClass;
