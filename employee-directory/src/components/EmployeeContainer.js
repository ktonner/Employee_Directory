import React, { Component } from "react"
import API from "../utils/API"
import SearchForm from "./Search"
import ResultList from "./ResultList"
import "../index.css"

class EmployeeContainer extends Component {
    state = {
        employees: [],
        result: [],
        search: ""
    };

    componentDidMount() {
        API.getEmployees()
            .then(data => {
                // {console.log(data)}
                this.setState({employees: data.data.results})
                { console.log(this.state.employees) }
            })
            .catch(err => {
                console.log(err)
            })
        }

    render() {
        return (
            <div className="container">
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <ResultList results={this.state.employees} />
            </div>
        );
    }

}

export default EmployeeContainer