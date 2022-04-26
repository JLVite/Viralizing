import React from 'react';

class ListExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <ol className="breadcrumb">
            <li><a href="#/">Home</a></li>
            <li className="active">Basic UI</li>
          </ol>
          <h1 className="page-title">List</h1>
          <div className="page-header-actions">
            <button type="button" className="btn btn-sm btn-icon btn-inverse btn-round" data-toggle="tooltip"
                    data-original-title="Edit">
              <i className="icon wb-pencil" aria-hidden="true"/>
            </button>
            <button type="button" className="btn btn-sm btn-icon btn-inverse btn-round" data-toggle="tooltip"
                    data-original-title="Refresh">
              <i className="icon wb-refresh" aria-hidden="true"/>
            </button>
            <button type="button" className="btn btn-sm btn-icon btn-inverse btn-round" data-toggle="tooltip"
                    data-original-title="Setting">
              <i className="icon wb-settings" aria-hidden="true"/>
            </button>
          </div>
        </div>
        <div className="page-content">
          {/* Panle List */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">List Style</h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-md-6 col-xl-4">
                  {/* Example Basic */}
                  <div className="example-wrap">
                    <h4 className="example-title">Basic List</h4>
                    <p>The most basic list group is simply an ordered list with list items,
                      and the proper classes. Build upon it with the options that follow,
                      or your own CSS as needed.</p>
                    <ul className="list-group list-group-full">
                      <li className="list-group-item active">1. Active</li>
                      <li className="list-group-item">2. Dapibus ac facilisis in</li>
                      <li className="list-group-item">3. Morbi leo risus</li>
                      <li className="list-group-item disabled">4. Disabled</li>
                      <li className="list-group-item">5. Vestibulum at eros</li>
                    </ul>
                  </div>
                  {/* End Example Basic */}
                </div>
                <div className="col-md-6 col-xl-4">
                  {/* Example Bordered */}
                  <div className="example-wrap">
                    <h4 className="example-title">List Group Bordered Style</h4>
                    <p>Add the <code>.list-group-bordered</code> to the wrap.</p>
                    <ul className="list-group list-group-bordered">
                      <li className="list-group-item active">1. Active</li>
                      <li className="list-group-item">2. Dapibus ac facilisis in</li>
                      <li className="list-group-item">3. Morbi leo risus</li>
                      <li className="list-group-item disabled">4. Disabled</li>
                      <li className="list-group-item">5. Vestibulum at eros</li>
                    </ul>
                  </div>
                  {/* End Example Bordered */}
                </div>
                <div className="clearfix hidden-sm-down hidden-xl-up"/>
                <div className="col-md-6 col-xl-4">
                  {/* Example List Divider */}
                  <div className="example-wrap">
                    <h4 className="example-title">List Group With Divider line</h4>
                    <p>Add the <code>.list-group-dividered</code> to the wrap.</p>
                    <ul className="list-group list-group-dividered list-group-full">
                      <li className="list-group-item active">1. Active</li>
                      <li className="list-group-item">2. Dapibus ac facilisis in</li>
                      <li className="list-group-item">3. Morbi leo risus</li>
                      <li className="list-group-item disabled">4. Disabled</li>
                      <li className="list-group-item">5. Vestibulum at eros</li>
                    </ul>
                  </div>
                  {/* End Example List Divider */}
                </div>
                <div className="clearfix hidden-lg-down"/>
                <div className="col-md-6 col-xl-4">
                  {/* Example Label-pills */}
                  <div className="example-wrap">
                    <h4 className="example-title">Label-pills List</h4>
                    <p>Add the label-pills component to any list group item and it will
                      automatically be positioned on the right.</p>
                    <ul className="list-group list-group-full">
                      <li className="list-group-item">
                        <span className="label label-pill label-success">6</span> Cras justo odio
                      </li>
                      <li className="list-group-item">
                        Dapibus ac facilisis in
                      </li>
                      <li className="list-group-item">
                        <span className="label label-pill label-danger">3</span> Morbi leo risus
                      </li>
                      <li className="list-group-item active">
                        <span className="label label-pill label-info">10</span> Porta ac consectetur ac
                      </li>
                      <li className="list-group-item">
                        Vestibulum at eros
                      </li>
                      <li className="list-group-item">
                        Ibus ac facilis
                      </li>
                    </ul>
                  </div>
                  {/* End Example Label-pills */}
                </div>
                <div className="clearfix hidden-sm-down hidden-xl-up"/>
                <div className="col-md-6 col-xl-4">
                  {/* Example Linked */}
                  <div className="example-wrap">
                    <h4 className="example-title">Linked Items</h4>
                    <p>Linkify list group items by using anchor tags instead of list items
                      (that also means a parent <code>&lt;div&gt;</code> instead of an
                      <code>&lt;ul&gt;</code>). No need for individual parents around
                      each element.</p>
                    <div className="list-group">
                      <a className="list-group-item active" href="javascript:void(0)">Cras justo odio</a>
                      <a className="list-group-item" href="javascript:void(0)">Dapibus ac facilisis in</a>
                      <a className="list-group-item" href="javascript:void(0)">Morbi leo risus</a>
                      <a className="list-group-item disabled" href="javascript:void(0)">Porta ac consectetur ac</a>
                      <a className="list-group-item" href="javascript:void(0)">Vestibulum at eros</a>
                    </div>
                  </div>
                  {/* End Example Linked */}
                </div>
                <div className="col-md-6 col-xl-4">
                  {/* Example Background */}
                  <div className="example-wrap">
                    <h4 className="example-title">Background</h4>
                    <p>Add the color by <code>.bg-*</code> to the wrap. Also your will be
                      add the class with <code>.bg-inherit</code></p>
                    <div className="list-group bg-blue-grey-100 bg-inherit">
                      <a className="list-group-item blue-grey-500" href="javascript:void(0)">
                        <i className="icon wb-inbox" aria-hidden="true"/> Inbox
                      </a>
                      <a className="list-group-item blue-grey-500" href="javascript:void(0)">
                        <i className="icon wb-user" aria-hidden="true"/> Profile visits
                      </a>
                      <a className="list-group-item blue-grey-500" href="javascript:void(0)">
                        <i className="icon wb-bell" aria-hidden="true"/> Call
                      </a>
                      <a className="list-group-item blue-grey-500" href="javascript:void(0)">
                        <i className="icon wb-envelope" aria-hidden="true"/> Messages
                      </a>
                      <a className="list-group-item blue-grey-500" href="javascript:void(0)">
                        <i className="icon wb-tag" aria-hidden="true"/> Bookmarks
                      </a>
                    </div>
                  </div>
                  {/* End Example Background */}
                </div>
                <div className="clearfix"/>
                <div className="col-md-6 col-xl-4">
                  {/* Example Contextual */}
                  <div className="example-wrap">
                    <h4 className="example-title">Contextual Classes</h4>
                    <p>Use contextual classes to style list items, default or linked. Also
                      includes <code>.active</code> state.</p>
                    <ul className="list-group list-group-gap">
                      <li className="list-group-item list-group-item-warning">Cras justo odio</li>
                      <li className="list-group-item list-group-item-success">Dapibus ac facilisis in</li>
                      <li className="list-group-item list-group-item-info">Cras sit amet nibh libero</li>
                      <li className="list-group-item list-group-item-danger">Porta ac consectetur ac</li>
                      <li className="list-group-item list-group-item-dark">Vestibulum at eros</li>
                    </ul>
                  </div>
                  {/* End Example Contextual */}
                </div>
                <div className="col-md-6 col-xl-4">
                  {/* Example Custom */}
                  <div className="example-wrap">
                    <h4 className="example-title">Custom Content</h4>
                    <p>Add nearly any HTML within, even for linked list groups like the
                      one below.</p>
                    <div className="list-group">
                      <a className="list-group-item active" href="javascript:void(0)">
                        <h4 className="list-group-item-heading">List 1</h4>
                        <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus.</p>
                      </a>
                      <a className="list-group-item" href="javascript:void(0)">
                        <h4 className="list-group-item-heading">List 2</h4>
                        <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus.</p>
                      </a>
                      <a className="list-group-item" href="javascript:void(0)">
                        <h4 className="list-group-item-heading">List 3</h4>
                        <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus.</p>
                      </a>
                    </div>
                  </div>
                  {/* End Example Custom */}
                </div>
                <div className="clearfix hidden-sm-down hidden-xl-up"/>
                <div className="col-md-6 col-xl-4">
                  {/* Example Gap */}
                  <div className="example-wrap">
                    <h4 className="example-title">With Gap</h4>
                    <p>Add the <code>.list-group-gap</code> to the wrap for gap the items.</p>
                    <ul className="list-group list-group-gap">
                      <li className="list-group-item bg-blue-grey-100">
                        <i className="icon wb-inbox" aria-hidden="true"/> Inbox
                      </li>
                      <li className="list-group-item bg-blue-grey-100">
                        <i className="icon wb-user" aria-hidden="true"/> Profile visits
                      </li>
                      <li className="list-group-item bg-blue-grey-100">
                        <i className="icon wb-bell" aria-hidden="true"/> Call
                      </li>
                      <li className="list-group-item bg-blue-grey-100">
                        <i className="icon wb-envelope" aria-hidden="true"/> Messages
                      </li>
                      <li className="list-group-item bg-blue-grey-100">
                        <i className="icon wb-tag" aria-hidden="true"/> Bookmarks
                      </li>
                    </ul>
                  </div>
                  {/* End Example Gap */}
                </div>
                <div className="clearfix hidden-lg-down"/>
                <div className="col-md-6 col-xl-4">
                  {/* Example User */}
                  <div className="example-wrap margin-lg-0">
                    <h4 className="example-title">User List</h4>
                    <p>A list item can contain an image with state.</p>
                    <ul className="list-group list-group-full">
                      <li className="list-group-item">
                        <div className="media">
                          <div className="media-left">
                            <a className="avatar" href="javascript:void(0)">
                              <img className="img-fluid"
                                   src="https://www.gravatar.com/avatar/5850bfd5fbe405631ce4fb6fef3a5021" alt="..."/>
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">Herman Beck</h4>
                            <small>CEO</small>
                          </div>
                          <div className="media-right">
                            <span className="status status-lg status-online"/>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="media">
                          <div className="media-left">
                            <a className="avatar" href="javascript:void(0)">
                              <img className="img-fluid"
                                   src="https://www.gravatar.com/avatar/5850bfd5fbe405631ce4fb6fef3a5021" alt="..."/>
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">Mary Adams</h4>
                            <small>CIO</small>
                          </div>
                          <div className="media-right">
                            <span className="status status-lg status-busy"/>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="media">
                          <div className="media-left">
                            <a className="avatar" href="javascript:void(0)">
                              <img className="img-fluid"
                                   src="https://www.gravatar.com/avatar/5850bfd5fbe405631ce4fb6fef3a5021" alt="..."/>
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">Caleb Richards</h4>
                            <small>CTO</small>
                          </div>
                          <div className="media-right">
                            <span className="status status-lg status-off"/>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="media">
                          <div className="media-left">
                            <a className="avatar" href="javascript:void(0)">
                              <img className="img-fluid"
                                   src="https://www.gravatar.com/avatar/5850bfd5fbe405631ce4fb6fef3a5021" alt="..."/>
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">June Lane</h4>
                            <small>CVO</small>
                          </div>
                          <div className="media-right">
                            <span className="status status-lg status-away"/>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* End Example User */}
                </div>
                <div className="clearfix hidden-sm-down hidden-xl-up"/>
                <div className="col-md-6 col-xl-4">
                  {/* Example Media */}
                  <div className="example-wrap">
                    <h4 className="example-title">Media List</h4>
                    <p>A list item can contain an image, user name and description.</p>
                    <ul className="list-group list-group-full">
                      <li className="list-group-item">
                        <div className="media">
                          <div className="media-left">
                            <a className="avatar avatar-online" href="javascript:void(0)">
                              <img className="img-fluid"
                                   src="https://www.gravatar.com/avatar/5850bfd5fbe405631ce4fb6fef3a5021"
                                   alt="..."/><i/></a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">Edward Fletcher</h4>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus.</p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="media">
                          <div className="media-left">
                            <a className="avatar avatar-away" href="javascript:void(0)">
                              <img className="img-fluid"
                                   src="https://www.gravatar.com/avatar/5850bfd5fbe405631ce4fb6fef3a5021"
                                   alt="..."/><i/></a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">Crystal Bates</h4>
                            <p>Porta ac consectetur ac. Porta ac consectetur ac.</p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="media">
                          <div className="media-left">
                            <a className="avatar avatar-busy" href="javascript:void(0)">
                              <img className="img-fluid"
                                   src="https://www.gravatar.com/avatar/5850bfd5fbe405631ce4fb6fef3a5021"
                                   alt="..."/><i/></a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">Nathan Watts</h4>
                            <p>Cbh libero, in gravida nulla. Nulla vel metus.</p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="media">
                          <div className="media-left">
                            <a className="avatar avatar-off" href="javascript:void(0)">
                              <img className="img-fluid"
                                   src="https://www.gravatar.com/avatar/5850bfd5fbe405631ce4fb6fef3a5021"
                                   alt="..."/><i/></a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">Heather Harper</h4>
                            <p>Bbh libero, in gravida nulla. Nulla vel metus.</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* End Example Media */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panle List */}
        </div>
      </div>
    );
  }
}

export default ListExample;
