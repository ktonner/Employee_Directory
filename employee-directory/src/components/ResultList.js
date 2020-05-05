import React from "react";

function ResultList(props) {
  return (
    <table className="table">
      
  <thead>
    <tr>
      <th scope="col">Picture</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Email</th>
    </tr>
    </thead>
    <tbody>
      {props.results.map((result, i) => 
            <tr key={i}>
            <td><img href= {result.picture.thumnail} alt={result.name.first}/></td>
            <td>{(result.name.first)}</td>
            <td>{result.dob.age}</td>
            <td>{result.email}</td>
          </tr>
      )}
      </tbody>
      </table>
  );
  {console.log(props.results)}
}

export default ResultList;