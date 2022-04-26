import React from "react";
import {Translate} from "react-redux-i18n";

class ActionFooter extends React.Component {
    render() {
        let getTranslation = (key) => {
            return "Campaigns.edit.tabs.invites.edit.form.footer." + key;
        };
        let {invites, goToAction, createInvite, actionIndex}= this.props;
        return (
            <div className="row margin-bottom-25">
                <div className="col-md-8">
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
                <div className="col-md-4">
                    <a className="btn btn-default pull-right" onClick={createInvite}>
                        <Translate value={getTranslation("new")}/>
                    </a>
                </div>
            </div>
        )
    }
}

export default ActionFooter;
