import React from "react";
import {I18n, Localize, Translate} from "react-redux-i18n";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import SocialAvatar from "../../../../../core/ui/components/social-avatar";


let getTranslation = (key) => {
    return "Statement.tabs.statement.payments." + key;
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



const renderIncome = function (cell, row) {   // String example
    return row.type === "incoming" ? (
        <span>
            <Localize value={cell} options={{
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }}/> USD
        </span>
    ) : "-"
};

const renderExpense = function (cell, row) {   // String example
    return row.type === "outgoing" ? (
        <span>
            <Localize value={cell} options={{
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }}/> USD
        </span>
    ) : "-"
};


const renderOwner = function (cell, row) {   // String example
    if(!cell) return <span>"-"</span>;
    return (
        <div>
            <SocialAvatar avatar={cell.owner.profile.avatar} name={cell.owner.profile.name} size="50"/>
            <div className="icon-label">
                {cell.owner.profile.name + " " + cell.owner.profile.lastName}
            </div>
        </div>
    );
};

const renderManager = function (cell, row) {   // String example
    return (
        <div>
            <SocialAvatar avatar={cell.manager.profile.avatar} name={cell.manager.profile.name} size="50"/>
            <div className="icon-label">
                {cell.manager.profile.name + " " + cell.manager.profile.lastName}
            </div>
        </div>
    );
};


const renderNetwork = function(cell, row) {   // String example
    if(!cell.account) return "-";
    return (
        <div className="icon">
            <i className={"social-icon "+cell.account.network}/>
        </div>
    );
};

const renderInfluencer = function(cell, row) {   // String example
    console.log("RENDER_INFLUENCER", cell);
    return (
        <div>
            <SocialAvatar avatar={cell.information.avatar} name={cell.information.name} size="50" page={cell.type==="page"} network={cell.network}/>
            <div className="icon-label">
                {cell.information.name+" "+cell.information.lastName}
            </div>
        </div>
    );
};

const renderActionType = function(cell, row) {   // String example
    if(!cell.type) return "-";
    return (
        <div>
            {cell.type}
        </div>
    );
};

const renderActionMessage = function(cell, row) {   // String example
    if(!cell.message) return "-";
    return (
        <div>
            {cell.type}
        </div>
    );
};

const renderActionMedia = function(cell, row) {   // String example
    if(!cell.media) return "-";
    return (
        <div style={{padding:6}}>
            <img src={cell} alt="" style={{maxHeight: 100, maxWidth: "100%"}}/>
        </div>
    );
};

const renderActionTimeZone = function(cell, row) {   // String example
    return (
        <div>
            {moment.tz.guess()}
        </div>
    );
};

const renderActionDate = function(cell, row) {   // String example
    if(!cell.date) return "-";
    return (
        <div>
            {moment(new Date(cell.date)).format("DD/MM/YY")}
        </div>
    );
};

const renderActionTime = function(cell, row) {   // String example
    if(!cell.date) return "-";
    return (
        <div>
            {moment(new Date(cell.date)).format("HH:MM A")}
        </div>
    );
};

const renderActionHashtag = function(cell, row) {
    if(!cell.useHashtag) return "-";
    return <i className={"icon circle brand "+(cell?"wb-check":"wb-close not")} aria-hidden="true"/>;
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

class CampaignTable extends React.Component {
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
        let {data, type} = this.props;
        let list=data.payments;
        console.log("CAMPAIGN_PAYMENTS", data, type);
        const options = {
            sortName: this.state.sortName,
            sortOrder: this.state.sortOrder,
            onSortChange: this.onSortChange,
            noDataText: I18n.t(getTranslation("table.empty"))
        };
        let balance=0;
        let getBalance=(l)=>{
            balance+=((l.type==="outgoing"?-1:1)*Number(l.amount));
            return balance;
        };
        list = list.map((l, index) => Object.assign({}, l, {
            index: (index + 1),
            balance: getBalance(l)
        }));
        return (
            <div className="statement-table-breakdown">
                <div className="header">
                    <h1>
                        <Translate value={getTranslation("title")}/>
                    </h1>
                    <h2>
                        <Translate value={getTranslation(`type.${type}`)}/>
                    </h2>
                </div>
                <div className="row campaign">
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-4">
                                <Translate value={getTranslation("data.brands")}/>
                            </div>
                            <div className="col-md-8 value">
                                {renderBrands(data.brands)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Translate value={getTranslation("data.campaign")}/>
                            </div>
                            <div className="col-md-8 value">
                                {data.campaign}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Translate value={getTranslation("data.owner")}/>
                            </div>
                            <div className="col-md-8 value">
                                {renderOwner(data)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Translate value={getTranslation("data.manager")}/>
                            </div>
                            <div className="col-md-8 value">
                                {renderManager(data)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Translate value={getTranslation("data.actions")}/>
                            </div>
                            <div className="col-md-8 value">
                                {list.length}
                            </div>
                        </div>
                    </div>
                </div>

                <h3><Translate value={getTranslation(`table.title`)}/></h3>
                <div className="ibol-table">
                    <BootstrapTable data={list} options={options}>
                        <TableHeaderColumn isKey
                                           dataField='index'
                                           dataAlign='center'
                                           width="60px">
                            <Translate value={getTranslation("table.headers.index")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='campaign'
                                           dataAlign='center'
                                           dataFormat={renderOwner}
                                           width="200px">
                            <Translate value={getTranslation("table.headers.owner")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='campaign'
                                           dataAlign='center'
                                           dataFormat={renderManager}
                                           width="200px">
                            <Translate value={getTranslation("table.headers.manager")}/>
                        </TableHeaderColumn>




                        <TableHeaderColumn dataField='post'
                                           dataAlign='center'
                                           dataFormat={renderNetwork}
                                           width="120px">
                            <Translate value={getTranslation("table.headers.network")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='to'
                                           dataAlign='center'
                                           dataFormat={renderInfluencer}
                                           width="200px">
                            <Translate value={getTranslation("table.headers.influencer")}/>
                        </TableHeaderColumn>



                        <TableHeaderColumn dataField='post'
                                           dataAlign='center'
                                           dataFormat={renderActionType}
                                           width="200px">
                            <Translate value={getTranslation("table.headers.action")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='post'
                                           dataAlign='center'
                                           dataFormat={renderActionMessage}
                                           width="200px">
                            <Translate value={getTranslation("table.headers.message")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='post'
                                           dataAlign='center'
                                           dataFormat={renderActionMedia}
                                           width="200px">
                            <Translate value={getTranslation("table.headers.media")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='post'
                                           dataAlign='center'
                                           dataFormat={renderActionTimeZone}
                                           width="200px">
                            <Translate value={getTranslation("table.headers.timeZone")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='post'
                                           dataAlign='center'
                                           dataFormat={renderActionDate}
                                           width="200px">
                            <Translate value={getTranslation("table.headers.date")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='post'
                                           dataAlign='center'
                                           dataFormat={renderActionTime}
                                           width="200px">
                            <Translate value={getTranslation("table.headers.time")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='post'
                                           dataAlign='center'
                                           dataFormat={renderActionHashtag}
                                           width="200px">
                            <Translate value={getTranslation("table.headers.hashtag")}/>
                        </TableHeaderColumn>


                        <TableHeaderColumn dataField='paymentMethod'
                                           dataAlign='center'
                                           dataFormat={renderPaymentMethod}
                                           width="200px">
                            <Translate value={getTranslation("table.headers.payment")}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='amount'
                                           dataFormat={renderIncome}
                                           dataAlign='center'
                                           width="200px">
                            <Translate value={getTranslation("table.headers.income")}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='amount'
                                           dataFormat={renderExpense}
                                           dataAlign='center'
                                           width="200px">
                            <Translate value={getTranslation("table.headers.expense")}/>
                        </TableHeaderColumn>
                    </BootstrapTable>
                </div>

                <div className="total">
                    <div className="row">
                        <div className="col-md-8"></div>
                        <div className="col-md-2"><Translate value={getTranslation(`table.footer.income`)}/></div>
                        <div className="col-md-2">
                            <span>
                                <Localize value={data[type]} options={{
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }}/> USD
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8"></div>
                        <div className="col-md-2"><Translate value={getTranslation(`table.footer.commission`)}/></div>
                        <div className="col-md-2">
                            <span>
                                <Localize value={(data[type])*0.3} options={{
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }}/> USD
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8"></div>
                        <div className="col-md-2"><Translate value={getTranslation(`table.footer.total`)}/></div>
                        <div className="col-md-2">
                            <span>
                                <Localize value={(data[type])*0.7} options={{
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }}/> USD
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CampaignTable;