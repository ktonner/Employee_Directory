import React,{ Component } from "react";


function ResultList(props) {


  return (
    <table className="table">
      
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Picture</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Age</th>
      <th scope="col">Email</th>
    </tr>
    </thead>
    <tbody>
      {props.results.map((result, i) => 
            <tr key={i+1}>
            <td>{i+1}</td>
            <td><img src= {result.picture.large} alt={result.name.first}/></td>
            <td>{(result.name.first)}</td>
            <td>{(result.name.last)}</td>
            <td>{result.dob.age}</td>
            <td>{result.email}</td>
          </tr>
      )}
      </tbody>
      </table>
  );
}

export default ResultList;