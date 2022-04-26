import React from "react";
import {Translate, I18n} from "react-redux-i18n";
import ListEmpty from "../../../../../core/ui/components/list-empty";
import Actions from "./actions";
import Options from "./options";
import Calendar from "../../summary/calendar";
import Confirmed from "./confirmed";
import Controls from "./controls";
import Total from "./total";
import Accounts from "./accounts";


let getTranslation = (key) => {
    return "Campaigns.edit.tabs.invites." + key;
};

class CampaignTableView extends React.Component {
    constructor(){
        super();

        this.state = {
            actionIndex: 0
        };

        this.goToAction=this.goToAction.bind(this);
    }
    goToAction(action){
        let component=this;
        return function(e){
            let val;
            if(action==="goTo"){
                val=Number(e.target.value);
            }
            if(action==="previous"){
                if(component.state.actionIndex===0) return;
                val=component.state.actionIndex-1;
            }
            if(action==="next"){
                if(component.state.actionIndex===(component.props.invites.length-1)) return;
                val=component.state.actionIndex+1;
            }
            component.setState({actionIndex:val});
        }
    }
    render() {
        let {invites, campaign, hasTotal, hasAccounts, isSummary}= this.props;
        console.log('invites', invites)
        if(invites.length===0){
            return (
                <ListEmpty message={<Translate value={getTranslation("empty.message")}/>}/>
            )
        }
        let {actionIndex}=this.state;
        let currentInvite=invites[actionIndex];

        return (
            <div className="row">
                <div className={(!isSummary)?"col-md-6":"col-md-12"}>
                    {hasAccounts && (
                        <Accounts influencers={currentInvite.influencers}
                                  teamAttacks={currentInvite.teamAttacks}/>
                    )}
                    <div className="panel">
                        <div className="panel-body">
                            <Actions invite={currentInvite}/>
                            <Controls invites={invites}
                                             goToAction={this.goToAction}
                                             actionIndex={actionIndex}/>
                        </div>
                    </div>
                    <Options invite={currentInvite} actionIndex={actionIndex}/>
                    {hasTotal && (
                        <Total currentInvite={currentInvite}/>
                    )}
                </div>
                {(!isSummary) && (
                    <div className="col-md-6">
                        <Confirmed inviteID={currentInvite._id} confirmed={[]}/>

                        <Calendar campaignID={campaign._id}/>
                    </div>
                )}

            </div>
        );
    }
}


export default CampaignTableView;

