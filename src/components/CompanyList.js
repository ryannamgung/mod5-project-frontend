import React from "react";
import Company from './Company.js'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import {fetchCompanies} from "../action.js"

const styles = theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing.unit,
  },
});


class CompanyList extends React.Component {
  componentDidMount(){
    this.props.fetchCompanies()
  }

  render(){
    const allcompanies = this.props.companies.map(company => {
      return <Company key={company.id} company={company}/>
    })

    return(
      <div>
        <br/>
        <ul>{allcompanies}</ul>
      </div>
    );}
  }


function mapStateToProps(state){
  return {
    companies: state.companyReducer.companies,
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchCompanies: () => dispatch(fetchCompanies()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
