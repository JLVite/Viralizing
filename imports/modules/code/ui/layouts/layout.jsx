import React from "react";
import {Link} from "react-router";
import Modal from "react-modal";
import swal from "sweetalert2";
import { Translate, I18n } from "react-redux-i18n";

let getTranslation=(key)=>{
    return "Code."+key;
};
class Layout extends React.Component{
    constructor(){
        super();

        this.state={
            code: ""
        };

        this.submitCode=this.submitCode.bind(this);
        this.updateCode=this.updateCode.bind(this);
    }
    submitCode(){
        swal({
            title: I18n.t(getTranslation("submit.done.title")),
            text: I18n.t(getTranslation("submit.done.description")),
            type: 'success',
            confirmButtonText: I18n.t(getTranslation("submit.done.confirm"))
        })
    }
    updateCode(){
        let code=e.target.value;
        this.setState({code})
    }
    render() {
        return (
            <div className="page-content container-fluid">
                <div className="app-code">
                    <div className="code-form">
                        <div className="content">
                            <h1><Translate value={getTranslation("form.title")}/></h1>
                            <input type="text" className="form-control" value={this.state.code} onChange={this.updateCode}/>
                            <button className="btn btn-primary" onClick={this.submitCode}><Translate value={getTranslation("form.button")}></Translate></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;
