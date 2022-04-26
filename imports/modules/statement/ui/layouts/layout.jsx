import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { Translate, I18n } from "react-redux-i18n";
import Statement from "../components/statement/container";
import Broker from "../components/broker/container";

class Layout extends React.Component{
    render() {
        let getTranslation=(key)=>{
            return "Statement.tabs."+key;
        };
        return (
            <div>
                <div className="row">

                    <div className="col-lg-12">
                        <div className="nav-tabs-horizontal">
                            <Tabs defaultActiveKey={this.props.params.tab} id="uncontrolled-tab-example" bsStyle="tabs">
                                <Tab eventKey="statement" title={<Translate value={getTranslation("statement.title")}/>}>
                                    <Statement/>
                                </Tab>
                                <Tab eventKey="broker" title={<Translate value={getTranslation("broker.title")}/>}>
                                    <Broker/>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;
