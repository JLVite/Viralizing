import React from 'react'
import {Translate, I18n} from "react-redux-i18n";
import { Field, FormSection, reduxForm } from 'redux-form';
import Cities from '../../../../../../../constants/cities';

class Location extends React.Component{
    render(){
        let getTranslation=(key)=>{
            return "TeamAttack.edit."+key;
        };
        let {values, toggleMap}=this.props;
        return(
            <div>
                <div className="form-group">
                    <label htmlFor="informationName">
                        <Translate value={getTranslation("search.panel.influencer.country.label")}/>
                    </label>
                    <input type="text" className="form-control" onClick={()=>toggleMap()("influencer_country")} defaultValue={values.influencer_country.join(", ")}/>
                </div>
                <div className="form-group">
                    <label htmlFor="informationName">
                        <Translate value={getTranslation("search.panel.influencer.city.label")}/>
                    </label>
                    <Field component="select" name="country" className="form-control">
                      {Cities.map((c, i) => (<option key={i} value={c}>{c}</option>))}
                    </Field>
                </div>
            </div>
        )
    }
}

export default Location;

