import React from "react";
import {withRouter} from "react-router";
import {Translate, I18n} from "react-redux-i18n";
import PropTypes from 'prop-types';
import { Tabs, Tab } from "react-bootstrap";

class Form extends React.Component {
    constructor(){
        super();

        this.state={
            networks:{
                twitter: true,
                instagram: true,
                google: true
            },
            query:""
        };

        this.selectNetwork=this.selectNetwork.bind(this);
        this.updateQuery=this.updateQuery.bind(this);
        this.search=this.search.bind(this);
    }
    selectNetwork(network){
        let component=this;
        return function(){
            let newState={...component.state};
            newState.networks[network]=!newState.networks[network];
            component.setState(newState);
        }
    }
    updateQuery(e){
        let query=e.target.value;
        this.setState({query})
    }
    search(){
        let {networks, query}=this.state;
        this.props.createSearch({
            query,
            networks
        });
    }
    render() {
        let getTranslation=(key)=>{
            return "Search.search."+key;
        };
        return (
            <div className="page-content container-fluid">
                <div className="search-form">
                    <div className="content">
                        <h1><Translate value={getTranslation("form.title")}/></h1>
                        <input type="text" className="form-control" value={this.state.query} onChange={this.updateQuery}/>
                        <div>
                            <ul className="profile-list">
                                <li onClick={this.selectNetwork("twitter")} className={this.state.networks.twitter?"active":""}>
                                    <div className="selected">
                                        <i className="icon wb-check"></i>
                                    </div>
                                    <i className="social-icon twitter"/>
                                </li>
                                <li onClick={this.selectNetwork("instagram")} className={this.state.networks.instagram?"active":""}>
                                    <div className="selected">
                                        <i className="icon wb-check"></i>
                                    </div>
                                    <i className="social-icon instagram"/>
                                </li>
                                <li onClick={this.selectNetwork("google")} className={this.state.networks.google?"active":""}>
                                    <div className="selected">
                                        <i className="icon wb-check"></i>
                                    </div>
                                    <i className="social-icon google"/>
                                </li>
                            </ul>
                        </div>
                        <button className="btn btn-primary" onClick={this.search}><Translate value={getTranslation("button")}></Translate></button>
                    </div>
                </div>
            </div>
        );
    }
}

let FormWithRouter = withRouter(Form);

Form.propTypes = {
    router: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default FormWithRouter
