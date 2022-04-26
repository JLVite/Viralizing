import React from "react";
import {I18n, Localize, Translate} from "react-redux-i18n";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import SocialAvatar from "../../../../../core/ui/components/social-avatar";
import Modal from "react-modal";
import CampaignTable from "./campaign-payments";

let getTranslation = (key) => {
    return "Statement.tabs.statement." + key;
};

const renderPaymentMethod = function (cell, row) {   // String example
    let getCard = (card) => {
        switch (card) {
            case "Amex":
                return "https://s3.amazonaws.com/ibol-app-media/cards/card_amex.png";
            case "Visa":
                return "https://s3.amazonaws.com/ibol-app-media/cards/card_visa.png";
            case "MasterCard":
                return "https://s3.amazonaws.com/ibol-app-media/cards/card_masterCard.png";
            case "Discover":
                return "https://s3.amazonaws.com/ibol-app-media/cards/card_discover.png";
            case "DinersClub":
                return "https://s3.amazonaws.com/ibol-app-media/cards/card_dinersClub.png";
        }
    };
    return (
        <div>
            <img src={getCard(cell.brand)} alt={cell.brand} style={{height: 32, marginRight: 10}}/>
            - {cell.last4}
        </div>
    );
};

const renderCampaignName = function (cell, row) {   // String example
    return (
        <span>
            {cell || "-"}
        </span>
    );
};



const renderBalance = function (cell, row) {   // String example
    return (
        <span>
            <Localize value={cell} options={{
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }}/> USD
        </span>
    )
};

const renderName = function (cell, row) {   // String example
    return (
        <div>
            <SocialAvatar avatar={cell.avatar} name={cell.name} size="50" page={row.type === "page"}/>
            <div className="icon-label">
                {cell.name + " " + cell.lastName}
            </div>
        </div>
    );
};

const renderOwner = function (cell, row) {   // String example
    if(!cell) return <span>"-"</span>;
    return (
        <div>
            <SocialAvatar avatar={cell.profile.avatar} name={cell.profile.name} size="50"/>
            <div className="icon-label">
                {cell.profile.name + " " + cell.profile.lastName}
            </div>
        </div>
    );
};

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

const renderDate = function (cell, row) {   // String example
    return (
        <span>{moment(new Date(cell.from)).format("DD/MM/YY")} - {moment(new Date(cell.to)).format("DD/MM/YY")}</span>
    );
};

const renderBrands = function (cell, row) {
    return (
        <div>
            {cell.map((a,i) => (
                <div className="icon" key={i}>
                    <SocialAvatar avatar={a.information.avatar}
                                  network={a.network}
                                  name={a.information.name}
                                  size="50"
                                  type={a.information.type}/>
                </div>
            ))}
        </div>
    )
};


class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sortName: undefined,
            sortOrder: undefined,
            modalType: "income",
            modalData: null,
            modalIsOpen: false
        };

        this.onSortChange = this.onSortChange.bind(this);
        this.openModal=this.openModal.bind(this);
        this.closeModal=this.closeModal.bind(this);
    }

    onSortChange(sortName, sortOrder) {
        this.setState({
            sortName,
            sortOrder
        });
    }
    openModal(modalData, modalType) {
        let component=this;
        return function(){
            component.setState({modalIsOpen: true, modalData, modalType});
        }
    }

    closeModal() {
        this.setState({modalIsOpen: false, modalData: null, modalType:null});
    }
    render() {
        let {payments} = this.props;
        let {modalData, modalType}=this.state;
        const options = {
            sortName: this.state.sortName,
            sortOrder: this.state.sortOrder,
            onSortChange: this.onSortChange,
            noDataText: I18n.t(getTranslation("table.empty"))
        };
        /*
        let balance=0;
        let getBalance=(l)=>{
            balance+=((l.type==="outgoing"?-1:1)*Number(l.amount));
            return balance;
        };
        list = list.map((l, index) => Object.assign({}, l, {
            index: (index + 1),
            balance: getBalance(l)
        }));*/

        let {openModal}=this;
        const renderIncome = function (cell, row) {
            return cell ? (
                <span onClick={openModal(row, "income")} style={{cursor:"pointer"}}>
                    <Localize value={cell} options={{
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }}/> USD
                </span>
            ) : "-"
        };

        const renderExpense = function (cell, row) {
            return cell ? (
                <span onClick={openModal(row, "expense")} style={{cursor:"pointer"}}>
                    <Localize value={cell} options={{
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }}/> USD
                </span>
            ) : "-"
        };
        return (
            <div className="statement-table">
                <div className="ibol-table">
                    <BootstrapTable data={payments} options={options}>
                        <TableHeaderColumn isKey
                                           dataField='index'
                                           dataAlign='center'
                                           width="60px">
                            <Translate value={getTranslation("table.headers.index")}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='dates'
                                           dataFormat={renderDate}
                                           dataAlign='center'
                                           width="180px">
                            <Translate value={getTranslation("table.headers.dates")}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='owner'
                                           dataAlign='center'
                                           dataFormat={renderOwner}
                                           width="200px">
                            <Translate value={getTranslation("table.headers.owner")}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='manager'
                                           dataAlign='center'
                                           dataFormat={renderManager}
                                           width="200px">
                            <Translate value={getTranslation("table.headers.manager")}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='brands'
                                           dataAlign='center'
                                           dataFormat={renderBrands}
                                           width="200px">
                            <Translate value={getTranslation("table.headers.brands")}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='campaign'
                                           dataAlign='center'
                                           dataFormat={renderCampaignName}
                                           width="200px">
                            <Translate value={getTranslation("table.headers.campaign")}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='income'
                                           dataFormat={renderIncome}
                                           dataAlign='center'
                                           width="200px">
                            <Translate value={getTranslation("table.headers.income")}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='expense'
                                           dataFormat={renderExpense}
                                           dataAlign='center'
                                           width="200px">
                            <Translate value={getTranslation("table.headers.expense")}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='balance'
                                           dataFormat={renderBalance}
                                           dataAlign='center'
                                           width="200px">
                            <Translate value={getTranslation("table.headers.balance")}/>
                        </TableHeaderColumn>

                    </BootstrapTable>
                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    className="app-modal"
                    contentLabel="Campaign's Payments"
                >
                    <button className="close" onClick={this.closeModal}>
                        <i className="icon wb-close-mini" aria-hidden="true" />
                    </button>
                    <CampaignTable data={modalData}
                                   type={modalType}/>
                </Modal>
            </div>
        )
    }
}

export default Table;