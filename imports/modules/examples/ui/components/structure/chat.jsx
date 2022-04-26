import React from 'react';

class ChatExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Chat</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="../index.html">Home</a></li>
            <li className="breadcrumb-item active">Structure</li>
          </ol>
          <div className="page-header-actions">
            <form>
              <div className="input-search input-search-dark">
                <i className="input-search-icon wb-search" aria-hidden="true"/>
                <input type="text" className="form-control" name placeholder="Search..."/>
              </div>
            </form>
          </div>
        </div>
        <div className="page-content">
          {/* Panel Title */}
          <div className="panel">
            <div className="panel-body">
              <div className="chat-box">
                <div className="chats">
                  <div className="chat">
                    <div className="chat-avatar">
                      <a className="avatar" data-toggle="tooltip" href="#" data-placement="right" title="June Lane">
                        <img src="http://getbootstrapadmin.com/remark/global/portraits/4.jpg" alt="June Lane"/>
                      </a>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>
                          Hello. What can I do for you?
                        </p>
                        <time className="chat-time" dateTime="2017-06-01T08:30">8:30 am</time>
                      </div>
                    </div>
                  </div>
                  <div className="chat chat-left">
                    <div className="chat-avatar">
                      <a className="avatar" data-toggle="tooltip" href="#" data-placement="left"
                         title="Edward Fletcher">
                        <img src="http://getbootstrapadmin.com/remark/global/portraits/5.jpg" alt="Edward Fletcher"/>
                      </a>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>
                          I'm just looking around.
                        </p>
                        <p>Will you tell me something about yourself? </p>
                        <time className="chat-time" dateTime="2017-06-01T08:35">8:35 am</time>
                      </div>
                      <div className="chat-content">
                        <p>
                          Are you there? That time!
                        </p>
                        <time className="chat-time" dateTime="2017-06-01T08:40">8:40 am</time>
                      </div>
                    </div>
                  </div>
                  <div className="chat">
                    <div className="chat-avatar">
                      <a className="avatar" data-toggle="tooltip" href="#" data-placement="right" title="June Lane">
                        <img src="http://getbootstrapadmin.com/remark/global/portraits/4.jpg" alt="June Lane"/>
                      </a>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>
                          Where?
                        </p>
                        <time className="chat-time" dateTime="2017-06-01T08:35">8:35 am</time>
                      </div>
                      <div className="chat-content">
                        <p>
                          OK, my name is Limingqiang. I like singing, playing basketballand so on.
                        </p>
                        <time className="chat-time" dateTime="2017-06-01T08:42">8:42 am</time>
                      </div>
                    </div>
                  </div>
                  <div className="chat chat-left">
                    <div className="chat-avatar">
                      <a className="avatar" data-toggle="tooltip" href="#" data-placement="left"
                         title="Edward Fletcher">
                        <img src="http://getbootstrapadmin.com/remark/global/portraits/5.jpg" alt="Edward Fletcher"/>
                      </a>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>You wait for notice.</p>
                      </div>
                      <div className="chat-content">
                        <p>Consectetuorem ipsum dolor sit?</p>
                        <time className="chat-time" dateTime="2017-06-01T08:50">8:50 am</time>
                      </div>
                      <div className="chat-content">
                        <p>OK?</p>
                        <time className="chat-time" dateTime="2017-06-01T08:55">8:55 am</time>
                      </div>
                    </div>
                  </div>
                  <div className="chat">
                    <div className="chat-avatar">
                      <a className="avatar" data-toggle="tooltip" href="#" data-placement="right" title="June Lane">
                        <img src="http://getbootstrapadmin.com/remark/global/portraits/4.jpg" alt="June Lane"/>
                      </a>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>OK!</p>
                        <time className="chat-time" dateTime="2017-06-01T09:00">9:00 am</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-footer">
              <form>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Say something"/>
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">Send</button>
                  </span>
                </div>
              </form>
            </div>
          </div>
          {/* End Panel Title */}
        </div>
      </div>
    );
  }
}

export default ChatExample;
