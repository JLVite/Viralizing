import React from "react";
import {Translate, I18n} from "react-redux-i18n";
import {BootstrapTable, TableHeaderColumn}  from "react-bootstrap-table";



const renderMedia = function (cell, row) {
    return (
        <img className="image" src={cell} alt=""/>
    )
};

class CampaignMessagesList extends React.Component {
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
        let {editMessage,deleteMessage, data}=this.props;
        const renderLink = function (cell, row) {   // String example
            return <a onClick={editMessage(row)}><i className="icon wb-edit" aria-hidden="true"></i></a>;
        };
        const renderDelete = function (cell, row) {   // String example
            return <a onClick={deleteMessage(row)}><i className="icon wb-trash" aria-hidden="true"></i></a>;
        };

        const renderTags = function(cell, row) {   // String example
            const tagsList = function () {
                return (
                    cell.map((tag, i)=>{ return <div className="tag" key={i} >{tag}</div>  })
                )
            };
            return (
                <div className="tag-list">
                    {cell.length?tagsList():"-"}
                </div>
            );
        };

        const renderNetworks = function(cell, row) {
            return (
                <div>
                    {cell.map((n,i)=>(
                        <div className="icon size-35" key={i}><i className={"social-icon "+n}/></div>
                    ))}
                </div>
            )
        };
        let getTranslation=(key)=>{
            return "Campaigns.edit.tabs.messages.messages.list."+key;
        };
        const options = {
            sortName: this.state.sortName,
            sortOrder: this.state.sortOrder,
            onSortChange: this.onSortChange,
            noDataText: I18n.t(getTranslation("table.empty"))
        };
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="btn btn-primary pull-right" onClick={this.props.new}><Translate value={getTranslation("new")}/></div>
                    </div>
                </div>
                <div className="spacer-30"></div>

                <div className="ibol-table">
                    <BootstrapTable data={data} options={ options } pagination search searchPlaceholder={I18n.t(getTranslation("table.search"))}>
                        <TableHeaderColumn isKey dataField='_id' dataFormat={ renderLink } dataAlign='center' width="110px">
                            <Translate value={getTranslation("table.headers.more")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='message' dataSort={ true }>
                            <Translate value={getTranslation("table.headers.message")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='media' dataAlign='center' dataFormat={ renderMedia } dataSort={ true } width="150px">
                            <Translate value={getTranslation("table.headers.picture")}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataFormat={ renderDelete } dataAlign='center' width="110px">
                            <Translate value={getTranslation("table.headers.delete")}/>
                        </TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        );
    }
}

export default CampaignMessagesList;