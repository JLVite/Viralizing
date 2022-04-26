import React from "react";
import Trends from "./trends";
import { Tabs, Tab } from "react-bootstrap";
import {Translate, I18n} from "react-redux-i18n";
import SearchTab from "../layouts/search-tab";

class TabsContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            active: "search"
        };
        this.handleSelect=this.handleSelect.bind(this);
        this.createSearch = this.createSearch.bind(this);
        this.setSearchCreate=this.setSearchCreate.bind(this);
    };
    handleSelect(active) {
        this.setState({active});
    }
    setSearchCreate(createSearch){
        this.searchCreate=createSearch;
    }
    createSearch(search){
        console.log("INITIALIZE_SEARCH_OUTSIDE", search);
        this.setState({active: "search"}, function(){
            console.log("STATE_UPDATED_CREATING_SEARCH", this.state);
            this.searchCreate(search);
        });
    };
    render() {
        let getTranslation=(key)=>{
            return "Search.tabs."+key;
        };

        return (
            <div>
                <Tabs activeKey={this.state.active} id="uncontrolled-tab-example" bsStyle="tabs" onSelect={this.handleSelect}>
                    <Tab eventKey="search" title={<Translate value={getTranslation("new")}/>}>
                        <SearchTab setSearchCreate={this.setSearchCreate}/>
                    </Tab>
                    <Tab eventKey="trending" title={<Translate value={getTranslation("trending.title")}/>}>
                        <Trends createSearch={this.createSearch}/>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default TabsContainer;