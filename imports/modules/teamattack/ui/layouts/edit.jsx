import React from "react";
import {reduxForm, Field} from "redux-form";
import {Translate} from "react-redux-i18n";
import TeamAttackMembers from "../components/edit/members-input";

class EditTeamAttack extends React.Component {
    render() {
        let getTranslation = (key) => {
            return "TeamAttack.edit." + key;
        };
        const { handleSubmit, pristine, reset, submitting, teamAttacks, refetch } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="campaignName">
                                <Translate value={getTranslation("form.name")}/>
                            </label>
                            <Field component="input" name="name" className="form-control"/>
                        </div>
                    </div>
                </div>
                <Field component={TeamAttackMembers} refetch={refetch} name="members" teamAttacks={teamAttacks}/>
            </form>
        );
    }
}

EditTeamAttack = reduxForm({
    form: 'teamAttack-edit',
    enableReinitialize: true
})(EditTeamAttack);

export default EditTeamAttack;