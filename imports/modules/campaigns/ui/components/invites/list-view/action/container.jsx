import React from 'react';
import ActionForm from './action-form';
import OptionList from './option-list';
import Navigation from './action-navigation';
import ActionSpecs from './action-specs';
import {Translate, I18n} from "react-redux-i18n";


class CampaignListViewAction extends React.Component {
    render() {
        const {
            invites, tabIndex, currentInvite, actionIndex, deleteInviteOption, updateInviteValue,
            sendInvites, addInviteOption, goToAction, createInvite, refetch
        } = this.props;
        let getTranslation = (key) => {
            return "Campaigns.edit.tabs.invites.edit.tables.options." + key;
        }
            return (
                <div className="col-md-9">
                    <ActionForm
                        refetch={refetch}
                        tabIndex={tabIndex}
                        updateInviteValue={updateInviteValue}
                        addInviteOption={addInviteOption}
                        currentInvite={currentInvite}
                    />

                    <ActionSpecs invite={currentInvite}/>

                    <Navigation
                        invites={invites}
                        goToAction={goToAction}
                        createInvite={createInvite}
                        actionIndex={actionIndex}
                    />

                    <OptionList
                        invite={currentInvite}
                        deleteInviteOption={deleteInviteOption}
                        actionIndex={actionIndex}
                    />
                    <a className="btn btn-default pull-right" onClick={() => sendInvites(currentInvite)}>
                        <Translate
                        value={getTranslation("send")}/>
                    </a>
                </div>
            );
        }
    }


export default CampaignListViewAction;
