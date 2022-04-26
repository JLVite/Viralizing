import React from 'react';
import { Translate } from 'react-redux-i18n';

class InputMessages extends React.Component {
  constructor() {
    super();

    this.selectMessage = this.selectMessage.bind(this);
  }

  selectMessage(message) {
    let component = this;
    return function () {
      component.props.input.onChange(message);
    };
  }

  render() {
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.messages.invites.edit.form.message.' + key;
    };
    let { messages } = this.props;
    let { value } = this.props.input;
    return (
      <div className="messages-list">
        <div className="row">
          {messages.map((m, i) => (
            <div className={'message-item col-md-12 ' + (m._id === value._id ? 'active' : '')} key={i}
                 onClick={this.selectMessage(m)}>
              <div className="selected">
                <i className="icon wb-check"></i>
              </div>
              <div className="content">
                <div className="description">
                  <div className="message">{m.message}</div>
                </div>
                <div className="media">
                  <img src={m.media} alt="" className="media-element"/>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a className="btn btn-primary btn-block"><Translate value={getTranslation('new')}/></a>
      </div>
    );
  }
}

export default InputMessages;
