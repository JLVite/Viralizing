import React from "react";
import { Translate } from "react-redux-i18n";

class  BrokerInvite extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let getTranslation=(key)=>{
            return "Statement.tabs.broker.tabs.contacts."+key;
        };
        return (
            <div className="">
                <div className="spacer-30"/>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                Seleccione sus redes sociales y/o su email
                                <div className="list"></div>
                            </div>
                            <div className="col-md-6">
                                Seleccione sus contactos
                                <div className="list"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="message">
                            <textarea placeholder="Mande a sus contactos un mensaje personalizado"/>
                            <a className="btn btn-primary pull-right">Enviar</a>
                        </div>
                        <div>
                            <h3>Perfiles Invitados</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BrokerInvite;