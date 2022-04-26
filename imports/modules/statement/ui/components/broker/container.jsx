import React from "react";
import { Translate } from "react-redux-i18n";
import { Tabs, Tab } from "react-bootstrap";
import Invite from "./invite";
import List from "./list"

class  Broker extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleUpload(e){
        console.log(e.target.files);
        var uploader = new Slingshot.Upload('test-bucket-ibol');
        let file = e.target.files[0];

        uploader.send(file, (error, downloadUrl) => {
            if (error) {
                alert('Error al subir el archivo');
                console.log('Error',error);
                return
            }
            console.log(downloadUrl);
        });

    }

    render() {
        let getTranslation=(key)=>{
            return "Statement.tabs.broker."+key;
        };
        return (
            <div className="content-padding-30 clear-tabs settings-broker">
                <Tabs defaultActiveKey="invites" id="uncontrolled-tab-example2" bsStyle="tabs">
                <Tab eventKey="invites" title={<Translate value={getTranslation("tabs.contacts.title")}/>}>
                    <Invite/>
                </Tab>

                <Tab eventKey="message" title={<Translate value={getTranslation("tabs.broker.title")}/>}>
                    <input type="file" onChange={this.handleUpload} />
                    <List/>
                </Tab>
            </Tabs>
            </div>
        );
    }
}

export default Broker;