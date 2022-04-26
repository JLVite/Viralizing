import React from "react"
import { Translate, I18n } from "react-redux-i18n";

class TrendingPlaces extends React.Component {
    constructor(){
        super();
        this.state={
            selectedCountries:[]
        };
        this.updateCountry=this.updateCountry.bind(this);
        this.updateCity=this.updateCity.bind(this);
    }
    updateCountry(e){
        let {input: {onChange}}=this.props;
        let options = e.target.options;
        let selectedCountries = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                selectedCountries.push(options[i].value);
            }
        }
        this.setState({selectedCountries}, function(){
            if(selectedCountries.length===1 && selectedCountries[0]==="1"){
                console.log("WORLDWIDE_SELECTED")
                onChange(selectedCountries[0]);
            }
        });
    }
    updateCity(e){
        let {input: {onChange}}=this.props;
        let options = e.target.options;
        let selectedCities = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                selectedCities.push(options[i].value);
            }
        }
        let val=selectedCities[0];
        if(val) onChange(val);
    }

    render(){
        let getTranslation=(key)=>{
            return "Search.tabs.trending."+key;
        };
        let {places}=this.props;
        let {selectedCountries}=this.state;
        window.places=places;
        selectedCountries=places.filter(place=>selectedCountries.indexOf(place.woeid)!==-1);
        let cities=places.filter(place=>selectedCountries.map(c=>c.country).indexOf(place.country)!==-1);
        return(
            <div className="places">
                <div className="panel">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <Translate value={getTranslation("controls.countries")}/>
                        </h3>
                    </div>
                    <div className="panel-body container-fluid">
                        <select multiple defaultValue={["1"]}
                                className="form-control"
                                onChange={this.updateCountry}>
                            {places.filter(p=>p.type==="Supername").map(location=>(
                                <option key={location.woeid} value={location.woeid}>{location.name}</option>
                            ))}
                            {places.filter(p=>p.type==="Country").map(location=>(
                                <option key={location.woeid} value={location.woeid}>{location.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <Translate value={getTranslation("controls.cities")}/>
                        </h3>
                    </div>
                    <div className="panel-body container-fluid">
                        <select multiple className="form-control" onChange={this.updateCity}>
                            {cities.filter(p=>p.type==="Country").map(country=>(
                                <optgroup key={country.woeid} label={country.name}>
                                    <option value={country.woeid}>{I18n.t(getTranslation("controls.all"))}</option>
                                    {cities.filter(p=>p.country===country.country && p.type!=="Country").map(location=>(
                                        <option key={location.woeid} value={location.woeid}>{location.name}</option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrendingPlaces;

