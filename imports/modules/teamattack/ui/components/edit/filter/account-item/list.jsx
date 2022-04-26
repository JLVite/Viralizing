import React from "react";
import {Localize, Translate} from "react-redux-i18n";
import {Link} from "react-router";
import SocialAvatar from "../../../../../../core/ui/components/social-avatar";

class AccountItem extends React.Component {
    constructor() {
        super();

        this.state = {
            expanded: false
        };

        this.toggleExtra = this.toggleExtra.bind(this);
    }

    toggleExtra(e) {
        e.stopPropagation();
        let newState = {...this.state};
        newState.expanded = !newState.expanded;
        this.setState(newState);
    }

    render() {
        let getTranslation = (key) => {
            return "TeamAttack.edit.search.results.results.helpers." + key;
        };

        function followerFormatter(num) {
            num = Number(num);
            return num > 999 ? (num / 1000).toFixed(1) + 'K' : (num > 999999 ? (num / 1000000).toFixed(1) + 'M' : num)
        }

        let {account, toggleAccount, value, view, filters} = this.props;
        return (
            <div className={view === "list" ? "col-md-4" : "col-md-12"}>
                <div className="panel" onClick={toggleAccount(account)}>
                    <div
                        className={"panel-body container-fluid team-attack-profile " + (value.filter(a => a._id === account._id)[0] ? "active" : "")}>
                        <div className="selected">
                            <i className="icon wb-check"/>
                        </div>
                        <div className="header">
                            <div className="avatar">
                                <SocialAvatar avatar={account.information.avatar} network={account.network}
                                              name={(account.information.name || "") + " " + (account.information.lastName || "")}
                                              size="50"/>
                            </div>
                            <div className="content">
                                <div className="title">
                                    {(account.information.name || "") + " " + (account.information.lastName || "")}
                                </div>
                                <div className="location">
                                    {account.information.country}
                                </div>
                            </div>
                            <Link  onClick={(event) => {event.preventDefault(); 
                                window.open(`/accounts/view/${account._id}`);}} className="view-profile">
                                <i className="fa fa-eye" aria-hidden="true"/>
                            </Link>
                        </div>
                        <div className="content">
                            {filters && (
                                <div className="cost">
                                    <div className="label">
                                        <Translate
                                            value={getTranslation(`cost.${filters.action_type}`)}/>
                                    </div>
                                    <div className="price">
                                        <span>
                                            <Localize value={Number(account.pricing[filters.action_type]) || 0}
                                                      options={{
                                                          minimumFractionDigits: 0,
                                                          maximumFractionDigits: 2
                                                      }}/> USD
                                        </span>
                                    </div>
                                </div>
                            )}

                            <div className="followers">
                                <div className="content">
                                    <div
                                        className="count"> {account.statistics ? followerFormatter(account.statistics.followers) : "-"}</div>
                                    <div className="label">
                                        <Translate
                                            value={getTranslation("followers")}/>
                                    </div>
                                </div>
                                <div className="icon"><i className={"social-icon " + account.network}/>
                                </div>
                            </div>
                        </div>
                        <div className={"more " + (this.state.expanded ? "expanded" : "")} onClick={this.toggleExtra}
                             style={{cursor: "pointer"}}>
                            {this.state.expanded ? "" : ""} <i className="fa fa-angle-double-down" aria-hidden="true"/>
                        </div>
                        {this.state.expanded ? (
                            <div className="extra">
                                <table className="price-table">
                                    <tbody>
                                    <tr>
                                        <td><Translate value={getTranslation("cost.post")}/></td>
                                        <td>
                                            {account.pricing.post ? (
                                                <span>
                                                            <Localize value={Number(account.pricing.post) || 0}
                                                                      options={{
                                                                          minimumFractionDigits: 0,
                                                                          maximumFractionDigits: 2
                                                                      }}/> USD
                                                        </span>
                                            ) : "-"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><Translate value={getTranslation("cost.profilePicture")}/></td>
                                        <td>
                                            {account.pricing.profilePicture ? (
                                                <span>
                                                            <Localize
                                                                value={Number(account.pricing.profilePicture) || 0}
                                                                options={{
                                                                    minimumFractionDigits: 0,
                                                                    maximumFractionDigits: 2
                                                                }}/> USD
                                                        </span>
                                            ) : "-"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><Translate value={getTranslation("cost.coverPhoto")}/></td>
                                        <td>
                                            {account.pricing.coverPhoto ? (
                                                <span>
                                                            <Localize value={Number(account.pricing.coverPhoto) || 0}
                                                                      options={{
                                                                          minimumFractionDigits: 0,
                                                                          maximumFractionDigits: 2
                                                                      }}/> USD
                                                        </span>
                                            ) : "-"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><Translate value={getTranslation("cost.noPost.hour")}/></td>
                                        <td>
                                            {account.pricing.noPostHour ? (
                                                <span>
                                                            <Localize value={Number(account.pricing.noPostHour) || 0}
                                                                      options={{
                                                                          minimumFractionDigits: 0,
                                                                          maximumFractionDigits: 2
                                                                      }}/> USD
                                                        </span>
                                            ) : "-"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><Translate value={getTranslation("cost.noPost.day")}/></td>
                                        <td>
                                            {account.pricing.noPostDay ? (
                                                <span>
                                                            <Localize value={Number(account.pricing.noPostDay) || 0}
                                                                      options={{
                                                                          minimumFractionDigits: 0,
                                                                          maximumFractionDigits: 2
                                                                      }}/> USD
                                                        </span>
                                            ) : "-"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><Translate value={getTranslation("cost.share")}/></td>
                                        <td>
                                            {account.pricing.share ? (
                                                <span>
                                                            <Localize value={Number(account.pricing.share) || 0}
                                                                      options={{
                                                                          minimumFractionDigits: 0,
                                                                          maximumFractionDigits: 2
                                                                      }}/> USD
                                                        </span>
                                            ) : "-"}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        ) : ""}
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountItem;