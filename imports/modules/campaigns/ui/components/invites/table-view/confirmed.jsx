import React from "react";
import {Translate, I18n} from "react-redux-i18n";
import ListEmpty from "../../../../../core/ui/components/list-empty";


let getTranslation = (key) => {
    return "Campaigns.edit.tabs.invites." + key;
};

class CampaignTableViewActionsConfirmed extends React.Component {
    render() {
        let {confirmed, accounts, teamAttacks,currentInvite}= this.props;
        let content=(
            <div>
                <h1>Confirmed</h1>
            </div>
        );
        if(confirmed.length===0){
            content= <ListEmpty message={<Translate value={getTranslation("empty.messageConfirmed")}/>}/>
        }
        return (
            <div className="panel">
                <div className="panel-body">
                    {content}
                </div>
            </div>
        );
    }
}


export default CampaignTableViewActionsConfirmed;

