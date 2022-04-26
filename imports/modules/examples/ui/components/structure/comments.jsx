import React from 'react';

class CommentsExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Comments</h1>
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
          {/* Panel Comments */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Comments</h3>
            </div>
            <div className="panel-body container-fluid">
              <p>User comment style for using various pages of components (like blog,
                tweets, etc) that feature a left- or right-aligned avatar avatar-lgalongside
                textual content. You can use the basic class <code>.comments</code>.</p>
              <div className="row row-lg">
                <div className="col-md-6">
                  {/* Example Avatar */}
                  <div className="example-wrap">
                    <h4 className="example-title">Avatar</h4>
                    <p>A comment can contain an image or avatar</p>
                    <div className="example">
                      <div className="comment media">
                        <div className="pr-20">
                          <a className="avatar avatar-lg" href="javascript:void(0)">
                            <img src="http://getbootstrapadmin.com/remark/global/portraits/1.jpg" alt="..."/>
                          </a>
                        </div>
                        <div className="comment-body media-body">
                          <a className="comment-author" href="javascript:void(0)">Herman Beck</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Avatar */}
                </div>
                <div className="col-md-6">
                  {/* Example Metadata */}
                  <div className="example-wrap">
                    <h4 className="example-title">Metadata</h4>
                    <p>A comment can contain metadata about the comment, an arbitrary
                      amount of metadata may be defined.</p>
                    <div className="example">
                      <div className="comment media">
                        <div className="pr-20">
                          <a className="avatar avatar-lg" href="javascript:void(0)">
                            <img src="http://getbootstrapadmin.com/remark/global/portraits/2.jpg" alt="..."/>
                          </a>
                        </div>
                        <div className="comment-body media-body">
                          <a className="comment-author" href="javascript:void(0)">Mary Adams</a>
                          <div className="comment-meta">
                            <span className="date">Just now</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Metadata */}
                </div>
                <div className="col-md-6">
                  {/* Example Actions */}
                  <div className="example-wrap">
                    <h4 className="example-title">Actions</h4>
                    <p>A comment can contain an list of actions a user may perform related
                      to this comment.</p>
                    <div className="example">
                      <div className="comment media">
                        <div className="pr-20">
                          <a className="avatar avatar-lg" href="javascript:void(0)">
                            <img src="http://getbootstrapadmin.com/remark/global/portraits/3.jpg" alt="..."/>
                          </a>
                        </div>
                        <div className="comment-body media-body">
                          <a className="comment-author" href="javascript:void(0)">Caleb Richards</a>
                          <div className="comment-content">
                            <p>Elliot you are always so right :)</p>
                          </div>
                          <div className="comment-actions">
                            <a className="text-like icon wb-heart" href="javascript:void(0)" role="button"/>
                            <a href="javascript:void(0)" role="button">Reply</a>
                            <a href="javascript:void(0)" role="button">Edit</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Actions */}
                </div>
                <div className="col-md-6">
                  {/* Example Reply Form */}
                  <div className="example-wrap">
                    <h4 className="example-title">Reply Form</h4>
                    <p>A comment can contain a form to reply to a comment. This may have
                      arbitrary content.</p>
                    <div className="example">
                      <div className="comment media">
                        <div className="pr-20">
                          <a className="avatar avatar-lg" href="javascript:void(0)">
                            <img src="http://getbootstrapadmin.com/remark/global/portraits/4.jpg" alt="..."/>
                          </a>
                        </div>
                        <div className="comment-body media-body">
                          <a className="comment-author" href="javascript:void(0)">June Lane</a>
                          <div className="comment-meta">
                            <span className="date">5 days ago</span>
                          </div>
                          <div className="comment-content">
                            <p>Dude, this is awesome. Thanks so much</p>
                          </div>
                          <div className="comment-actions">
                            <a className="active" href="javascript:void(0)" role="button">Reply</a>
                          </div>
                          <form className="comment-reply" action="#" method="post">
                            <div className="form-group">
                              <textarea className="form-control" rows={5} placeholder="Comment here" defaultValue={''}/>
                            </div>
                            <div className="form-group">
                              <button type="submit" className="btn btn-primary">Reply</button>
                              <button type="button" className="btn btn-link blue-grey-500">Close</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Avatar */}
                </div>
              </div>
            </div>
          </div>
          {/* Panel Comments Full */}
          <div className="panel">
            <div className="panel-body">
              <div className="comments mx-20">
                <h3>Comments</h3>
                <div className="comment media">
                  <div className="pr-20">
                    <a className="avatar avatar-lg" href="javascript:void(0)">
                      <img src="http://getbootstrapadmin.com/remark/global/portraits/5.jpg" alt="..."/>
                    </a>
                  </div>
                  <div className="media-body">
                    <div className="comment-body">
                      <a className="comment-author" href="javascript:void(0)">Edward Fletcher</a>
                      <div className="comment-meta">
                        <span className="date">Yesterday at 12:30AM</span>
                      </div>
                      <div className="comment-content">
                        <p>eniam ipsum pariatur anim labore sunt duis officia labore.
                          Occaecat sunt ipsum eu ad nostrud do in. Ea aliqua officia
                          magna laborum quis proident. Irure ullamco aliquip esse ipsum.
                          Exercitation enim dolore commodo mollit non laboris et velit
                          adipisicing. Nulla labore sint aliqua minim ad qui. Minim
                          sint aliqua magna anim duis laborum quis officia. Veniam
                          nostrud aliqua in anim. Pariatur elit ad ea incididunt aliquip.
                          Mollit Lorem in magna magna irure commodo do est ullamco.
                        </p>
                      </div>
                      <div className="comment-actions">
                        <a className="text-like active icon wb-heart" href="javascript:void(0)" role="button"/>
                        <a href="javascript:void(0)" role="button">Reply</a>
                      </div>
                    </div>
                    <div className="comments">
                      <div className="comment media">
                        <div className="pr-20">
                          <a className="avatar avatar-lg" href="javascript:void(0)">
                            <img src="http://getbootstrapadmin.com/remark/global/portraits/6.jpg" alt="..."/>
                          </a>
                        </div>
                        <div className="comment-body media-body">
                          <a className="comment-author" href="javascript:void(0)">Crystal Bates</a>
                          <div className="comment-meta">
                            <span className="date">Just now</span>
                          </div>
                          <div className="comment-content">
                            <p>Fletcher you are always so right :)</p>
                          </div>
                          <div className="comment-actions">
                            <a className="text-like icon wb-heart" href="javascript:void(0)" role="button"/>
                            <a href="javascript:void(0)" role="button">Reply</a>
                          </div>
                        </div>
                      </div>
                      <div className="comment media">
                        <div className="pr-20">
                          <a className="avatar avatar-lg" href="javascript:void(0)">
                            <img src="http://getbootstrapadmin.com/remark/global/portraits/5.jpg" alt="..."/>
                          </a>
                        </div>
                        <div className="comment-body media-body">
                          <a className="comment-author" href="javascript:void(0)">Edward Fletcher</a>
                          <div className="comment-meta">
                            <span className="date">Just now</span>
                          </div>
                          <div className="comment-content">
                            <p>Yes, That's really awesome!</p>
                          </div>
                          <div className="comment-actions">
                            <a className="text-like icon wb-heart" href="javascript:void(0)" role="button"/>
                            <a href="javascript:void(0)" role="button">Reply</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment media">
                  <div className="pr-20">
                    <a className="avatar avatar-lg" href="javascript:void(0)">
                      <img src="http://getbootstrapadmin.com/remark/global/portraits/7.jpg" alt="..."/>
                    </a>
                  </div>
                  <div className="comment-body media-body">
                    <a className="comment-author" href="javascript:void(0)">Nathan Watts</a>
                    <div className="comment-meta">
                      <span className="date">5 days ago</span>
                    </div>
                    <div className="comment-content">
                      <p>Dude, this is awesome. Thanks so much</p>
                    </div>
                    <div className="comment-actions">
                      <a className="text-like icon wb-heart" href="javascript:void(0)" role="button"/>
                      <a className="active" href="javascript:void(0)" role="button">Reply</a>
                    </div>
                    <form className="comment-reply" action="#" method="post">
                      <div className="form-group">
                        <textarea className="form-control" rows={5} placeholder="Comment here" defaultValue={''}/>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary">Comment</button>
                        <button type="button" className="btn btn-link blue-grey-500">close</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="comment media">
                  <div className="pr-20">
                    <a className="avatar avatar-lg" href="javascript:void(0)">
                      <img src="http://getbootstrapadmin.com/remark/global/portraits/8.jpg" alt="..."/>
                    </a>
                  </div>
                  <div className="comment-body media-body">
                    <a className="comment-author" href="javascript:void(0)">Heather Harper</a>
                    <div className="comment-meta">
                      <span className="date">5 days ago</span>
                    </div>
                    <div className="comment-content">
                      <p>Lorem ipsum Ullamco fugiat esse culpa consequat velit veniam
                        incididunt incididunt nostrud labore nostrud sit dolore in
                        nulla sit non laborum.</p>
                    </div>
                    <div className="comment-actions">
                      <a className="text-like icon wb-heart" href="javascript:void(0)" role="button"/>
                      <a href="javascript:void(0)" role="button">Reply</a>
                    </div>
                  </div>
                </div>
                <form className="comments-add mt-35" action="#" method="post">
                  <h3 className="mb-35">Leave A Reply</h3>
                  <div className="form-group">
                    <input type="text" className="form-control" name="name" placeholder="Name"/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" name="email" placeholder="Email"/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="email" placeholder="Website"/>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" rows={5} placeholder="Comment here" defaultValue={''}/>
                  </div>
                  <div className="form-group">
                    <button type="button" className="btn btn-primary">Comment</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* End Panel Comments Full */}
        </div>
      </div>
    );
  }
}

export default CommentsExample;
