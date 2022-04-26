import React from "react"
import { Translate, Localize, I18n } from "react-redux-i18n";
import _ from "lodash";

class TrendingTopics extends React.Component {
    constructor(){
        super();

        this.searchTrend=this.searchTrend.bind(this);
    }
    searchTrend(trend){
        let component=this;
        return function(){
            let networks={
                twitter: true,
                instagram: true,
                google: true
            };
            component.props.createSearch({
                query:trend.hashtag,
                networks
            });
        }
    }
    render(){
        window.I18N=I18n;
        let getTranslation=(key)=>{
            return "Search.tabs.trending.trends."+key;
        };
        let {trends}=this.props;
        let highestReach=_.maxBy(trends,(t)=>t.volume);
        trends=_.sortBy(trends.map((t, index)=>Object.assign({},t,{
            index: (index+1),
            reach:t.volume/highestReach.volume*100
        })),["reach"]).reverse();
        return(
            <div className="trends">
                <div className="row">
                    <div className="col-md-10">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    <Translate value={getTranslation("title")}/>
                                </h3>
                            </div>
                            <div className="panel-body container-fluid">
                                <div className="table-responsive">
                                    <table className="table table-analytics margin-bottom-0 text-nowrap">
                                        <thead>
                                        <tr>
                                            <th className="index">
                                                <Translate value={getTranslation("table.headers.index")}/>
                                            </th>
                                            <th className="language">
                                                <Translate value={getTranslation("table.headers.topic")}/>
                                            </th>
                                            <th className="vists">
                                                <Translate value={getTranslation("table.headers.volume")}/>
                                            </th>
                                            <th className="vists-percent">
                                                <Translate value={getTranslation("table.headers.reach")}/>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {trends.map((trend,i)=>(
                                            <tr key={i} onClick={this.searchTrend(trend)}>
                                                <td>{(i+1)}</td>
                                                <td>
                                                <span className="country-name" onClick={this.searchTrend(trend)}>
                                                    {trend.hashtag}
                                                    {trend.promoted && <i className="fa fa-money" aria-hidden="true"/>}
                                                </span>
                                                </td>
                                                <td>
                                                    {trend.volume?<Localize value={Number(trend.volume)} options={{style:"decimal", useGrouping:true, minimumFractionDigits: 0, maximumFractionDigits: 0}}/>:"-"}
                                                    </td>
                                                <td>
                                                    <div className="progress progress-xs margin-bottom-0">
                                                        <div className="progress-bar progress-bar-info bg-blue-600" style={{width: trend.reach+'%'}} aria-valuemax={100} aria-valuemin={0} aria-valuenow={90} role="progressbar">
                                                        </div>
                                                    </div>
                                                    <span className="progress-percent">{trend.reach.toFixed(2)}%</span>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrendingTopics;

