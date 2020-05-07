import React, { Component } from "react"
import API from "../utils/API"
import SearchForm from "./Search"
import ResultList from "./ResultList"
import "../index.css"
import Alert from "./Alert"

class EmployeeContainer extends Component {
    state = {
        employees: [],
        filtered: [],
        search: ""
    };

    handleInputChange = event => {
        // Getting the input and setting it to search dynamically
        this.setState({ search: event.target.value })
        //filter the array of employees by search
        const searchString = (this.state.search).toLowerCase();
        const oldList = this.state.employees
        const newList = oldList.filter(employee => {
            return ((employee.name.first.toLowerCase()).includes(searchString) ||
                (employee.name.last.toLowerCase()).includes(searchString)
            )
        })
        this.setState({ filtered: newList })
        console.log(newList)
        if(this.state.filtered.length < 1){
            let array = this.state.employees
            this.setState({filtered: array})
        }
    };
    
    componentDidMount() {
        API.getEmployees()
            .then(data => {
                // {console.log(data)}
                this.setState({ employees: data.data.results })
                this.setState({ filtered: data.data.results })
                { console.log(this.state.employees) }
            })
            .catch(err => {
                console.log(err)
            })
    };

 

    renderPage = () => {
        if (this.state.filtered.length > 0){
        return (
            <div className="container">
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    onChange={this.handleInputChange}
                    onClick={this.handleInputChange}
                />
                <ResultList results={this.state.filtered} />
            </div>
        );
    }
    else{
        return (
            <div className="container">
            <SearchForm
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                onChange={this.handleInputChange}
                onClick={this.handleInputChange}
            />
        <Alert></Alert>
        <ResultList results={this.state.filtered} />
        </div>
        )
    }
    }

    render(){
        return(
            <div>
        {this.renderPage()}
        </div>
        )
    }
}

export default EmployeeContainer