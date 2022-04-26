import React from "react";
import {Translate, Localize, I18n} from "react-redux-i18n";
import {BootstrapTable, TableHeaderColumn}  from "react-bootstrap-table";
import SocialAvatar from "../../../../core/ui/components/social-avatar";

const renderManager = function (cell, row) {   // String example
    return (
        <div>
            <SocialAvatar avatar={cell.profile.avatar} name={cell.profile.name} size="50"/>
            <div className="icon-label">
                {cell.profile.name + " " + cell.profile.lastName}
            </div>
        </div>
    );
};

const renderDate = function(cell, row) {   // String example
    return (
        moment(new Date(cell)).format("DD/MM/YY")
    );
};

const renderNetwork = function (cell, row) {   // String example
    return (
        <div>
            <div className="icon">
                <i className={"social-icon " + cell}/>
            </div>
            <span className="icon-label">{cell}</span>
        </div>
    );
};

const isBrand = function (cell, row) {   // String example
    return <i className={"icon circle brand " + (cell ? "wb-check" : "wb-close not")} aria-hidden="true"/>;
};

const isInfluencer = function (cell, row) {   // String example
    return <i className={"icon circle influencer " + (cell ? "wb-check" : "wb-close not")}
              aria-hidden="true"/>;
};

const currency = function (cell, row) {   // String example
    return (
        <span>
            <Localize value={cell}
                      options={{
                          style: 'currency',
                          currency: 'USD',
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                      }}/> USD
        </span>
    );
};

class BrokerList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sortName: undefined,
            sortOrder: undefined
        };

        this.onSortChange = this.onSortChange.bind(this);
    }

    onSortChange(sortName, sortOrder) {
        this.setState({
            sortName,
            sortOrder
        });
    }

    render() {
        let data = [{
            date: new Date(),
            manager: Meteor.user()||{profile:{name:null,lastName:null, avatar: null}},
            network: "facebook",
            brand: true,
            influencer: true,
            actions: 12,
            income: 1234345,
            profit: 24686.9
        }];
        let getTranslation = (key) => {
            return "Statement.tabs.broker.tabs.broker." + key;
        };
        const options = {
            sortName: this.state.sortName,
            sortOrder: this.state.sortOrder,
            onSortChange: this.onSortChange,
            noDataText: I18n.t(getTranslation("table.empty"))
        };
        return (
            <div className="">
                <div className="ibol-table">
                    <BootstrapTable data={data} options={ options } pagination search
                                    searchPlaceholder={I18n.t(getTranslation("table.search"))}>
                        <TableHeaderColumn isKey dataField='date' dataFormat={ renderDate } dataAlign='center'
                                           width="140px">
                            <Translate value={getTranslation("table.headers.date")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='manager' dataFormat={renderManager} dataSort={ true }>
                            <Translate value={getTranslation("table.headers.manager")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='network' dataAlign='center' dataFormat={ renderNetwork }
                                           dataSort={ true } width="180px">
                            <Translate value={getTranslation("table.headers.network")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='brand' dataFormat={ isBrand } dataAlign='center'
                                           width="160px"><Translate
                            value={getTranslation("table.headers.brand")}/></TableHeaderColumn>
                        <TableHeaderColumn dataField='influencer' dataFormat={ isInfluencer } dataAlign='center'
                                           width="160px"><Translate value={getTranslation("table.headers.influencer")}/></TableHeaderColumn>
                        <TableHeaderColumn dataField='actions' dataAlign='center' width="110px">
                            <Translate value={getTranslation("table.headers.invites")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='income' dataFormat={ currency } dataAlign='center'
                                           width="180px"><Translate
                            value={getTranslation("table.headers.income")}/></TableHeaderColumn>
                        <TableHeaderColumn dataField='profit' dataFormat={ currency } dataAlign='center'
                                           width="180px"><Translate
                            value={getTranslation("table.headers.profit")}/></TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        );
    }
}

export default BrokerList;