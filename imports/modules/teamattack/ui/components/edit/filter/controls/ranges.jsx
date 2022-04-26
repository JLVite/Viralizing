import React from 'react'
import {Translate, I18n} from "react-redux-i18n";
import InputNumberInterval from "../../../../../../core/ui/components/forms/input-number-interval";

class Ranges extends React.Component{
    render(){
        let getTranslation=(key)=>{
            return "TeamAttack.edit."+key;
        };
        let {values, updateFilter}=this.props;
        return(
            <div>
                <div className="form-group">
                    <label htmlFor="informationName">
                        <Translate value={getTranslation("search.panel.influencer.likes.label")}/>
                    </label>
                    <InputNumberInterval input={{
                        value:values.influencer_likes,
                        onChange: updateFilter("influencer_likes")
                    }}/>
                </div>

                <div className="form-group">
                    <label htmlFor="informationName">
                        <Translate value={getTranslation("search.panel.influencer.followers.label")}/>
                    </label>
                    <InputNumberInterval input={{
                        value:values.influencer_followers,
                        onChange: updateFilter("influencer_followers")
                    }}/>
                </div>

                <div className="form-group">
                    <label htmlFor="informationName">
                        <Translate value={getTranslation("search.panel.influencer.views.label")}/>
                    </label>
                    <InputNumberInterval input={{
                        value:values.influencer_views,
                        onChange: updateFilter("influencer_views")
                    }}/>
                </div>

                <div className="form-group">
                    <label htmlFor="informationName">
                        <Translate value={getTranslation("search.panel.influencer.engagement.label")}/>
                    </label>
                    <InputNumberInterval input={{
                        value:values.influencer_engagement,
                        onChange: updateFilter("influencer_engagement")
                    }}/>
                </div>
            </div>
        )
    }
}

export default Ranges;

