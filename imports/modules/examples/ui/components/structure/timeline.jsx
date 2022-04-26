import React from 'react';

class TimelineExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header page-header-bordered">
          <h1 className="page-title">Timeline</h1>
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
          <ul className="timeline timeline-icon">
            <li className="timeline-period">MAY 2017</li>
            <li className="timeline-item">
              <div className="timeline-dot">
                <i className="icon wb-image" aria-hidden="true"/>
              </div>
              <div className="timeline-info">
                <time dateTime="2017-05-15">2 Days ago</time>
              </div>
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
              <div className="timeline-dot bg-green-500">
                <i className="icon wb-file" aria-hidden="true"/>
              </div>
              <div className="timeline-info">
                <time dateTime="2017-05-15">2 Days ago</time>
              </div>
              <div className="timeline-content">
                <div className="card card-article card-shadow">
                  <div className="card-img-top cover">
                    <img className="cover-image" src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png"
                         alt="..."/>
                  </div>
                  <div className="card-block">
                    <h3 className="card-title">Lorem Ipsum Dolor</h3>
                    <p className="card-text">
                      <small>MAY 15, 2017</small>
                    </p>
                    <p>Novum formidines congressus atomorum nam permulta alterum delectatio
                      gaudeat statim. Necessariae dicturam perspexit utrum modo amicitiae
                      malum summumque, multis ante iudicia desiderat, civitas iudicare
                      attingere, amori perpaulum mediocrium, dicere notae litteras
                      plusque appareat, remotis fama futurove quandam assentiar integre
                      poenis. </p>
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
              <div className="timeline-dot bg-orange-500">
                <i className="wb-quote-right"/>
              </div>
              <div className="timeline-info">
                <time dateTime="2017-05-08">9 Days ago</time>
              </div>
              <div className="timeline-content">
                <div className="card card-shadow">
                  <div className="card-header cover">
                    <div className="cover-background p-30"
                         style={{ backgroundImage: 'url("http://getbootstrapadmin.com/remark/global/photos/placeholder.png")' }}>
                      <blockquote className="blockquote cover-quote white card-blockquote">Asperner solvantur fere queo
                        meam videtur temperantiam. Timorem
                        asperner. Hortensio delicatissimi nihilo disserunt, contemnit
                        mi amentur doctrinis logikh triario, appetendi utamur fames.
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="timeline-period">Apr 2017</li>
            <li className="timeline-item">
              <div className="timeline-dot bg-green-500">
                <i className="icon wb-file" aria-hidden="true"/>
              </div>
              <div className="timeline-info">
                <time dateTime="2017-04-08">1 Month ago</time>
              </div>
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
                    <p>Signiferumque dixit, arbitrium iudicia nominis, potione aeterno
                      genus conducunt deinde incidunt horrent forte voluptate pericula,
                      mortis deleniti, circumcisaque mala sentit iucundius pedalis.
                      Claudicare inanium fugiat contenta dixisset animumque iure quoquo
                      dicturam, defendit militaris sollicitudines, verear, amicorum
                      manum discedere indignae loqui. </p>
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
              <div className="timeline-dot bg-orange-600">
                <i className="wb-quote-right"/>
              </div>
              <div className="timeline-info">
                <time dateTime="2017-04-08">1 Month ago</time>
              </div>
              <div className="timeline-content">
                <div className="card card-shadow">
                  <div className="card-header cover">
                    <div className="cover-background p-30"
                         style={{ backgroundImage: 'url("http://getbootstrapadmin.com/remark/global/photos/placeholder.png")' }}>
                      <blockquote className="blockquote cover-quote white card-blockquote">Ostendis peccandi pertinaces
                        disputandum primus arare morbos
                        noster, privamur alios perpetiuntur nulla est, effecerit corpora
                        doctrina sentiunt hinc quasi, tradere perveniri erigimur.
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="timeline-item timeline-reverse">
              <div className="timeline-dot bg-cyan-600">
                <i className="icon wb-video" aria-hidden="true"/>
              </div>
              <div className="timeline-info">
                <time dateTime="2017-04-08">1 Month ago</time>
              </div>
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

export default TimelineExample;
