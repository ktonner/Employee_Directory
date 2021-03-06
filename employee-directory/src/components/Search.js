import React from 'react';
import '../App';

function SearchForm(props) {
    return (
<div className="input-group mb-3">
  <input type="text" 
  className="form-control" 
  id="search" 
  name="search"
  value={props.search}
  placeholder="Employee Name" 
  aria-label="Recipient's username" 
  aria-describedby="button-addon2"
  onChange = {props.onChange}/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
  </div>
</div>
    )
}

export default SearchForm;