import React from "react";

class ActionNetworks extends React.Component {
    render() {
        let {toggleNetwork, currentInvite}= this.props;
        return (
            <div>
                <ul className="profile-list">
                    <li onClick={toggleNetwork("twitter")}>
                        <i className={"social-icon twitter "+(currentInvite.networks.twitter?"":"disabled")}/>
                    </li>
                    <li onClick={toggleNetwork("facebook")}>
                        <i className={"social-icon facebook "+(currentInvite.networks.facebook?"":"disabled")}/>
                    </li>
                    <li onClick={toggleNetwork("instagram")}>
                        <i className={"social-icon instagram "+(currentInvite.networks.instagram?"":"disabled")}/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ActionNetworks;
