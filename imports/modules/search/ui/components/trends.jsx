import React from "react"
import { Translate } from "react-redux-i18n";
import Places from "../containers/places";
import Trends from "../containers/trends";

class TrendingTopicsTab extends React.Component {
    constructor(){
        super();

        this.state={
            place: "1"
        };

        this.updatePlace=this.updatePlace.bind(this);
    }
    updatePlace(place){
        //console.log("UPDATE_PLACE", place);
        this.setState({place});
    }
    render(){
        let {createSearch}=this.props;
        let getTranslation=(key)=>{
            return "Search.tabs.trending."+key;
        };
        return(
            <div className="trending-places row">
                <div className="col-md-3">
                    <Places input={{
                        onChange:this.updatePlace,
                        value:this.state.place
                    }}/>
                </div>
                <div className="col-md-9">
                    <Trends woeid={this.state.place}
                            createSearch={createSearch}/>
                </div>
            </div>
        )
    }
}

export default TrendingTopicsTab;

