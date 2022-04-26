import React from 'react'
import {Translate, I18n} from "react-redux-i18n";
import {BootstrapTable, TableHeaderColumn}  from "react-bootstrap-table";
import {Link} from "react-router";
import SocialAvatar from "../../../../../../core/ui/components/social-avatar";


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

const renderName = function(cell, row) {   // String example
    return (
        <Link to={"/team-attack/edit/"+row._id}>
            {cell}
        </Link>
    );
};

class Audience extends React.Component{
    render(){
        let getTranslation = (key) => {
            return "TeamAttack.list." + key;
        };

        let {teamAttacks}=this.props;
        const options = {
            noDataText: I18n.t(getTranslation("table.empty"))
        };
        return(
            <div className="panel">
                <div className="panel-body slim container-fluid">
                    <h4><Translate value={getTranslation("title")}/></h4>

                    <div className="ibol-table">
                        <BootstrapTable data={teamAttacks} options={ options }>
                            <TableHeaderColumn isKey={true} dataField='name'  width="200px" dataFormat={renderName}>
                                <Translate value={getTranslation("table.headers.name")}/>
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField='members' width="300px" dataFormat={ renderMembers }>
                                <Translate value={getTranslation("table.headers.members")}/>
                            </TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                </div>
            </div>
        )
    }
}

export default Audience;

