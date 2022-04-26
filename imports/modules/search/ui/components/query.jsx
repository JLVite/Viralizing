import React from "react";
import QueryContainerWithData from "../containers/query";

class Query extends React.Component {
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
    }

    componentWillMount(){
        this.setState(this.props.data)
    }
    render() {
        let {twitter,google,instagram}=this.state.networks;
        return (
            <div className="page-content container-fluid">
                <QueryContainerWithData twitter={twitter}
                                 google={google}
                                 instagram={instagram}
                                 query={this.state.query}/>
            </div>
        );
    }
}

export default Query;
