import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Payments from "../../containers/statement";

class Layout extends React.Component{
    constructor(){
        super();

        this.state={
            month: moment().month()+1,
            year: moment().year(),
            accounts:[]
        };

        this.updateAccounts=this.updateAccounts.bind(this);
        this.updateMonth=this.updateMonth.bind(this);
        this.updateYear=this.updateYear.bind(this);
    }
    updateMonth(month){
        this.setState({month});
    }
    updateYear(year){
        this.setState({year});
    }
    updateAccounts(accounts){
        this.setState({accounts});
    }
    render() {
        let {month, year, accounts} = this.state;
        return (
            <div className="page-content container-fluid statement">
                <Payments year={year}
                          month={month}
                          accounts={accounts}
                          updateMonth={this.updateMonth}
                          updateYear={this.updateYear}
                          updateAccounts={this.updateAccounts}/>
            </div>
        );
    }
}

export default Layout;
