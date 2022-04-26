import React from "react";
import {Translate, I18n} from "react-redux-i18n";
import {BootstrapTable, TableHeaderColumn}  from "react-bootstrap-table";
import SocialAvatar from "../../../../../core/ui/components/social-avatar";
import InputSocialNetwork from "../../../../../core/ui/components/forms/input-social-network";


let getTranslation = (key) => {
    return "Campaigns.edit.tabs.invites.edit.form.list." + key;
};

class CampaignTableViewAccounts extends React.Component {
    constructor(){
        super();

        this.state={
            networks:["twitter", "facebook", "instagram"]
        };

        this.selectNetwork=this.selectNetwork.bind(this);
    }
    selectNetwork(networks){
        this.setState({networks})
    }
    render() {
        let {influencers, teamAttacks}=this.props;
	    let teamAttackMembers = [].concat.apply([], teamAttacks.map(t=>t.members));

        let list=[...teamAttackMembers, ...influencers];
        let {networks}=this.state;
        return (
            <div className="brands-list padding-20">
                <h4><Translate value={getTranslation("influencers")}/></h4>
                <div className="content">
                    <InputSocialNetwork input={{
                        value: this.state.networks,
                        onChange: this.selectNetwork
                    }}/>
                    <div className="list">
                        {list.filter(b=>networks.indexOf(b.network)!==-1).map((b)=>(
                            <span key={b._id} style={{margin:10}}>
                            <SocialAvatar
                                avatar={b.information.avatar}
                                network={b.network}
                                name={b.information.name}
                                size="50"
                                type={b.information.type}/>
                        </span>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}


export default CampaignTableViewAccounts;

