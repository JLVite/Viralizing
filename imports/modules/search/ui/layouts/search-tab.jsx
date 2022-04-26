import React from "react"
import { Tabs, Tab } from "react-bootstrap";
import {Translate, I18n} from "react-redux-i18n";
import Query from "../containers/query";
import Form from "../components/form";
import {CookieName} from "../../../core/settings";

class SearchTab extends React.Component {
    constructor() {
        super();

        this.state = {
            searches: [],
            active: "search"
        };
        this.createSearch = this.createSearch.bind(this);
        this.deleteSearch=this.deleteSearch.bind(this);
        this.saveSearch=this.saveSearch.bind(this);
        this.handleSelect=this.handleSelect.bind(this);
    };

    createSearch(search) {
        console.log("CREATE_SEARCH_INSIDE", search);
        let newState = {...this.state};
        let match=newState.searches.filter((s)=>s.query===search.query)[0];
        if(match) return;
        newState.searches.push(search);
        newState.active=search.query+"_"+newState.searches.length;
        this.setState(newState);
        this.saveSearch(newState);
    }

    getCookieName(){
        return CookieName+"_SAVED_SEARCH";
    }

    saveSearch(search){
        search=search||this.state;
        window.localStorage.setItem(this.getCookieName(), JSON.stringify(search));
    }

    deleteSearch(search){
        let component=this;
        return function(e){
            e.preventDefault();
            e.stopPropagation();
            console.log("DELETE TAB", search);
            let newState={...component.state};
            let index=newState.searches.indexOf(search);
            newState.searches.splice(index,1);
            if(newState.searches.length){
                let lastSearch=newState.searches[newState.searches.length-1];
                newState.active=lastSearch.query+"_"+newState.searches.length;
            }
            component.setState(newState);
            component.saveSearch(newState);
            return false;
        }
    }

    componentWillMount(){
        let {setSearchCreate}=this.props;
        setSearchCreate(this.createSearch);
        let savedSearch=window.localStorage.getItem(this.getCookieName());
        if(savedSearch){
            this.setState(JSON.parse(savedSearch));
        }
    }
    componentWillUpdate(){
        if(this.state.key!==this.props.active){
            this.setState({key:this.props.active});
        }
    }
    handleSelect(active) {
        this.setState({active});
    }
    render(){
        let getTranslation=(key)=>{
            return "Search.tabs."+key;
        };
        let {createSearch,deleteSearch}=this;
        let {searches}=this.state;
        return(
            <div>
                <div className="search-tabs">
                    <Tabs activeKey={this.state.active} id="uncontrolled-tab-example" bsStyle="tabs" onSelect={this.handleSelect}>
                        {searches.map((t,i)=>(
                            <Tab eventKey={t.query+"_"+(i+1)} key={i} title={<div>{t.query} <i className="close icon wb-close-mini" aria-hidden="true" onClick={deleteSearch(t)}/></div>}>
                                <Query {...t} {...t.networks}/>
                            </Tab>
                        ))}
                        <Tab eventKey="search" title={<Translate value={getTranslation("new")}/>}>
                            <Form createSearch={createSearch}/>
                        </Tab>
                        <Form createSearch={createSearch}/>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default SearchTab;

