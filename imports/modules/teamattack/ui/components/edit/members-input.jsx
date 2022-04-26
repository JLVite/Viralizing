import React from "react";
import TeamAttackInfluencerFilter from "./filter/layout";

class TeamAttackMembers extends React.Component {
    constructor() {
        super();

        this.state = {
            view: "list",
            search: "",
            filters: {
                action_type: "post",
                results_order: "higherPrice",
                influencer_networks: ["facebook", "twitter", "instagram"],
                influencer_gender: "all",
                influencer_age: {min: 18, max: 40},
                influencer_country: ["Mexico"],
                influencer_languages: null,
                influencer_sexualOrientation: "all",
                influencer_city: [],
                influencer_likes: {min: 0, max: 50000000},
                influencer_followers: {min: 0, max: 50000000},
                influencer_views: {min: 0, max: 50000000},
                influencer_engagement: {min: 0, max: 50000000},
                audience_gender: "all",
                audience_age: {min: 18, max: 40},
                audience_nrssg: "all",
                audience_country: ["Mexico"]
            }
        };

        this.updateMembers = this.updateMembers.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.setRefetch = this.setRefetch.bind(this);
        this.save = this.save.bind(this);
        this.influencerCountries = this.influencerCountries.bind(this);
        this.audienceCountries = this.audienceCountries.bind(this);
    }

    audienceCountries(values){
        let component=this;
        let newFilter= Object.assign(component.state.filters,{audience_country:values})
        let newState= Object.assign({},component.state,{filters:newFilter} )
        this.setState(newState)
        console.log("state",newState)
    }

    influencerCountries(values){
        let component=this;
        let newFilter= Object.assign(component.state.filters,{influencer_country:values})
        let newState= Object.assign({},component.state,{filters:newFilter} )
        this.setState(newState)
        console.log("state",newState)
    }

    updateValue(key){
        let component=this;
        return function(val){
            if(val.target){
                val=val.target.value;
            }
            let newState={...component.state};
            newState[key]=val;
            component.setState(newState);
        }
    }

    updateFilter(key) {
        let component = this;
        return function (e) {
            let val = e;
            let newState = component.state;
            if (e.target) {
                val = e.target.value;
            }
            newState.filters[key] = val;
            component.setState(newState);
            if (component.refetch) {
                component.refetch(component.state.filters);
            }
        }
    }

    updateMembers(members) {
        let {input: {onChange}} = this.props;
        onChange(members);
    }

    save() {
        this.props.onSubmit(this.state.values);
        this.props.close();
    }

    componentWillMount() {
        let {input: {value}} = this.props;
        if (value) {
            this.setState({values: Object.assign({}, value)});
        }
    }

    setRefetch(refetch) {
        this.refetch = refetch;
    }

    render() {
        let {input: {value}, teamAttacks, refetch} = this.props;
        let {view, search}=this.state;
        return (
            <TeamAttackInfluencerFilter
                refetch={refetch}
                filters={this.state.filters}
                setRefetch={this.setRefetch}
                updateFilter={this.updateFilter}
                updateValue={this.updateValue}
                value={value}
                view={view}
                search={search}
                teamAttacks={teamAttacks}
                updateMembers={this.updateMembers}
                influencerCountries={this.influencerCountries}
                audienceCountries={this.audienceCountries}/>
        );
    }
}

export default TeamAttackMembers;
