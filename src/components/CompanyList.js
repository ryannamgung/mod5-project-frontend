import React from "react";
import Company from './Company.js'

const CompanyList = (props) => {
  // debugger
  const allcompanies = props.companies.map(company => {
    return <Company key={company.id} company={company}/>
  })

  return(
    <div>
      <h2>Sponsored Corporations</h2>
      <ul>{allcompanies}</ul>
    </div>
  )
}

export default CompanyList
