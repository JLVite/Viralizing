import React from "react";
import {Translate, I18n, Localize} from "react-redux-i18n";
import SocialAvatar from "../../../../../../core/ui/components/social-avatar";
import {isoLangs} from "../../../../../../../translations";

class AccountItem extends React.Component {
    constructor(){
        super();

        this.state={
            expanded:false
        };

        this.toggleExtra=this.toggleExtra.bind(this);
    }
    toggleExtra(e){
        e.stopPropagation();
        let newState={...this.state};
        newState.expanded=!newState.expanded;
        this.setState(newState);
    }
    render(){
        let getTranslation = (key) => {
            return "TeamAttack.edit.search.results.results.helpers." + key;
        };
        function followerFormatter(num) {
            num=Number(num);
            return num > 999 ? (num/1000).toFixed(1) + 'K' : (num>999999 ? (num/1000000).toFixed(1) + 'M' :num)
        }
        let {account, toggleAccount, value, view, filters}=this.props;
        return (
            <tr onClick={toggleAccount(account)}
                className={(value.filter(a=>a._id===account._id)[0] ? "active" : "")}>
                <td width="200px">
                    <div className="icon"><i className={"social-icon " + account.network}/></div>
                </td>
                <td>
                    <SocialAvatar avatar={account.information.avatar} network={account.network}
                                  name={(account.information.name || "") + " " + (account.information.lastName || "")}
                                  size="50"/>
                    <div className="content">
                        <div className="title">
                            {(account.information.name || "") + " " + (account.information.lastName || "")}
                        </div>
                        <div className="location">
                            {account.information.country}
                        </div>
                    </div>
                </td>
                <td>
                    {account.information.country}
                </td>
                <td>
                    {account.information.city||"-"}
                </td>
                <td>
                    {isoLangs[account.information.language].name}
                </td>
                <td>
                    {moment().diff(new Date(account.information.birthDate),"years")}
                </td>
                <td>
                    {account.information.gender}
                </td>
                <td>
                    {account.information.sexualOrientation||"-"}
                </td>
                <td>
                    {account.information.maritalStatus||"-"}
                </td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                    {account.information.categories.join(",")||"-"}
                </td>
                <td>
                    {account.information.specialties.join(",")||"-"}
                </td>
                <td>
                    <Localize value={Number(account.pricing[filters.action_type])||0}
                              options={{ minimumFractionDigits: 0, maximumFractionDigits: 2}}/> USD
                </td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
        );
    }
}

export default AccountItem;