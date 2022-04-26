import React from "react";
import Table from "./table";
import Total from "./total";
import DateControls from "./date-controls";
import _ from "lodash";
import { Translate } from "react-redux-i18n";

let getTranslation = (key) => {
    return "Statement.tabs.statement." + key;
};

class Layout extends React.Component {
    constructor(){
        super();

        this.processPayments=this.processPayments.bind(this);
    }
    processPayments(payments){
        let res=[];
        let balance=0;
        let getBalance=(campaignBalance)=>{
            balance+=campaignBalance;
            return balance;
        };
        let campaignIDs=_.uniq(payments.map(c=>c.campaign._id));
        campaignIDs.forEach((campaignID,i)=>{
            let campaignPayments=payments.filter((p)=>p.campaign._id===campaignID);
            let payment=campaignPayments[0];
            let income=payments.filter(p=>p.type==="incoming").map(p=>Number(p.amount)).reduce((acc, p)=>acc+p,0);
            let expense=payments.filter(p=>p.type==="outgoing").map(p=>Number(p.amount)).reduce((acc, p)=>acc+p,0);
            res.push({
                _id: campaignID,
                index: (i+1),
                dates: {
                    from: new Date(_.min(campaignPayments.map(p=>Number(new Date())))),
                    to: new Date(_.max(campaignPayments.map(p=>Number(new Date()))))
                },
                brands: payment.campaign.information.brands,
                owner:payment.campaign.owner,
                manager:payment.campaign.manager,
                campaign: payment.campaign.information.name,
                income,
                expense,
                balance: getBalance(income-expense),
                payments:campaignPayments
            });
        });
        window.processedPayments=res;
        return res;
    }
    render() {
        let {payments, updateMonth, updateYear, updateAccounts, year, month, accounts} = this.props;
        window.payments=payments;
        let processPayments=this.processPayments(payments);
        return (
            <div>
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <div className="row">
                            <DateControls year={year}
                                          month={month}
                                          updateMonth={updateMonth}
                                          updateYear={updateYear}/>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Translate value={getTranslation("table.note")}/>
                            </div>
                            <Total list={payments}/>
                        </div>
                    </div>
                </div>

                <Table payments={processPayments}/>
            </div>
        );
    }
}

export default Layout;
