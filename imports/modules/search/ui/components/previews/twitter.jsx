import React from "react";
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import anchorme from "anchorme";

class TwitterPreview extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        let tweet=this.props.data;
        return (
            <div className="twitter-preview">
                <div className="network">
                    <i className="social-icon twitter"/>
                </div>
                <a href={"https://twitter.com/"+tweet.user.screenName} target="_blank" className="profile">
                    <div className="avatar">
                        <img src={tweet.user.avatar} alt={tweet.user.name}/>
                    </div>
                    <div className="information">
                        <div className="name">
                            {tweet.user.name}
                        </div>
                        <div className="screen-name">
                            @{tweet.user.screenName}
                            {tweet.date && (
                                <span className="time">{moment(new Date(tweet.date)).fromNow()}</span>
                            )}
                        </div>
                    </div>
                </a>
                <div className="post">
                    <div className="message" dangerouslySetInnerHTML={{__html: anchorme(tweet.description, {attributes:[{name:"target", value:"_blank" }]})}}/>
                    {tweet.media.url && tweet.media.type==="photo" && (
                        <div className="media">
                            <img src={tweet.media.url} alt={tweet.description}/>
                        </div>
                    )}
                    {tweet.media.url && tweet.media.type==="video" &&(
                        <div className="video">
                            <Video loop muted
                                   controls={['PlayPause', 'Seek', 'Time', 'Volume']}
                                   poster={tweet.media.preview}>
                                <source src={tweet.media.url} type="video/mp4" />
                            </Video>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default TwitterPreview;