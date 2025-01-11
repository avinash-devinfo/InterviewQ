import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [companies, setCompanies]= useState([]);

    useEffect(() => {
      axios.get('http://localhost:8084/companies/delhi')
        .then(response => {
        setCompanies(response.data);
    })
    .catch(error => {
      console.error('error fetchingcompanies:',error);
    });
    },[]);

    return (
      <div>
    <h1>Companies with 2 or more Branches in Delhi</h1>
    <ul>
      {companies.map(company => (
        // <li key = { company.companyId}>{company.name}</li>/
        <li>{company}</li>
      ))}
    </ul>

      </div>
);

}
export default App;
