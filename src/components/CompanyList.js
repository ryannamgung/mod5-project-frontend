import React from "react";
import Company from './Company.js'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing.unit,
  },
});

const CompanyList = (props) => {
  // debugger
  const allcompanies = props.companies.map(company => {
    return <Company key={company.id} company={company}/>
  })

  return(
    <div>
      <br/>
      <center><div>{"SPONSORED CORPORATIONS"}</div></center>
      <ul>{allcompanies}</ul>
    </div>
  )
}

export default CompanyList
