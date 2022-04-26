import React from "react";
import {graphql} from "react-apollo";
import {connect} from "react-redux";
import Loading from "../../../core/ui/components/loading";
import Saving from "../../../core/ui/components/saving";
import EditTeamAttack from "../layouts/edit";
import {createContainer} from "meteor/react-meteor-data";
import gql from "graphql-tag";
import notie from "notie";
import { I18n } from "react-redux-i18n";

let getTranslation=(key)=>{
    return "Campaigns.edit.messages."+key;
};

class EditContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            saving: "saved"
        };

        this.saveCampaign=this.saveCampaign.bind(this);
    }
    componentDidMount() {
        this.savedData = JSON.stringify(this.props.teamAttack);
        let component = this;
        this.saveInterval=setInterval(function () {
            if (component.props.form && component.props.form.values) {
                component.saveCampaign(component.props.form.values, true);
            }
        }, 5000);
    }
    componentWillUnmount(){
        clearInterval(this.saveInterval);
    }
    saveCampaign(data, silent){
        if(silent && typeof(silent) === "boolean") {
            silent = true;
        } else {
            silent = false;
        }

        if (silent && this.savedData === JSON.stringify(data)) {
            this.setState({saving: "saved"});
            return
        }

        this.setState({saving: "saving"});
        this.savedData = JSON.stringify(data);
        let component=this;

        Meteor.call("teamAttack-save",data,function(err,res){
            if(err){
                if(err.error===500){
                    err.error = "Failed to create post.";
                }
                console.log("ERROR",err);
                notie.alert(3,err.reason||err.error,3);
                return
            }
            component.setState({saving: "saved"});
            if (!silent) {
                notie.alert(1,I18n.t(getTranslation("saved")),3);
            }
            component.props.refetch()
            //console.log("SERVER_SAVE_POSTS_RESPONSE",res);
        });
    }
    render() {
        let {teamAttack,teamAttacksOwn, loading, history, refetch}=this.props;
        teamAttacksOwn=teamAttacksOwn||[];
        let teamAttacks=teamAttacksOwn.filter(t=>t.id!==teamAttack._id);
        return (
            <div>
                {loading ? <Loading/> :
                    <EditTeamAttack initialValues={teamAttack}
                                    refetch={refetch}
                                    history={history}
                                    teamAttacks={teamAttacks}
                                    onSubmit={this.saveCampaign}/>}
                <Saving state={this.state.saving}/>
            </div>
        )
    }
}

const QUERY = gql`
    query ($_id: String!){
        teamAttack(_id:$_id){
            _id,
            name,
            type,
            owner {
                _id
            },
            members {
                _id
                suspended
                type
                active
                delete
                network
                groups
                campaignsCount
            }
        }
        teamAttacksOwn{
            _id,
            owner {
                _id
            },
            members {
                _id,
                network,
                information{
                    name,
                    lastName,
                    avatar,
                    birthDate,
                    country,
                    gender
                }
            },
            name,
            type
        }
    }
`;

const withData = graphql(QUERY, {
    props: ({data: {error, loading, teamAttack, teamAttacksOwn, refetch}}) => {
        //console.log("TA_ERROR",error);
        if (loading) return {loading: true};
        if (error) return {hasErrors: true};
        return {
            loading,
            teamAttack,
            teamAttacksOwn,
            refetch,
        };
    },
    options: (ownProps) => (
        {
            variables: {
                _id: ownProps.params.teamAttackID,
                query:""
            }
        }
    ),
});

const EditContainerWithData = withData(EditContainer);

export default connect(state => {
    return {
        form: state.form["teamAttack-edit"]
    }
})(EditContainerWithData)