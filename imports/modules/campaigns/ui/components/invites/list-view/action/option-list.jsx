import React from "react";
import ListEmpty from "../../../../../../core/ui/components/list-empty";
import {Translate, I18n} from "react-redux-i18n";
import {BootstrapTable, TableHeaderColumn}  from "react-bootstrap-table";
import swal from "sweetalert2";

const renderDate = function (cell, row) {
    return (
        <div>
            {cell ? moment(new Date(cell)).format("DD/MM/YY") : '-'}
        </div>
    );
};

const renderTime = function (cell, row) {
    return (
        <div>
            {moment(new Date(cell)).format("HH:MM A")} - {moment.tz.guess()}
        </div>
    );
};

const renderMedia = function (cell, row) {
    return (
        <div style={{padding:6}}>
            { cell ? <a href={cell} target="_blank"><img src={cell} alt="" style={{maxHeight: 100, maxWidth: "100%"}}/></a> : '-'}
        </div>
    );
};

const renderMessage = function (cell, row) {
    return (
        <div>
            {cell || '-'}
        </div>
    );
};

const renderType = function (cell, row) {
    console.log('type',cell)
    const getTranslation = key => `Campaigns.edit.tabs.invites.edit.${key}`;
    return (
        <div>
            {cell ? I18n.t(getTranslation('form.action.values.' + cell)) : '-'}
        </div>
    );
};

class OptionList extends React.Component {
    constructor(){
        super();

        this.confirmDelete=this.confirmDelete.bind(this);
    }
    confirmDelete(row){
        let component=this;
        return function(){
            let getTranslation = (key) => {
                return "Campaigns.edit.tabs.invites.edit." + key;
            };
            swal({
                title: I18n.t(getTranslation("delete.main.title")),
                text: I18n.t(getTranslation("delete.main.description")),
                type: "warning",
                showCancelButton: true,
                confirmButtonText: I18n.t(getTranslation("delete.main.confirm")),
                cancelButtonText: I18n.t(getTranslation("delete.main.cancel"))
            }).then(function () {
                component.props.deleteInviteOption(row);
                swal(
                    I18n.t(getTranslation("delete.done.title")),
                    I18n.t(getTranslation("delete.done.description")),
                    "success"
                );
            })
        }
    }
    render() {
        let getTranslation = (key) => {
            return "Campaigns.edit.tabs.invites.edit.tables.options." + key;
        };
        let {invite}=this.props;
        if(invite.options.length===0){
            return (
                <ListEmpty message={<Translate value={getTranslation("empty.message")}/>}/>
            )
        }
        let{confirmDelete}=this;
        const renderDelete = function(cell, row) {   // String example
            return (
                <div style={{color: "red", cursor:"pointer"}} onClick={confirmDelete(row)}>
                    -
                </div>
            );
        };
        let list=invite.options.map((invite,index)=>Object.assign({},invite,{index:(index+1)}));
        console.log('LIST INVITES',list)
        return (
            <div className="panel">
                <div className="panel-body">
                    <div className="action-list">
                        <h4> <Translate value={getTranslation("table.title")}/></h4>
                        <div className="ibol-table">
                            <BootstrapTable data={list} >
                                <TableHeaderColumn dataField='_id' dataFormat={ renderDelete } dataAlign='center' width="60px"><i className="fa fa-trash" aria-hidden="true"/></TableHeaderColumn>
                                <TableHeaderColumn isKey dataField='index' dataAlign='center' width="60px"><Translate value={getTranslation("table.headers.index")}/></TableHeaderColumn>
                                <TableHeaderColumn dataField='type'  dataAlign='center' dataFormat={ renderType } width="250px"><Translate value={getTranslation("table.headers.type")}/></TableHeaderColumn>
                                <TableHeaderColumn dataField='message' dataAlign='center' dataFormat={ renderMessage }  width="350px"><Translate value={getTranslation("table.headers.message")}/></TableHeaderColumn>
                                <TableHeaderColumn dataField='media' dataAlign='center' dataFormat={ renderMedia } width="200px"><Translate value={getTranslation("table.headers.media")}/></TableHeaderColumn>
                                <TableHeaderColumn dataField='date' dataAlign='center' dataFormat={ renderDate } width="150px"><Translate value={getTranslation("table.headers.date")}/></TableHeaderColumn>
                                <TableHeaderColumn dataField='date' dataAlign='center' dataFormat={ renderTime } width="220px"><Translate value={getTranslation("table.headers.time")}/></TableHeaderColumn>
                            </BootstrapTable>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OptionList;
