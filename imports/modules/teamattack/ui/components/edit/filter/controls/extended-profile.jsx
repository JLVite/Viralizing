import React from 'react'
import {Translate, I18n} from "react-redux-i18n";
import InputNumberInterval from "../../../../../../core/ui/components/forms/input-number-interval";

class ProfileExtended extends React.Component{
    render(){
        let getTranslation=(key)=>{
            return "TeamAttack.edit."+key;
        };
        let {values, updateFilter}=this.props;
        return(
            <div>
                <div className="form-group">
                    <label htmlFor="informationName">
                        <Translate value={getTranslation("search.panel.influencer.actions.label")}/>
                    </label>
                    <select className="form-control" value={values.action_type} onChange={updateFilter("action_type")}>
                        <option value="all">{I18n.t(getTranslation("search.panel.influencer.all"))}</option>
                        <option value="post">{I18n.t(getTranslation("search.panel.influencer.action.values.post"))}</option>
                        <option value="profilePicture">{I18n.t(getTranslation("search.panel.influencer.action.values.profilePicture"))}</option>
                        <option value="coverPhoto">{I18n.t(getTranslation("search.panel.influencer.action.values.coverPhoto"))}</option>
                        {/*<option value="noPostHour">{I18n.t(getTranslation("search.panel.influencer.action.values.noPostHour"))}</option>
                        <option value="noPostDay">{I18n.t(getTranslation("search.panel.influencer.action.values.noPostDay"))}</option>*/}
                        <option value="share">{I18n.t(getTranslation("search.panel.influencer.action.values.share"))}</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="informationName">
                        <Translate value={getTranslation("search.panel.influencer.categories.label")}/>
                    </label>
                    <input type="text" readOnly={true} defaultValue="No Disponible" className="form-control"/>
                </div>

                <div className="form-group">
                    <label htmlFor="informationName">
                        <Translate value={getTranslation("search.panel.influencer.specialties.label")}/>
                    </label>
                    <input type="text" readOnly={true} defaultValue="No Disponible" className="form-control"/>
                </div>
            </div>
        )
    }
}

export default ProfileExtended;

