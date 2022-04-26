import React from "react";
import { Translate, Localize } from "react-redux-i18n";

class Total extends React.Component{
    render() {
        let getTranslation = (key) => {
            return "Statement.tabs.statement." + key;
        };

        let {list}=this.props;
        let income=list.filter(l=>l.type==="incoming").map((l)=>Number(l.amount)).reduce((acc,v)=>acc+v,0);
        let expense=list.filter(l=>l.type==="outgoing").map((l)=>Number(l.amount)).reduce((acc,v)=>acc+v,0);
        return (
            <div className="row total-table col-md-6">
                <table>
                    <tbody>
                    <tr>
                        <td><h3><Translate value={getTranslation("table.headers.income")}/></h3></td>
                        <td width="200px">
                            <Localize value={income} options={{ minimumFractionDigits: 2, maximumFractionDigits: 2}}/> USD
                        </td>

                    </tr>
                    <tr>
                        <td><h3><Translate value={getTranslation("table.headers.expense")}/></h3></td>
                        <td width="200px">
                            <Localize value={expense} options={{ minimumFractionDigits: 2, maximumFractionDigits: 2}}/> USD
                        </td>
                    </tr>
                    <tr>
                        <td><h3><Translate value={getTranslation("table.headers.balance")}/></h3></td>
                        <td width="200px">
                            <Localize value={income-expense} options={{ minimumFractionDigits: 2, maximumFractionDigits: 2}}/> USD
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Total;
