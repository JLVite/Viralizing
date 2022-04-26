import React from "react";
import Modal from "react-modal";
import swal from "sweetalert2";
import { Translate, I18n } from "react-redux-i18n";
import ListEmpty from "../../../core/ui/components/list-empty";
import ListTable from "../components/list-table";
import NewTeamAttack from "../components/teamattack-create";
import notie from "notie";

let getTranslation=(key)=>{
    return "TeamAttack."+key;
};

class List extends React.Component{
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            list:[],
            current:null
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onSubmitForm=this.onSubmitForm.bind(this);
        this.deleteTeamAttack=this.deleteTeamAttack.bind(this);
    }
    onSubmitForm(data){
        let component=this;
        Meteor.call("teamAttack-create",data,function(err,res){
            if(err){
                if(err.error===500){
                    err.error = I18n.t(getTranslation("list.messages.error"));
                }
                console.log("ERROR",err);
                notie.alert(3,err.reason||err.error,3);
                return
            }
            component.props.refetch();
            component.closeModal();
            component.props.history.push("/team-attack/edit/"+res);
        });
    }
    openModal() {
        this.setState({modalIsOpen: true});
    }
    deleteTeamAttack(element){
        let component=this;
        return function(){
            swal({
                title: I18n.t(getTranslation("list.delete.title")),
                text: I18n.t(getTranslation("list.delete.description")),
                type: 'warning',
                showCancelButton: true,
                cancelButtonText: I18n.t(getTranslation("list.delete.cancel")),
                confirmButtonText: I18n.t(getTranslation("list.delete.confirm"))
            }).then(function () {
                Meteor.call("teamAttack-delete",element,function(err,res){
                    if(err){
                        notie.alert(3,I18n.t(getTranslation("list.delete.messages.error")),3);
                        return
                    }
                    notie.alert(1,I18n.t(getTranslation("list.delete.messages.deleted")),3);
                    component.props.refetch();
                });
            })
        }
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    }
    render() {
        let list=this.props.data||[];
        return (
            <div className="content-padding-30">
                {list.length?<ListTable new={this.openModal} data={list} deleteTeamAttack={this.deleteTeamAttack}/>:<ListEmpty message={<Translate value={getTranslation("empty.message")}/>} button={<Translate value={getTranslation("empty.button")}/>} callback={this.openModal}/>}
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    className="app-modal xl-large"
                    contentLabel="Example Modal"
                >
                    <button className="close" onClick={this.closeModal}>
                        <i className="icon wb-close-mini" aria-hidden="true" />
                    </button>
                    <NewTeamAttack onSubmit={this.onSubmitForm}/>
                </Modal>
            </div>
        );
    }
}

export default List;
