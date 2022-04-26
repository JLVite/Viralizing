import React from "react";
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import anchorme from "anchorme";

class FacebookPreview extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        let post=this.props.data;
        let {showBadge}=this.props;
        return (
            <div className="facebook-preview">
                {showBadge!==false && (
                    <div className="network">
                        <i className="social-icon facebook"/>
                    </div>
                )}

                <a href={post.link?post.link:"https://facebook.com/"+post.user.screenName} target="_blank" className="profile">
                    <div className="avatar">
                        <img src={post.user.avatar} alt={post.user.name}/>
                    </div>
                    <div className="information">
                        <div className="name">
                            {post.user.name}
                        </div>
                        <div className="time">
                            {moment(new Date(post.date)).fromNow()}
                        </div>
                    </div>
                </a>
                <div className="post">
                    <div className="message" dangerouslySetInnerHTML={{__html: anchorme(post.description, {attributes:[{name:"target", value:"_blank" }]})}}/>
                    {post.media.url && post.media.type==="photo" && (
                        <div className="media">
                            <img src={post.media.url} alt={post.description}/>
                        </div>
                    )}
                    {post.media.url && post.media.type==="video" &&(
                        <div className="video">
                            <Video loop muted
                                   controls={['PlayPause', 'Seek', 'Time', 'Volume']}
                                   poster={post.media.preview}>
                                <source src={post.media.url} type="video/mp4" />
                            </Video>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default FacebookPreview;