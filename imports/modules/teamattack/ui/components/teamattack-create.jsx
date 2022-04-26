import React from "react";
import { Translate, I18n } from "react-redux-i18n";
import {Field, reduxForm} from "redux-form";


class NewTeamAttack extends React.Component{
    render(){
        const { handleSubmit, pristine, reset, submitting } = this.props;
        let getTranslation=(key)=>{
            return "TeamAttack.new."+key;
        };
        return (
            <form onSubmit={handleSubmit}>
                <h2><Translate value={getTranslation("title")}/></h2>
                <div className="padding-20">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="informationName">
                                    <Translate value={getTranslation("name")}/>
                                </label>
                                <Field component="input" name="name" className="form-control"/>
                            </div>
                        </div>
                        {/*
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="informationName">
                                    <Translate value={getTranslation("type.label")}/>
                                </label>
                                <Field component="select" name="type" className="form-control">
                                    <option value="post">{I18n.t(getTranslation("type.options.post"))}</option>
                                    <option value="profilePicture">{I18n.t(getTranslation("type.options.profilePicture"))}</option>
                                    <option value="coverPhoto">{I18n.t(getTranslation("type.options.coverPhoto"))}</option>
                                    <option value="noPostHour">{I18n.t(getTranslation("type.options.noPost.hour"))}</option>
                                    <option value="noPostDay">{I18n.t(getTranslation("type.options.noPost.day"))}</option>
                                    <option value="share">{I18n.t(getTranslation("type.options.share"))}</option>
                                </Field>
                            </div>
                        </div>
                        */}

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary pull-right"><Translate value={getTranslation("button")}/></button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

NewTeamAttack = reduxForm({
    form: 'teamAttack-create'
})(NewTeamAttack);

export default NewTeamAttack;