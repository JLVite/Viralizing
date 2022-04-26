import React from 'react'
import InputNumberInterval from "../../../../../../core/ui/components/forms/input-number-interval";
import {Translate, I18n} from "react-redux-i18n";
import  { isoLangs }  from "../../../../../../../translations";
import Cities from '../../../../../../../constants/cities';
import { Field, FormSection, reduxForm } from 'redux-form';
import _ from "lodash";

class Audience extends React.Component{
    render(){
        let getTranslation=(key)=>{
            return "TeamAttack.edit."+key;
        };
        let languages=[];
        Object.keys(isoLangs).forEach((key)=>languages.push(isoLangs[key]));
        languages.pop(); //REMOVE TEST LANGUAGE
        languages=_.orderBy(languages,"native");
        let {values, updateFilter, toggleMap}=this.props;

        return(
            <div className="panel">
                <div className="panel-body slim container-fluid">
                    <h4><Translate value={getTranslation("search.panel.audience.title")}/></h4>

                    <div className="form-group">
                        <label htmlFor="informationName">
                            <Translate value={getTranslation("search.panel.audience.country.label")}/>
                        </label>
                        <input type="text" className="form-control" onClick={()=>toggleMap()("audience_country")} defaultValue={values.audience_country.join(", ")}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="informationName">
                            <Translate value={getTranslation("search.panel.audience.city.label")}/>
                        </label>
                        <Field component="select" name="country" className="form-control">
                            {Cities.map((c, i) => (<option key={i} value={c}>{c}</option>))}
                        </Field>
                    </div>

                    <div className="form-group">
                        <label htmlFor="informationName">
                            <Translate value={getTranslation("search.panel.audience.gender.label")}/>
                        </label>
                        <select className="form-control" value={values.audience_gender} onChange={updateFilter("audience_gender")}>
                            <option
                                value="all">{I18n.t(getTranslation("search.panel.influencer.all"))}</option>
                            <option
                                value="male">{I18n.t(getTranslation("search.panel.audience.gender.values.male"))}</option>
                            <option
                                value="female">{I18n.t(getTranslation("search.panel.audience.gender.values.female"))}</option>
                            <option
                                value="split">{I18n.t(getTranslation("search.panel.audience.gender.values.split"))}</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="informationName">
                            <Translate value={getTranslation("search.panel.audience.language.label")}/>
                        </label>
                        <select onChange={updateFilter("influencer_languages")} className="form-control" value={values.influencer_languages||""}>
                            <option value="all">{I18n.t(getTranslation("search.panel.influencer.all"))}</option>
                            {languages.map((l)=>(<option key={l.code} value={l.code}>{l.native}</option>))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="informationName">
                            <Translate value={getTranslation("search.panel.audience.age.label")}/>
                        </label>
                        <InputNumberInterval input={{
                            value:values.audience_age,
                            onChange: updateFilter("audience_age")
                        }}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="informationName">
                            <Translate value={getTranslation("search.panel.audience.nrssg.label")}/>
                        </label>
                        <select className="form-control" value={values.audience_nrssg} onChange={updateFilter("audience_nrssg")}>
                            <option 
                                value="all" >{I18n.t(getTranslation("search.panel.influencer.all"))}</option>
                            <option
                                value="a">{I18n.t(getTranslation("search.panel.audience.nrssg.values.a"))}</option>
                            <option
                                value="b">{I18n.t(getTranslation("search.panel.audience.nrssg.values.b"))}</option>
                            <option
                                value="c1">{I18n.t(getTranslation("search.panel.audience.nrssg.values.c1"))}</option>
                            <option
                                value="c2">{I18n.t(getTranslation("search.panel.audience.nrssg.values.c2"))}</option>
                            <option
                                value="d">{I18n.t(getTranslation("search.panel.audience.nrssg.values.d"))}</option>
                            <option
                                value="e">{I18n.t(getTranslation("search.panel.audience.nrssg.values.e"))}</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default Audience;

