import React from "react";
import {I18n} from "react-redux-i18n";

class ActionPost extends React.Component {
    render() {
        let getTranslation = (key) => {
            return "Campaigns.edit.tabs.invites.edit.form.actions.post." + key;
        };
        let {action,updateActionValue}=this.props;
        return (
            <div className="action-post">
                <textarea onChange={updateActionValue("message")}
                          placeholder={I18n.t(getTranslation("placeholder"))}
                          value={action.message||""}/>
                {action.media && (
                    <div className="media" style={{backgroundImage:`url(${action.media})`,
                                                   backgroundRepeat:'no-repeat',
                                                   backgroundSize: '160px 160px',
                                                   backgroundPosition: 'center'}}>
                        {/* <img src={action.media} alt=""/> */}
                    </div>
                )}
            </div>
        )
    }
}

export default ActionPost;
