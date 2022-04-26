import React from "react";
import {Translate} from "react-redux-i18n";
import {Field} from "redux-form";
import AccountSearch from "../../../../../../../core/ui/components/forms/account-search";
import InputTeamAttack from "../../../form/input-teamAttack";

class ActionInfluencers extends React.Component {
    constructor() {
        super();

        this.searchChange=this.searchChange.bind(this);
    }
    searchChange(value){
        //console.log("SEARCH VALUE", value);
        this.props.updateInviteValue("influencers")({
            target: {value}
        });
    }
    render() {
        let {collaborators, currentInvite}=this.props;
        let getTranslation = (key) => {
            return "Campaigns.edit.tabs.invites.edit.form." + key;
        };
        return (
            <div>
                <div className="form-group">
	                <InputTeamAttack input={{onChange:this.searchChange, value:currentInvite.influencers||[]}}  name="influencers" label={<Translate value={getTranslation("accounts")}/>}/>
                </div>
            </div>
        )
    }
}

export default ActionInfluencers;
