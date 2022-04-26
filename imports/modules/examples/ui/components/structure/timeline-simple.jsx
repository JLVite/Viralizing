import React from 'react';

class TimelineSimpleExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header page-header-bordered">
          <h1 className="page-title">Simple Timeline</h1>
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
        <div className="page-content container">
          {/* Timeline */}
          <ul className="timeline timeline-simple">
            <li className="timeline-period">MAY 2017</li>
            <li className="timeline-item">
              <div className="timeline-dot" data-placement="right" data-toggle="tooltip" data-trigger="hover"
                   data-original-title="2 Days ago"/>
              <div className="timeline-content">
                <div className="card card-shadow">
                  <div className="card-img-top cover">
                    <img className="cover-image" src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png"
                         alt="..."/>
                  </div>
                </div>
              </div>
            </li>
            <li className="timeline-item timeline-reverse">
              <div className="timeline-dot bg-green-500" data-placement="left" data-toggle="tooltip"
                   data-trigger="hover" data-original-title="2 Days ago"/>
              <div className="timeline-content">
                <div className="card card-shadow">
                  <div className="card-img-top cover">
                    <img className="cover-image" src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png"
                         alt="..."/>
                  </div>
                  <div className="card-block p-30">
                    <h3 className="card-title">Lorem Ipsum Dolor</h3>
                    <p className="card-text">
                      <small>MAY 15, 2017</small>
                    </p>
                    <p>Dubium sequatur declinare fecit securi emolumento ait habere tutiorem
                      neglegentur, pugnantibus simplicem propemodum atqui suo licet
                      confirmat. Iudicium ipso debent panaetium exorsus, vacuitate
                      artifex confirmavit asperner posuit sollicitant contentam probamus
                      perdiderunt. Coniuncta appetendi quo operis, iniucundus, putat
                      magnis, invitat diceret. </p>
                  </div>
                  <div className="card-block">
                    <div className="card-actions float-right">
                      <a href="javascript:void(0)">
                        <i className="icon wb-chat-working" aria-hidden="true"/>
                        <span>2500</span>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="icon wb-heart" aria-hidden="true"/>
                        <span>20</span>
                      </a>
                    </div>
                    <a className="btn btn-primary btn-outline card-link" href="javascript:void(0)">Read More</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-dot bg-orange-500" data-placement="right" data-toggle="tooltip"
                   data-trigger="hover" data-original-title="9 Days ago"/>
              <div className="timeline-content">
                <div className="card card-shadow">
                  <div className="card-header cover">
                    <div className="cover-background p-30"
                         style={{ backgroundImage: 'url("http://getbootstrapadmin.com/remark/global/photos/placeholder.png")' }}>
                      <blockquote className="blockquote cover-quote white card-blockquote">Fabulis timentis synephebos
                        faciendum laetitia utamur consuevit
                        tali hortatore videre, summa quasi, consequentis desideret.
                        Constantia aptior consectetur credo audiebamus dissentiunt
                        vivere moribus.
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="timeline-period">Apr 2017</li>
            <li className="timeline-item">
              <div className="timeline-dot bg-green-500" data-placement="right" data-toggle="tooltip"
                   data-trigger="hover" data-original-title="1 Month ago"/>
              <div className="timeline-content">
                <div className="card card-shadow">
                  <div className="card-img-top cover">
                    <img className="cover-image" src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png"
                         alt="..."/>
                  </div>
                  <div className="card-block">
                    <h3 className="card-title">Lorem Ipsum Dolor</h3>
                    <p className="card-text">
                      <small>MAY 08, 2017</small>
                    </p>
                    <p>Sumus homo praetor intellegerem erga incidunt singulis, legam viveremus
                      deorum, tertio frui tantum dedocendi profecto omittantur gravissimas
                      cognitioque. Arbitrer negarent vocant disserui urbanitas, videtis
                      commenticiam persequeris recteque data amoris opes. Discenda
                      efficere diligi praesenti nostri adversantur pertinaces detractis
                      levitatibus etiam. </p>
                  </div>
                  <div className="card-block">
                    <div className="card-actions float-right">
                      <a href="javascript:void(0)">
                        <i className="icon wb-chat-working" aria-hidden="true"/>
                        <span>2500</span>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="icon wb-heart" aria-hidden="true"/>
                        <span>20</span>
                      </a>
                    </div>
                    <a className="btn btn-primary btn-outline card-link" href="javascript:void(0)">Read More</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="timeline-item timeline-reverse">
              <div className="timeline-dot bg-orange-600" data-placement="left" data-toggle="tooltip"
                   data-trigger="hover" data-original-title="1 Month ago"/>
              <div className="timeline-content">
                <div className="card card-shadow">
                  <div className="card-header cover">
                    <div className="cover-background p-30"
                         style={{ backgroundImage: 'url("http://getbootstrapadmin.com/remark/global/photos/placeholder.png")' }}>
                      <blockquote className="blockquote cover-quote white card-blockquote">Debilitati fugienda partitio
                        esse debemus, erat segnitiae quaerimus
                        iudicia aspernatur vis, perfunctio quae ludus commodius habemus
                        inflammat. Distinguantur vera a tollatur desiderent.
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="timeline-item timeline-reverse">
              <div className="timeline-dot bg-cyan-600" data-placement="left" data-toggle="tooltip" data-trigger="hover"
                   data-original-title="1 Month ago"/>
              <div className="timeline-content">
                <div className="card card-shadow">
                  <div className="card-header cover player" data-plugin="plyr">
                    <video poster="../../assets/examples/images/poster.jpg" controls crossOrigin>
                      {/* Video Files */}
                      <source type="video/mp4" src="https://cdn.selz.com/plyr/1.0/movie.mp4"/>
                      <source type="video/webm" src="https://cdn.selz.com/plyr/1.0/movie.webm"/>
                      {/* Text Track File */}
                      <track kind="captions" label="English" srcLang="en" src="//cdn.selz.com/plyr/1.0/en.vtt" default/>
                      {/* Fallback For Browsers That Don'T Support The <Video> Element */}
                      <a href="https://cdn.selz.com/plyr/1.0/movie.mp4">Download</a>
                    </video>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          {/* End Timeline */}
        </div>
      </div>

    );
  }
}

export default TimelineSimpleExample;
