import React from "react";
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import anchorme from "anchorme";

class InstagramPreview extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        let post=this.props.data;
        return (
            <div className="instagram-preview">
                <div className="network">
                    <i className="social-icon instagram"/>
                </div>

                <a href={"https://instagram.com/"+post.user.screenName} target="_blank" className="profile">
                    <div className="avatar">
                        <img src={post.user.avatar} alt={post.user.name}/>
                    </div>
                    <div className="information">
                        <div className="name">
                            {post.user.name}
                        </div>
                    </div>
                    <div className="time">
                        <i className="icon wb-time" aria-hidden="true"/>
                        {moment(new Date(post.date)).fromNow()}
                    </div>
                </a>
                <div className="post">
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

                    <div className="message">
                        <span className="name">{post.user.name}</span>
                        <span dangerouslySetInnerHTML={{__html: anchorme(post.description, {attributes:[{name:"target", value:"_blank" }]})}}/>
                    </div>

                </div>
            </div>
        );
    }
}

export default InstagramPreview;