import React from "react";
import {Translate} from "react-redux-i18n";

class ActionShare extends React.Component {
    render() {
        let {action,updateActionValue}=this.props;
        let getTranslation = (key) => {
            return "Campaigns.edit.tabs.invites.edit.form.actions.share." + key;
        };
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="informationName">
                        <Translate value={getTranslation("label")}/>
                    </label>
                    <input type="text" className="form-control" onChange={updateActionValue("message")} value={action.message||""}/>
                </div>
            </div>
        )
    }
}

export default ActionShare;
