import React from "react";
import {Translate, I18n} from "react-redux-i18n";
import ListNoResults from "./no-results";
import AccountItem from "./account-item/container";


class FilterList extends React.Component {
    constructor() {
        super();
        this.state = {
            value: []
        };

        this.toggleAccount = this.toggleAccount.bind(this);
    }

    componentWillMount() {
        this.setState({selected: this.props.value});
    }

    toggleAccount(account) {
        let component = this;
        return function () {
            let newState = component.state;
            let indexOfAccount = newState.value.indexOf(account);
            if (indexOfAccount === -1) {
                newState.value.push(account);
            } else {
                newState.value.splice(indexOfAccount, 1);
            }

            component.setState(newState);
            component.props.updateMembers(newState.value);
        }
    }

    filterAccounts(data, search){
        if(!search) return data;
        return data.filter((o)=>{
            let {name,lastName, country}=o.information;

            let regEx=new RegExp(search.toLowerCase());
            return name.toLowerCase().match(regEx) || lastName.toLowerCase().match(regEx) || o.network.toLowerCase().match(regEx) || country.toLowerCase().match(regEx);
        });
    }

    render() {
        let {data, value, view, search, updateFilter, updateValue, filters}= this.props;

        if (data.length === 0) {
            return <ListNoResults/>;
        }
        let getTranslation = (key) => {
            return "TeamAttack.edit.search.results.results.controls." + key;
        };
        data=this.filterAccounts(data,search);
        return (
            <div className="influencer-list col-md-9">
                <div className="row controls">
                    <div className="col-md-3 col-md-offset-3">
                        <ul className="pull-right">
                            <li onClick={()=>updateValue("view")("table")}>
                                <i className="fa fa-bars" aria-hidden="true"/>
                            </li>
                            <li onClick={()=>updateValue("view")("list")}>
                                <i className="fa fa-table" aria-hidden="true"/>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <input type="text"
                               value={search}
                               onChange={updateValue("search")}
                               className="form-control"
                               placeholder={I18n.t(getTranslation("search"))}/>
                    </div>
                    <div className="col-md-3">
                        <select className="form-control" onChange={updateFilter("results_order")}>
                            <option value="higherPrice">{I18n.t(getTranslation("filters.higherPrice"))}</option>
                            <option value="lowestPrice">{I18n.t(getTranslation("filters.lowestPrice"))}</option>
                            <option value="higherEngagement">{I18n.t(getTranslation("filters.higherEngagement"))}</option>
                            <option value="lowerEngagement">{I18n.t(getTranslation("filters.lowerEngagement"))}</option>
                        </select>
                    </div>
                </div>
                {view==="list" && (
                    <div className="row">
                        {data.map((account, i) => (
                            <AccountItem account={account} view={view} toggleAccount={this.toggleAccount} value={value} key={i} filters={filters}/>
                        ))}
                    </div>
                )}
                {view==="table" && (
                    <table className="table list-table" style={{width:2000}}>
                        <thead>
                        <tr>
                            <th colSpan={17} className="tl">Perfil</th>
                            <th colSpan={6} className="tl">Audiencia</th>
                        </tr>
                        <tr>
                            <th>Red Social</th>
                            <th width={200}>Influencer</th>
                            <th>País</th>
                            <th>Ciudad</th>
                            <th>Idiomas</th>
                            <th>Edad</th>
                            <th>Genero</th>
                            <th>Preferencia Sexual</th>
                            <th>Estado Civil</th>
                            <th>Likes</th>
                            <th>Views</th>
                            <th>Tipos de Acción</th>
                            <th>Categorias</th>
                            <th>Especialidades</th>
                            <th>Ciudades</th>
                            <th>Paises</th>
                            <th>Costo</th>
                            <th>Genero</th>
                            <th>Idiomas</th>
                            <th>Edad</th>
                            <th>SES/NSE</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((account, i) => (
                            <AccountItem account={account}
                                         view={view}
                                         filters={filters}
                                         toggleAccount={this.toggleAccount}
                                         value={value} key={i}/>
                        ))}
                        </tbody>
                    </table>
                )}

            </div>
        )
    }
}

export default FilterList;