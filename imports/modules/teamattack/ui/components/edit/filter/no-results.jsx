import React from "react";
import {Translate, I18n} from "react-redux-i18n";

class ListNoResults extends React.Component {
    render(){
        let getTranslation = (key) => {
            return "TeamAttack.edit.search.results.empty." + key;
        };
        return (
            <div className="no-results">
                <div className="content">
                    <i className="icon wb-alert-circle"/>
                    <h3><Translate value={getTranslation("message")}/></h3>
                </div>
            </div>
        )
    }
}

export default ListNoResults;
