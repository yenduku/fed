import React, { Component } from "react";
class Arrofobj extends Component {
  // StudentData array as a class field
  StudentData = [
    { sno: 101, name: "Satish", Branch: "CSE" },
    { sno: 102, name: "Rahul", Branch: "ECE" },
    { sno: 103, name: "Ram", Branch: "IT" }
  ];

  render() {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody>
            {this.StudentData.map((student) => (
              <tr key={student.sno}>
                <td>{student.sno}</td>
                <td>{student.name}</td>
                <td>{student.Branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Arrofobj;
