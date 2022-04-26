import React from 'react';
import SocialAvatar from '../../../core/ui/components/social-avatar';

class HeaderGroups extends React.Component {
  constructor() {
    super();

    this.changeGroup = this.changeGroup.bind(this);
  }

  changeGroup(e) {
    let val = e.target.value;
    this.props.refetch({
      tag: val
    });
  }

  render() {
    return (
      <div className="list">
        <div className="select-wrap">
          <select onChange={this.changeGroup}>
            {this.props.groups.map((g, i) => (
              <option value={g} key={i}>{g}</option>
            ))}
          </select>
          <i className="caret"/>
        </div>
        <ul className="profile-list">
          {this.props.accounts.map((a, i) => (
            <li key={i}>
              <SocialAvatar avatar={a.information.avatar}
                            network={a.network}
                            name={(a.information.name || '') + ' ' + (a.information.lastName || '')}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HeaderGroups;
