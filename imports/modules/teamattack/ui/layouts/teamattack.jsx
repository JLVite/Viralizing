import React from "react";

class TeamAttack extends React.Component {
    render() {
        let filter = (obj) => {
            let newProps = {};
	        let key;
	        for (key in obj) {
                if (key !== "children") {
                    newProps[key] = obj[key];
                }
            }
            return newProps;
        };
        return (
        <div className="page-content container-fluid">
            {React.cloneElement(this.props.children, filter(this.props))}
        </div>
        );
    }
}

export default TeamAttack;
