import React, { Component } from "react"
import API from "../utils/API"

class EmployeeContainer extends Component {
    state = {
        result: [],
        search: ""
    };

    componentDidMount() {
        API.getEmployees()
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    };

}

export default EmployeeContainer