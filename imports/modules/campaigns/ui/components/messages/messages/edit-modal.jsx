import React from "react";
import PostCreate from "../../../../../agenda/ui/components/post-create";
import uuid from "uuid";

class CampaignMessagesEdit extends React.Component {
    constructor() {
        super();

        this.state={
            currentID:uuid.v4()
        };

        this.savePost = this.savePost.bind(this);
    }

    savePost(message) {
        //console.log("MODAL_SAVE_VALUE", message);
        if (!message._id) {
            message._id = this.state.currentID;
        }
        this.props.onSubmit(message);
        this.props.close();
    }
    componentWillMount(){
        let currentID=uuid.v4();
        if(this.props.current){
            currentID=this.props.current._id;
        }
        this.setState({currentID});
    }

    render() {
        return (
            <div className="campaign-new-message">
                <PostCreate onSubmit={this.savePost}
                            initialValues={this.props.current}
                            controls={{
                                media: true,
                                date: false,
                                location: false,
                                preview: false,
                                discard: true,
                                draft: false
                            }}/>
            </div>
        );
    }
}

export default CampaignMessagesEdit;