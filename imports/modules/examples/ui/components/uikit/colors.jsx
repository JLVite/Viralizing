import React from 'react';

class ColorsExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="../index.html">Home</a></li>
            <li className="breadcrumb-item active">Basic UI</li>
          </ol>
          <h1 className="page-title">Colors</h1>
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
          {/* Panel */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Style</h3>
            </div>
            <div className="panel-body container-fluid">
              {/* Example Base Color Palette */}
              <div className="example-wrap">
                <h4 className="example-title">Base Color Palette</h4>
                <p>The dashboard will synergize with the colour selection made by the
                  user and appropriately amend. Similarly, all other elements will
                  sync according to the base colours.
                </p>
                <div className="example color-primaries">
                  <div className="bg-blue-grey-200">#e4eaec</div>
                  <div className="bg-blue-grey-600">#526069</div>
                  <div className="bg-blue-600">#62a8ea</div>
                  <div className="bg-cyan-600">#57c7d4</div>
                  <div className="bg-teal-600">#3aa99e</div>
                  <div className="bg-orange-600">#f2a654</div>
                  <div className="bg-red-600">#f96868</div>
                  <div className="bg-purple-600">#926dde</div>
                </div>
              </div>
              {/* End Example Base Color Palette */}
              {/* Example Color Palette */}
              <div className="example-wrap">
                <h4 className="example-title">Color Palette</h4>
                <p>This color palette comprises primary and accent colors that can be
                  used for illustration or to develop your brand colors.
                  <br/> They've been designed to work harmoniously with each other.</p>
                <p className="mb-30">The color palette starts with primary colors and fills in the spectrum
                  to create a complete and usable palette for web
                  <br/> project. We suggests using the 500 colors as the primary colors
                  in your project and the other colors as accents colors.</p>
                <div className="row row-lg color-palette">
                  <div className="col-md-4 col-lg-3">
                    <h5 className="text-uppercase">red</h5>
                    <ul className="list-group">
                      <li className="bg-red-800 list-group-item">
                        <span>800</span> /
                        <span>#d6494b</span>
                      </li>
                      <li className="bg-red-700 list-group-item">
                        <span>700</span> /
                        <span>#e9595b</span>
                      </li>
                      <li className="bg-red-600 list-group-item">
                        <span>600</span> /
                        <span>#f96868</span>
                      </li>
                      <li className="bg-red-500 list-group-item">
                        <span>500</span> /
                        <span>#fa7a7a</span>
                      </li>
                      <li className="bg-red-400 blue-grey-700 list-group-item">
                        <span>400</span> /
                        <span>#fa9898</span>
                      </li>
                      <li className="bg-red-300 blue-grey-700 list-group-item">
                        <span>300</span> /
                        <span>#fab4b4</span>
                      </li>
                      <li className="bg-red-200 blue-grey-700 list-group-item">
                        <span>200</span> /
                        <span>#fad3d3</span>
                      </li>
                      <li className="bg-red-100 blue-grey-700 list-group-item">
                        <span>100</span> /
                        <span>#ffeaea</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <h5 className="text-uppercase">pink</h5>
                    <ul className="list-group">
                      <li className="bg-pink-800 list-group-item">
                        <span>800</span> /
                        <span>#e53b75</span>
                      </li>
                      <li className="bg-pink-700 list-group-item">
                        <span>700</span> /
                        <span>#f44c87</span>
                      </li>
                      <li className="bg-pink-600 list-group-item">
                        <span>600</span> /
                        <span>#f96197</span>
                      </li>
                      <li className="bg-pink-500 list-group-item">
                        <span>500</span> /
                        <span>#f978a6</span>
                      </li>
                      <li className="bg-pink-400 blue-grey-700 list-group-item">
                        <span>400</span> /
                        <span>#fb8db4</span>
                      </li>
                      <li className="bg-pink-300 blue-grey-700 list-group-item">
                        <span>300</span> /
                        <span>#fba9c6</span>
                      </li>
                      <li className="bg-pink-200 blue-grey-700 list-group-item">
                        <span>200</span> /
                        <span>#ffccde</span>
                      </li>
                      <li className="bg-pink-100 blue-grey-700 list-group-item">
                        <span>100</span> /
                        <span>#fce4ec</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <h5 className="text-uppercase">purple</h5>
                    <ul className="list-group">
                      <li className="bg-purple-800 list-group-item">
                        <span>800</span> /
                        <span>#6d45bc</span>
                      </li>
                      <li className="bg-purple-700 list-group-item">
                        <span>700</span> /
                        <span>#7c51d1</span>
                      </li>
                      <li className="bg-purple-600 list-group-item">
                        <span>600</span> /
                        <span>#926dde</span>
                      </li>
                      <li className="bg-purple-500 list-group-item">
                        <span>500</span> /
                        <span>#a58add</span>
                      </li>
                      <li className="bg-purple-400 blue-grey-700 list-group-item">
                        <span>400</span> /
                        <span>#bba7e4</span>
                      </li>
                      <li className="bg-purple-300 blue-grey-700 list-group-item">
                        <span>300</span> /
                        <span>#d2c5ec</span>
                      </li>
                      <li className="bg-purple-200 blue-grey-700 list-group-item">
                        <span>200</span> /
                        <span>#e3dbf4</span>
                      </li>
                      <li className="bg-purple-100 blue-grey-700 list-group-item">
                        <span>100</span> /
                        <span>#f6f2ff</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <h5 className="text-uppercase">indigo</h5>
                    <ul className="list-group">
                      <li className="bg-indigo-800 list-group-item">
                        <span>800</span> /
                        <span>#465bd4</span>
                      </li>
                      <li className="bg-indigo-700 list-group-item">
                        <span>700</span> /
                        <span>#5166d6</span>
                      </li>
                      <li className="bg-indigo-600 list-group-item">
                        <span>600</span> /
                        <span>#677ae4</span>
                      </li>
                      <li className="bg-indigo-500 list-group-item">
                        <span>500</span> /
                        <span>#8897ec</span>
                      </li>
                      <li className="bg-indigo-400 blue-grey-700 list-group-item">
                        <span>400</span> /
                        <span>#9daaf3</span>
                      </li>
                      <li className="bg-indigo-300 blue-grey-700 list-group-item">
                        <span>300</span> /
                        <span>#bcc5f4</span>
                      </li>
                      <li className="bg-indigo-200 blue-grey-700 list-group-item">
                        <span>200</span> /
                        <span>#dadef5</span>
                      </li>
                      <li className="bg-indigo-100 blue-grey-700 list-group-item">
                        <span>100</span> /
                        <span>#edeff9</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <h5 className="text-uppercase">blue</h5>
                    <ul className="list-group">
                      <li className="bg-blue-800 list-group-item">
                        <span>800</span> /
                        <span>#3583ca</span>
                      </li>
                      <li className="bg-blue-700 list-group-item">
                        <span>700</span> /
                        <span>#4e97d9</span>
                      </li>
                      <li className="bg-blue-600 list-group-item">
                        <span>600</span> /
                        <span>#62a8ea</span>
                      </li>
                      <li className="bg-blue-500 list-group-item">
                        <span>500</span> /
                        <span>#89bceb</span>
                      </li>
                      <li className="bg-blue-400 blue-grey-700 list-group-item">
                        <span>400</span> /
                        <span>#a2caee</span>
                      </li>
                      <li className="bg-blue-300 blue-grey-700 list-group-item">
                        <span>300</span> /
                        <span>#bcd8f1</span>
                      </li>
                      <li className="bg-blue-200 blue-grey-700 list-group-item">
                        <span>200</span> /
                        <span>#d5e4f1</span>
                      </li>
                      <li className="bg-blue-100 blue-grey-700 list-group-item">
                        <span>100</span> /
                        <span>#e8f1f8</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <h5 className="text-uppercase">cyan</h5>
                    <ul className="list-group">
                      <li className="bg-cyan-800 list-group-item">
                        <span>800</span> /
                        <span>#37a9b7</span>
                      </li>
                      <li className="bg-cyan-700 list-group-item">
                        <span>700</span> /
                        <span>#47b8c6</span>
                      </li>
                      <li className="bg-cyan-600 list-group-item">
                        <span>600</span> /
                        <span>#57c7d4</span>
                      </li>
                      <li className="bg-cyan-500 list-group-item">
                        <span>500</span> /
                        <span>#77d6e1</span>
                      </li>
                      <li className="bg-cyan-400 blue-grey-700 list-group-item">
                        <span>400</span> /
                        <span>#9ae1e9</span>
                      </li>
                      <li className="bg-cyan-300 blue-grey-700 list-group-item">
                        <span>300</span> /
                        <span>#baeaef</span>
                      </li>
                      <li className="bg-cyan-200 blue-grey-700 list-group-item">
                        <span>200</span> /
                        <span>#d3eff2</span>
                      </li>
                      <li className="bg-cyan-100 blue-grey-700 list-group-item">
                        <span>100</span> /
                        <span>#ecf9fa</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <h5 className="text-uppercase">teal</h5>
                    <ul className="list-group">
                      <li className="bg-teal-800 list-group-item">
                        <span>800</span> /
                        <span>#178d81</span>
                      </li>
                      <li className="bg-teal-700 list-group-item">
                        <span>700</span> /
                        <span>#269b8f</span>
                      </li>
                      <li className="bg-teal-600 list-group-item">
                        <span>600</span> /
                        <span>#3aa99e</span>
                      </li>
                      <li className="bg-teal-500 list-group-item">
                        <span>500</span> /
                        <span>#56bfb5</span>
                      </li>
                      <li className="bg-teal-400 blue-grey-700 list-group-item">
                        <span>400</span> /
                        <span>#79d1c9</span>
                      </li>
                      <li className="bg-teal-300 blue-grey-700 list-group-item">
                        <span>300</span> /
                        <span>#99e1da</span>
                      </li>
                      <li className="bg-teal-200 blue-grey-700 list-group-item">
                        <span>200</span> /
                        <span>#cdf4f1</span>
                      </li>
                      <li className="bg-teal-100 blue-grey-700 list-group-item">
                        <span>100</span> /
                        <span>#ecfdfc</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <h5 className="text-uppercase">green</h5>
                    <ul className="list-group">
                      <li className="bg-green-800 list-group-item">
                        <span>800</span> /
                        <span>#279566</span>
                      </li>
                      <li className="bg-green-700 list-group-item">
                        <span>700</span> /
                        <span>#36ab7a</span>
                      </li>
                      <li className="bg-green-600 list-group-item">
                        <span>600</span> /
                        <span>#46be8a</span>
                      </li>
                      <li className="bg-green-500 list-group-item">
                        <span>500</span> /
                        <span>#5cd29d</span>
                      </li>
                      <li className="bg-green-400 blue-grey-700 list-group-item">
                        <span>400</span> /
                        <span>#7dd3ae</span>
                      </li>
                      <li className="bg-green-300 blue-grey-700 list-group-item">
                        <span>300</span> /
                        <span>#9fe5c5</span>
                      </li>
                      <li className="bg-green-200 blue-grey-700 list-group-item">
                        <span>200</span> /
                        <span>#bfedd8</span>
                      </li>
                      <li className="bg-green-100 blue-grey-700 list-group-item">
                        <span>100</span> /
                        <span>#e7faf2</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <h5 className="text-uppercase">light-green</h5>
                    <ul className="list-group">
                      <li className="bg-light-green-800 list-group-item">
                        <span>800</span> /
                        <span>#70a532</span>
                      </li>
                      <li className="bg-light-green-700 list-group-item">
                        <span>700</span> /
                        <span>#83b944</span>
                      </li>
                      <li className="bg-light-green-600 list-group-item">
                        <span>600</span> /
                        <span>#9ece67</span>
                      </li>
                      <li className="bg-light-green-500 list-group-item">
                        <span>500</span> /
                        <span>#acd57c</span>
                      </li>
                      <li className="bg-light-green-400 blue-grey-700 list-group-item">
                        <span>400</span> /
                        <span>#bad896</span>
                      </li>
                      <li className="bg-light-green-300 blue-grey-700 list-group-item">
                        <span>300</span> /
                        <span>#cadfb1</span>
                      </li>
                      <li className="bg-light-green-200 blue-grey-700 list-group-item">
                        <span>200</span> /
                        <span>#e0ecd1</span>
                      </li>
                      <li className="bg-light-green-100 blue-grey-700 list-group-item">
                        <span>100</span> /
                        <span>#f1f7ea</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <h5 className="text-uppercase">yellow</h5>
                    <ul className="list-group">
                      <li className="bg-yellow-800 list-group-item">
                        <span>800</span> /
                        <span>#fbc02d</span>
                      </li>
                      <li className="bg-yellow-700 list-group-item">
                        <span>700</span> /
                        <span>#f9cd48</span>
                      </li>
                      <li className="bg-yellow-600 list-group-item">
                        <span>600</span> /
                        <span>#f7da64</span>
                      </li>
                      <li className="bg-yellow-500 list-group-item">
                        <span>500</span> /
                        <span>#f7e083</span>
                      </li>
                      <li className="bg-yellow-400 blue-grey-700 list-group-item">
                        <span>400</span> /
                        <span>#f8e59b</span>
                      </li>
                      <li className="bg-yellow-300 blue-grey-700 list-group-item">
                        <span>300</span> /
                        <span>#f6e7a9</span>
                      </li>
                      <li className="bg-yellow-200 blue-grey-700 list-group-item">
                        <span>200</span> /
                        <span>#f9eec1</span>
                      </li>
                      <li className="bg-yellow-100 blue-grey-700 list-group-item">
                        <span>100</span> /
                        <span>#fffae7</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <h5 className="text-uppercase">orange</h5>
                    <ul className="list-group">
                      <li className="bg-orange-800 list-group-item">
                        <span>800</span> /
                        <span>#e98f2e</span>
                      </li>
                      <li className="bg-orange-700 list-group-item">
                        <span>700</span> /
                        <span>#ec9940</span>
                      </li>
                      <li className="bg-orange-600 list-group-item">
                        <span>600</span> /
                        <span>#f2a654</span>
                      </li>
                      <li className="bg-orange-500 list-group-item">
                        <span>500</span> /
                        <span>#f4b066</span>
                      </li>
                      <li className="bg-orange-400 blue-grey-700 list-group-item">
                        <span>400</span> /
                        <span>#f6be80</span>
                      </li>
                      <li className="bg-orange-300 blue-grey-700 list-group-item">
                        <span>300</span> /
                        <span>#fbce9d</span>
                      </li>
                      <li className="bg-orange-200 blue-grey-700 list-group-item">
                        <span>200</span> /
                        <span>#ffddb9</span>
                      </li>
                      <li className="bg-orange-100 blue-grey-700 list-group-item">
                        <span>100</span> /
                        <span>#fff3e6</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <h5 className="text-uppercase">brown</h5>
                    <ul className="list-group">
                      <li className="bg-brown-800 list-group-item">
                        <span>800</span> /
                        <span>#715146</span>
                      </li>
                      <li className="bg-brown-700 list-group-item">
                        <span>700</span> /
                        <span>#7d5b4f</span>
                      </li>
                      <li className="bg-brown-600 list-group-item">
                        <span>600</span> /
                        <span>#8d6658</span>
                      </li>
                      <li className="bg-brown-500 list-group-item">
                        <span>500</span> /
                        <span>#a17768</span>
                      </li>
                      <li className="bg-brown-400 blue-grey-700 list-group-item">
                        <span>400</span> /
                        <span>#b98e7e</span>
                      </li>
                      <li className="bg-brown-300 blue-grey-700 list-group-item">
                        <span>300</span> /
                        <span>#d3aa9c</span>
                      </li>
                      <li className="bg-brown-200 blue-grey-700 list-group-item">
                        <span>200</span> /
                        <span>#e2bdaf</span>
                      </li>
                      <li className="bg-brown-100 blue-grey-700 list-group-item">
                        <span>100</span> /
                        <span>#fae6df</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <h5 className="text-uppercase">grey</h5>
                    <ul className="list-group">
                      <li className="bg-grey-800 list-group-item">
                        <span>800</span> /
                        <span>#424242</span>
                      </li>
                      <li className="bg-grey-700 list-group-item">
                        <span>700</span> /
                        <span>#616161</span>
                      </li>
                      <li className="bg-grey-600 list-group-item">
                        <span>600</span> /
                        <span>#757575</span>
                      </li>
                      <li className="bg-grey-500 list-group-item">
                        <span>500</span> /
                        <span>#9e9e9e</span>
                      </li>
                      <li className="bg-grey-400 blue-grey-700 list-group-item">
                        <span>400</span> /
                        <span>#bdbdbd</span>
                      </li>
                      <li className="bg-grey-300 blue-grey-700 list-group-item">
                        <span>300</span> /
                        <span>#e0e0e0</span>
                      </li>
                      <li className="bg-grey-200 blue-grey-700 list-group-item">
                        <span>200</span> /
                        <span>#eeeeee</span>
                      </li>
                      <li className="bg-grey-100 blue-grey-700 list-group-item">
                        <span>100</span> /
                        <span>#fafafa</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <h5 className="text-uppercase">blue-grey</h5>
                    <ul className="list-group">
                      <li className="bg-blue-grey-800 list-group-item">
                        <span>800</span> /
                        <span>#263238</span>
                      </li>
                      <li className="bg-blue-grey-700 list-group-item">
                        <span>700</span> /
                        <span>#37474f</span>
                      </li>
                      <li className="bg-blue-grey-600 list-group-item">
                        <span>600</span> /
                        <span>#526069</span>
                      </li>
                      <li className="bg-blue-grey-500 list-group-item">
                        <span>500</span> /
                        <span>#76838f</span>
                      </li>
                      <li className="bg-blue-grey-400 blue-grey-700 list-group-item">
                        <span>400</span> /
                        <span>#a3afb7</span>
                      </li>
                      <li className="bg-blue-grey-300 blue-grey-700 list-group-item">
                        <span>300</span> /
                        <span>#ccd5db</span>
                      </li>
                      <li className="bg-blue-grey-200 blue-grey-700 list-group-item">
                        <span>200</span> /
                        <span>#e4eaec</span>
                      </li>
                      <li className="bg-blue-grey-100 blue-grey-700 list-group-item">
                        <span>100</span> /
                        <span>#f3f7f9</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Example Color Palette */}
              <div className="color-application">
                <h3>Color Application</h3>
                <div className="row row-lg">
                  <div className="col-xl-6">
                    {/* Example Choose Your Palette */}
                    <div className="example-wrap">
                      <h4 className="example-title">Choose Your Palette</h4>
                      <p>Limit your selection of colors by choosing three color hues from
                        the primary palette and one accent color from the secondary
                        palette. The accent may or may not need fallback options.</p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="example-wrap">
                            <div className="row">
                              <div className="col-md-6">
                                <p>Active color</p>
                                <span>#4e97d9</span>
                              </div>
                              <div className="col-md-6">
                                <div className="bg-blue-700 color-box">700</div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <p>Base color</p>
                                <span>#62a8ea</span>
                              </div>
                              <div className="col-md-6">
                                <div className="bg-blue-600 color-box">600</div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <p>Hover color</p>
                                <span>#89bceb</span>
                              </div>
                              <div className="col-md-6">
                                <div className="bg-blue-500 color-box">500</div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <p>Background opt.</p>
                                <span>#e8f1f8</span>
                              </div>
                              <div className="col-md-6">
                                <div className="bg-blue-100 color-box blue-grey-700">100</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="example-wrap">
                            <div className="row">
                              <div className="col-md-6">
                                <p>Active color</p>
                                <span>#e9595b</span>
                              </div>
                              <div className="col-md-6">
                                <div className="bg-red-700 color-box">700</div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <p>Base color</p>
                                <span>#f96868</span>
                              </div>
                              <div className="col-md-6">
                                <div className="bg-red-600 color-box">600</div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <p>Hover color</p>
                                <span>#fa7a7a</span>
                              </div>
                              <div className="col-md-6">
                                <div className="bg-red-500 color-box">500</div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <p>Background opt.</p>
                                <span>#ffeaea</span>
                              </div>
                              <div className="col-md-6">
                                <div className="bg-red-100 color-box blue-grey-700">100</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Example Choose Your Palette */}
                  </div>
                  <div className="col-xl-6">
                    {/* Example Text Color */}
                    <div className="example-wrap">
                      <h4 className="example-title">Text Color</h4>
                      <p>To convey a hierarchy of information, you can use different shades
                        for text. The standard content text color is #79838B.</p>
                      <div className="row mb-20">
                        <div className="col-md-3">
                          <div className="example">
                            <div className="bg-blue-grey-700 text-color-box"/>
                            <p>Title color</p>
                            <span>#37474f</span>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="example">
                            <div className="bg-blue-grey-600 text-color-box"/>
                            <p>Subtitle color</p>
                            <span>#526069</span>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="example">
                            <div className="bg-blue-grey-500 text-color-box"/>
                            <p>Text color</p>
                            <span>#76838f</span>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="example">
                            <div className="bg-blue-grey-400 text-color-box"/>
                            <p>Prompt color</p>
                            <span>#a3afb7</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Example Text Color */}
                  </div>
                  <div className="col-xl-6">
                    {/* Example Use Alpha */}
                    <div className="example-wrap m-lg-0">
                      <h4 className="example-title">Use Alpha For Icons, And Dividers</h4>
                      <p>Icons and dividers, also benefit from having an alpha value of
                        black instead of a solid color, to make sure the color below.
                      </p>
                      <div className="row">
                        <div className="col-xl-6 mb-10">
                          <div className="example">
                            <div className="bg-blue-grey-700 example-alpha">Grey Darkest</div>
                            <div className="row opacity-example">
                              <div className="col-md-6">
                                <p>
                                  <span>Normal:</span>
                                  <span className="opacity-four"><i className="icon wb-image"
                                                                    aria-hidden="true"/>40%</span>
                                </p>
                                <p>
                                  <span>Hover:</span>
                                  <span className="opacity-six"><i className="icon wb-image"
                                                                   aria-hidden="true"/>60%</span>
                                </p>
                                <p>
                                  <span>Active:</span>
                                  <span className="blue-grey-700"><i className="icon wb-image" aria-hidden="true"/>100%</span>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <span>Normal:</span>
                                  <span className="opacity-six"><i className="icon wb-image"
                                                                   aria-hidden="true"/>60%</span>
                                </p>
                                <p>
                                  <span>Hover:</span>
                                  <span className="opacity-eight"><i className="icon wb-image"
                                                                     aria-hidden="true"/>80%</span>
                                </p>
                                <p>
                                  <span>Active:</span>
                                  <span className="blue-grey-700"><i className="icon wb-image" aria-hidden="true"/>100%</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="example">
                            <div className="bg-blue-grey-800 example-alpha">Gray Base</div>
                            <div className="example-alpha example-divider blue-grey-600">Dividers 10%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Example Use Alpha */}
                  </div>
                  <div className="col-xl-6">
                    {/* Example Border Color */}
                    <div className="example-wrap">
                      <h4 className="example-title">Border Color</h4>
                      <p>Border color should use the primary #E6E8EA color, which should
                        be the main color of your project.</p>
                      <div className="example-border">
                        <div className="bg-blue-grey-200"/>
                        <div>
                          <p>Border color</p>
                          <span>#e4eaec</span>
                        </div>
                      </div>
                    </div>
                    {/* End Example Border Color */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Panel */}
        </div>
      </div>
    );
  }
}

export default ColorsExample;
