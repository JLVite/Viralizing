import React from "react";
import {Translate} from "react-redux-i18n";
import InputDateTime from "../../../../../../../core/ui/components/forms/input-datetime";


class ActionControlsDeadline extends React.Component {
    render() {
        let {updateInviteValue,  currentInvite}= this.props;
        let getTranslation = (key) => {
            return "Campaigns.edit.tabs.invites.edit.form." + key;
        };
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group no-margin">
                        <label htmlFor="informationName">
                            <Translate value={getTranslation("deadline")}/>
                        </label>
                        <InputDateTime minDate={moment()} input={{onChange:(value)=>updateInviteValue("deadline")({target:{value}}), value: currentInvite.deadline}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ActionControlsDeadline;
