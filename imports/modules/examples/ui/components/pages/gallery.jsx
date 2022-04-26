import React from 'react';

class GalleryExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <ol className="breadcrumb">
            <li><a href="#/">Home</a></li>
            <li className="active">Pages</li>
          </ol>
          <h1 className="page-title">Gallery</h1>
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
        <div className="page-content container-fluid">
          <ul className="blocks blocks-100 blocks-xlg-4 blocks-md-3 blocks-sm-2" id="exampleList">
            <li data-type="animal">
              <div className="widget widget-shadow">
                <figure className="widget-header overlay-hover overlay">
                  <img className="overlay-figure overlay-scale"
                       src="http://getbootstrapadmin.com/remark/global/photos/animal-5-720x480.jpg" alt="..."/>
                  <figcaption className="overlay-panel overlay-background overlay-fade overlay-icon">
                    <a className="icon wb-search" href="../../global/photos/animal-5-720x480.jpg"/>
                  </figcaption>
                </figure>
                <h4 className="widget-title">Animal Horse</h4>
              </div>
            </li>
            <li data-type="object">
              <div className="widget widget-shadow">
                <figure className="widget-header overlay-hover overlay">
                  <img className="overlay-figure overlay-scale"
                       src="http://getbootstrapadmin.com/remark/global/photos/object-2-720x480.jpg" alt="..."/>
                  <figcaption className="overlay-panel overlay-background overlay-fade overlay-icon">
                    <a className="icon wb-search" href="../../global/photos/object-2-720x480.jpg"/>
                  </figcaption>
                </figure>
                <h4 className="widget-title">Object Coffee</h4>
              </div>
            </li>
            <li data-type="object">
              <div className="widget widget-shadow">
                <figure className="widget-header overlay-hover overlay">
                  <img className="overlay-figure overlay-scale"
                       src="http://getbootstrapadmin.com/remark/global/photos/object-3-720x480.jpg" alt="..."/>
                  <figcaption className="overlay-panel overlay-background overlay-fade overlay-icon">
                    <a className="icon wb-search" href="../../global/photos/object-3-720x480.jpg"/>
                  </figcaption>
                </figure>
                <h4 className="widget-title">Object Cup</h4>
              </div>
            </li>
            <li data-type="city">
              <div className="widget widget-shadow">
                <figure className="widget-header overlay-hover overlay">
                  <img className="overlay-figure overlay-scale"
                       src="http://getbootstrapadmin.com/remark/global/photos/city-1-720x480.jpg" alt="..."/>
                  <figcaption className="overlay-panel overlay-background overlay-fade overlay-icon">
                    <a className="icon wb-search" href="../../global/photos/city-1-720x480.jpg"/>
                  </figcaption>
                </figure>
                <h4 className="widget-title">City Nature</h4>
              </div>
            </li>
            <li data-type="scenery">
              <div className="widget widget-shadow">
                <figure className="widget-header overlay-hover overlay">
                  <img className="overlay-figure overlay-scale"
                       src="http://getbootstrapadmin.com/remark/global/photos/city-2-720x480.jpg" alt="..."/>
                  <figcaption className="overlay-panel overlay-background overlay-fade overlay-icon">
                    <a className="icon wb-search" href="../../global/photos/city-2-720x480.jpg"/>
                  </figcaption>
                </figure>
                <h4 className="widget-title">City Station</h4>
              </div>
            </li>
            <li data-type="city">
              <div className="widget widget-shadow">
                <figure className="widget-header overlay-hover overlay">
                  <img className="overlay-figure overlay-scale"
                       src="http://getbootstrapadmin.com/remark/global/photos/city-3-720x480.jpg" alt="..."/>
                  <figcaption className="overlay-panel overlay-background overlay-fade overlay-icon">
                    <a className="icon wb-search" href="../../global/photos/city-3-720x480.jpg"/>
                  </figcaption>
                </figure>
                <h4 className="widget-title">City Leaf</h4>
              </div>
            </li>
            <li data-type="animal">
              <div className="widget widget-shadow">
                <figure className="widget-header overlay-hover overlay">
                  <img className="overlay-figure overlay-scale"
                       src="http://getbootstrapadmin.com/remark/global/photos/animal-3-720x480.jpg" alt="..."/>
                  <figcaption className="overlay-panel overlay-background overlay-fade overlay-icon">
                    <a className="icon wb-search" href="../../global/photos/animal-3-720x480.jpg"/>
                  </figcaption>
                </figure>
                <h4 className="widget-title">Animal Bird</h4>
              </div>
            </li>
            <li data-type="city">
              <div className="widget widget-shadow">
                <figure className="widget-header overlay-hover overlay">
                  <img className="overlay-figure overlay-scale"
                       src="http://getbootstrapadmin.com/remark/global/photos/city-4-720x480.jpg" alt="..."/>
                  <figcaption className="overlay-panel overlay-background overlay-fade overlay-icon">
                    <a className="icon wb-search" href="../../global/photos/city-4-720x480.jpg"/>
                  </figcaption>
                </figure>
                <h4 className="widget-title">City Street</h4>
              </div>
            </li>
            <li data-type="animal">
              <div className="widget widget-shadow">
                <figure className="widget-header overlay-hover overlay">
                  <img className="overlay-figure overlay-scale"
                       src="http://getbootstrapadmin.com/remark/global/photos/animal-1-720x480.jpg" alt="..."/>
                  <figcaption className="overlay-panel overlay-background overlay-fade overlay-icon">
                    <a className="icon wb-search" href="../../global/photos/animal-1-720x480.jpg"/>
                  </figcaption>
                </figure>
                <h4 className="widget-title">Animal Nature</h4>
              </div>
            </li>
            <li data-type="city">
              <div className="widget widget-shadow">
                <figure className="widget-header overlay-hover overlay">
                  <img className="overlay-figure overlay-scale"
                       src="http://getbootstrapadmin.com/remark/global/photos/city-5-720x480.jpg" alt="..."/>
                  <figcaption className="overlay-panel overlay-background overlay-fade overlay-icon">
                    <a className="icon wb-search" href="../../global/photos/city-5-720x480.jpg"/>
                  </figcaption>
                </figure>
                <h4 className="widget-title">City Night</h4>
              </div>
            </li>
            <li data-type="object">
              <div className="widget widget-shadow">
                <figure className="widget-header overlay-hover overlay">
                  <img className="overlay-figure overlay-scale"
                       src="http://getbootstrapadmin.com/remark/global/photos/object-1-720x480.jpg" alt="..."/>
                  <figcaption className="overlay-panel overlay-background overlay-fade overlay-icon">
                    <a className="icon wb-search" href="../../global/photos/object-1-720x480.jpg"/>
                  </figcaption>
                </figure>
                <h4 className="widget-title">Object Book</h4>
              </div>
            </li>
            <li data-type="object">
              <div className="widget widget-shadow">
                <figure className="widget-header overlay-hover overlay">
                  <img className="overlay-figure overlay-scale"
                       src="http://getbootstrapadmin.com/remark/global/photos/object-4-720x480.jpg" alt="..."/>
                  <figcaption className="overlay-panel overlay-background overlay-fade overlay-icon">
                    <a className="icon wb-search" href="../../global/photos/object-4-720x480.jpg"/>
                  </figcaption>
                </figure>
                <h4 className="widget-title">Object Grape</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default GalleryExample;
