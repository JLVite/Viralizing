import React from "react";
import SocialAvatar from "../../../core/ui/components/social-avatar";
import {Translate, I18n} from "react-redux-i18n";
import {BootstrapTable, TableHeaderColumn}  from "react-bootstrap-table";
import {Link} from "react-router";
import _ from "lodash";

let getTranslation = (key) => {
    return "TeamAttack.list." + key;
};

const renderLink = function (cell, row) {   // String example
    return <Link to={`/team-attack/edit/${row._id}`}><i className="icon wb-edit" aria-hidden="true"></i></Link>;
};
const renderType = function (cell, row) {   // String example
    return cell?<Translate value={getTranslation("table.helpers.type."+cell)}/>:"-";
};

const renderMembers = function (cell, row) {
    return (
        <div>
            {cell.map((a,i) => (
                <div className="icon" key={i}>
                    <SocialAvatar avatar={a.information.avatar}
                                  network={a.network}
                                  name={a.information.name}
                                  size="75"
                                  type={a.information.type}/>
                </div>
            ))}
        </div>
    )
};

const renderNetworks = function(cell, row) {   // String example
    return (
        <div>
            {_.uniq(cell.map(m=>m.network)).map((a,i) => (
                <div className="icon" key={i}>
                    <i className={"social-icon "+a}/>
                </div>
            ))}

        </div>
    );
};

const renderName = function(cell, row) {   // String example
    return (
        <Link to={"/team-attack/edit/"+row._id}>
            {cell}
        </Link>
    );
};

class TeamAttackList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sortName: undefined,
            sortOrder: undefined
        };

        this.onSortChange = this.onSortChange.bind(this);
    }

    onSortChange(sortName, sortOrder) {
        this.setState({
            sortName,
            sortOrder
        });
    }

    render() {
        let {data, deleteTeamAttack}=this.props;
        const options = {
            sortName: this.state.sortName,
            sortOrder: this.state.sortOrder,
            onSortChange: this.onSortChange,
            noDataText: I18n.t(getTranslation("table.empty"))
        };
        const renderDelete = function(cell, row) {   // String example
            return (
                <div style={{color: "red", cursor:"pointer"}} onClick={deleteTeamAttack(row)}>
                    -
                </div>
            );
        };
        data=this.props.data.map((t,index)=>Object.assign({},t,{index:(index+1)}));
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="btn btn-primary table-button" onClick={this.props.new}><Translate
                            value={getTranslation("new")}/></div>
                    </div>
                </div>

                <div className="ibol-table">
                    <BootstrapTable data={data} options={ options } pagination search searchPlaceholder={I18n.t(getTranslation("table.search"))}>
                        <TableHeaderColumn dataFormat={ renderDelete } dataAlign='center' width="60px">
                            <Translate value={getTranslation("table.headers.delete")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn isKey dataField='index' dataAlign='center' width="60px"><Translate value={getTranslation("table.headers.index")}/></TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataSort={ true } width="300px" dataFormat={renderName}>
                            <Translate value={getTranslation("table.headers.name")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='members' dataFormat={ renderNetworks }>
                            <Translate value={getTranslation("table.headers.networks")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='members' dataFormat={ renderMembers }>
                            <Translate value={getTranslation("table.headers.members")}/>
                        </TableHeaderColumn>

                        {/*
                        <TableHeaderColumn dataField='type' dataFormat={ renderType } dataSort={ true } dataAlign='center' width="180px">
                            <Translate value={getTranslation("table.headers.type")}/>
                        </TableHeaderColumn>
                        */}

                    </BootstrapTable>
                </div>
            </div>
        )
    }
}

export default TeamAttackList;