import React from "react";
import {Translate} from "react-redux-i18n";

class ActionTimeWithout extends React.Component {
    render() {
        let getTranslation = (key) => {
            return "Campaigns.edit.tabs.invites.edit.form.actions.time." + key;
        };
        let {action,updateActionValue,type}=this.props;
        let helper="hours";
        if(type==="dayNoPost"){
            helper="days";
        }
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="informationName">
                        <Translate value={getTranslation("label")}/>
                    </label>
                    <div className="input-group">
                        <input type="text" className="form-control" onChange={updateActionValue("message")} value={action.message||""}/>
                            <div className="input-group-addon"><Translate value={getTranslation("helpers."+helper)}/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ActionTimeWithout;
