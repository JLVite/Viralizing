import React from 'react';

class EmailExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-content">
        {/* Panel */}
        <div className="panel">
          <div className="panel-body container-fluid">
            <div className="email-title">
              <img src="http://getbootstrapadmin.com/remark/base/assets/images/logo-blue.png" alt="..."/>
              <h4 className="blue-grey-400 font-weight-400">Remark</h4>
            </div>
            <div className="card">
              <div className="card-img-top cover">
                <img className="cover-image" src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png"
                     alt="..."/>
              </div>
              <div className="card-block">
                <h4 className="card-title">Dissensio placebit bonarum</h4>
                <p className="card-text">Fecerit amici quale arte opinor homero, amaret amici audeam locupletiorem
                  timidiores. Insipientiam potitur hae solemus, mortis iactare debilitati
                  opinemur effici, eruditi laetitiam verterem dictum audeam disputationi,
                  chaere credo discere sin confidet complectitur hominem, quantum
                  fabellas, habuit convenire possunt constringendos amicum. </p>
                <a className="btn btn-primary card-link" href="javascript:void(0)">Read More</a>
              </div>
            </div>
            <div className="card">
              <div className="card-img-top cover">
                <img className="cover-image" src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png"
                     alt="..."/>
              </div>
              <div className="card-block">
                <h4 className="card-title">Huius existimare ferantur</h4>
                <p className="card-text">Inquam maluisti corrigere operosam expectamus, sic facilis aiebat.
                  Magnam malit silano albuci vix poetis pedalis falli sequatur, eruditionem
                  notissima depulsa notissima, istis tradit omne. Provident fortitudinem
                  natura adversa suam, dedocendi inflammat eisque verear, labefactetur
                  patrioque errorem probo consequamur erit brute. </p>
                <a className="btn btn-primary card-link" href="javascript:void(0)">Read More</a>
              </div>
            </div>
            <div className="card">
              <div className="card-img-top cover">
                <img className="cover-image" src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png"
                     alt="..."/>
              </div>
              <div className="card-block">
                <h4 className="card-title">Assiduitas totum sanciret</h4>
                <p className="card-text">Multis vestra feci clariora caret proprius totum quaeso nati iudex,
                  nimis dissensio sensu nati cupio maius iustitiam oportere, videro
                  excepturi, delectari amici atomus falli pedalis imperii graeci
                  anteponant movet tempora, contentus qua amplificarique horreat
                  aspernari legat ergo rudem litteras utuntur. </p>
                <a className="btn btn-primary card-link" href="javascript:void(0)">Read More</a>
              </div>
            </div>
            <div className="email-more">
              <h2 className="email-more-title">You May Want To Learn</h2>
              <div className="row email-more-content">
                <div className="col-md-4">
                  <a className="card" href="javascript:void(0)">
                    <img className="img-fluid width-full"
                         src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                  </a>
                </div>
                <div className="col-md-4">
                  <a className="card" href="javascript:void(0)">
                    <img className="img-fluid width-full"
                         src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                  </a>
                </div>
                <div className="col-md-4">
                  <a className="card" href="javascript:void(0)">
                    <img className="img-fluid width-full"
                         src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                  </a>
                </div>
                <div className="col-md-4">
                  <a className="card" href="javascript:void(0)">
                    <img className="img-fluid width-full"
                         src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                  </a>
                </div>
                <div className="col-md-4">
                  <a className="card" href="javascript:void(0)">
                    <img className="img-fluid width-full"
                         src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                  </a>
                </div>
                <div className="col-md-4">
                  <a className="card" href="javascript:void(0)">
                    <img className="img-fluid width-full"
                         src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                  </a>
                </div>
              </div>
              <p>You are currently signed up to Company’s newsletters as: youremail@gmail.com
                to <a className="email-unsubscribe" href="javascript:void(0)">unsubscribe</a></p>
              <div className="email-more-social">
                <a href="javascript:void(0)"><i className="icon bd-twitter" aria-hidden="true"/></a>
                <a href="javascript:void(0)"><i className="icon bd-facebook" aria-hidden="true"/></a>
                <a href="javascript:void(0)"><i className="icon bd-linkedin" aria-hidden="true"/></a>
                <a href="javascript:void(0)"><i className="icon bd-pinterest" aria-hidden="true"/></a>
              </div>
            </div>
          </div>
        </div>
        {/* End Panel */}
      </div>

    );
  }
}

export default EmailExample;
