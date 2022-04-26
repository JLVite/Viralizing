import React from "react";
import anchorme from "anchorme";

class GooglePreview extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        let search=this.props.data;
        return (
            <div className="google-preview">
                <div className="network">
                    <i className="social-icon google"/>
                </div>
                <div className="title">
                    {search.title}
                </div>
                <div className="link">
                    {search.link}
                </div>
                <div className="description" dangerouslySetInnerHTML={{__html: anchorme(search.description, {attributes:[{name:"target", value:"_blank" }]})}}/>
            </div>
        );
    }
}

export default GooglePreview;