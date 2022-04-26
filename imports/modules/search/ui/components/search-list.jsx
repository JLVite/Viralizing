import React from "react";
import GooglePreview from "./previews/google";
import TwitterPreview from "./previews/twitter";
import FacebookPreview from "./previews/facebook";
import InstagramPreview from "./previews/instagram";

class SearchList extends React.Component {
    constructor(){
        super();

        this.state={
            networks: {
                twitter: true,
                instagram: true,
                google: true
            }
        };
    }
    componentWillMount(){
        let {google,twitter,instagram}=this.props;
        this.setState({networks:{google,twitter,instagram}})
    }
    selectNetwork(network){
        let component=this;
        return function(){
            let newState={...component.state};
            newState.networks[network]=!newState.networks[network];
            component.setState(newState);
        }
    }
    getElement(element, i){
        let preview=null;
        switch(element.network) {
            case "twitter":
                preview=<TwitterPreview data={element}/>
                break;
            case "instagram":
                preview=<InstagramPreview data={element}/>
                break;
            case "google":
                preview=<GooglePreview data={element}/>
                break;
        }
        return <div key={i} className="element">{preview}</div> ;
    }
    render() {
        let {query,data,twitter,instagram,google}=this.props;
        return (
            <div className="query-results padding-20">
                <div className="header">
                    <h1 style={{marginTop:0}}>{query}</h1>
                    <ul className="profile-list pull-right">
                        {twitter && (
                            <li onClick={this.selectNetwork("twitter")}>
                                <i className={"social-icon twitter   "+(this.state.networks.twitter?"":"active")}/>
                            </li>
                        )}
                        {instagram && (
                            <li onClick={this.selectNetwork("instagram")}>
                                <i className={"social-icon instagram "+(this.state.networks.instagram?"":"active")}/>
                            </li>
                        )}
                        {google && (
                            <li onClick={this.selectNetwork("google")}>
                                <i className={"social-icon google "+(this.state.networks.google?"":"active")}/>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="search-list">
                    {data && (
                        data.filter((el)=>this.state.networks[el.network]).map((element,i)=>(
                            this.getElement(element,i)
                        ))
                    )}
                </div>
            </div>
        );
    }
}

export default SearchList;
