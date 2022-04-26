import React from "react";
import {Translate} from "react-redux-i18n";

class CampaignTableViewControls extends React.Component {
    render() {
        let getTranslation = (key) => {
            return "Campaigns.edit.tabs.invites.edit.form.footer." + key;
        };
        let {invites, goToAction, actionIndex}= this.props;
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="form-inline">
                        <Translate value={getTranslation("pagination.action")}/>    &nbsp;
                        <div className="form-group">
                            <select className="form-control" value={actionIndex} onChange={goToAction("goTo")}>
                                {invites.map((invite,i)=>(
                                    <option key={i} value={i}>{i+1}</option>
                                ))}
                            </select>
                        </div>
                        <Translate value={getTranslation("pagination.of")}/>    &nbsp;
                        &nbsp;
                        {invites.length}

                        <div className="btn-group pull-right" role="group">
                            <button type="button" className="btn btn-icon btn-default" onClick={goToAction("previous")}><i
                                className="fa fa-angle-left" aria-hidden="true"/></button>
                            <button type="button" className="btn btn-icon btn-default" onClick={goToAction("next")}><i
                                className="fa fa-angle-right" aria-hidden="true"/></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CampaignTableViewControls;
