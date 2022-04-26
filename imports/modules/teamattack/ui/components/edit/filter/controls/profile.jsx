import React from 'react'
import {Translate, I18n} from "react-redux-i18n";
import InputSelect from "../../../../../../core/ui/components/forms/input-select";
import InputNumberInterval from "../../../../../../core/ui/components/forms/input-number-interval";
import  { isoLangs }  from "../../../../../../../translations";
import _ from "lodash";

class Profile extends React.Component{
    render(){
        let getTranslation=(key)=>{
            return "TeamAttack.edit."+key;
        };
        let languages=[];
        Object.keys(isoLangs).forEach((key)=>languages.push(isoLangs[key]));
        languages.pop(); //REMOVE TEST LANGUAGE
        languages=_.orderBy(languages,"native");
        let {values, updateFilter}=this.props;
        return(
            <div>
                <div className="form-group">
                    <label htmlFor="informationName">
                        <Translate value={getTranslation("search.panel.influencer.gender.label")}/>
                    </label>
                    <select className="form-control" value={values.influencer_gender} onChange={updateFilter("influencer_gender")}>
                        <option
                            value="all">{I18n.t(getTranslation("search.panel.influencer.gender.values.both"))}</option>
                        <option
                            value="male">{I18n.t(getTranslation("search.panel.influencer.gender.values.male"))}</option>
                        <option
                            value="female">{I18n.t(getTranslation("search.panel.influencer.gender.values.female"))}</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="informationName">
                        <Translate value={getTranslation("search.panel.influencer.languages.label")}/>
                    </label>
                    <select onChange={updateFilter("influencer_languages")} className="form-control" value={values.influencer_languages||""}>
                        <option value={I18n.t(getTranslation("search.panel.influencer.all"))}><Translate value={getTranslation("search.panel.influencer.all")}/></option>
                        {languages.map((l)=>(<option key={l.code} value={l.code}>{l.native}</option>))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="informationName">
                        <Translate value={getTranslation("search.panel.influencer.age.label")}/>
                    </label>
                    <InputNumberInterval input={{
                        value:values.influencer_age,
                        onChange: updateFilter("influencer_age")
                    }}/>
                </div>

                <div className="form-group">
                    <label htmlFor="informationName">
                        <Translate value={getTranslation("search.panel.influencer.sexualOrientation.label")}/>
                    </label>
                    <InputSelect input={{
                        value:values.influencer_sexualOrientation,
                        onChange: updateFilter("influencer_sexualOrientation")
                    }}
                                 className="form-control"
                                 options={[
                                     {value: "select", label:I18n.t(getTranslation("search.panel.influencer.all"))},
                                     {value:"heterosexual", label:I18n.t(getTranslation("search.panel.influencer.sexualOrientation.values.heterosexual"))},
                                     {value:"homosexual", label:I18n.t(getTranslation("search.panel.influencer.sexualOrientation.values.homosexual"))},
                                     {value:"bisexual", label:I18n.t(getTranslation("search.panel.influencer.sexualOrientation.values.bisexual"))},
                                     {value:"transexual", label:I18n.t(getTranslation("search.panel.influencer.sexualOrientation.values.transexual"))}
                                 ]}/>
                </div>

                <div className="form-group">
                    <label htmlFor="informationName">
                        <Translate value={getTranslation("search.panel.influencer.maritalStatus.label")}/>
                    </label>
                    <InputSelect input={{
                        value:values.influencer_sexualOrientation,
                        onChange: updateFilter("influencer_sexualOrientation")
                    }}
                                 className="form-control"
                                 options={[
                                     {value: "all", label:I18n.t(getTranslation("search.panel.influencer.all"))},
                                     {value: "single", label:I18n.t(getTranslation("search.panel.influencer.maritalStatus.values.single"))},
                                     {value: "married", label:I18n.t(getTranslation("search.panel.influencer.maritalStatus.values.married"))}
                                 ]}/>
                </div>
            </div>
        )
    }
}

export default Profile;

