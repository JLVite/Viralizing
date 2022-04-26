import React from "react";
import List from "./list";
import Table from "./table";

class AccountItem extends React.Component {

    render() {

        let {account, view, toggleAccount, value, filters} = this.props;

        return view==="list"? (
            <List account={account} view={view} toggleAccount={toggleAccount} value={value} filters={filters}/>
        ):(
            <Table account={account} view={view} toggleAccount={toggleAccount} value={value} filters={filters}/>
        );
    }
}

export default AccountItem;