import React from 'react';
import { NavDropdown, Accordion, Panel } from 'react-bootstrap';

class MegaMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const htmlPath = '';
    return (
      <NavDropdown eventKey={3} title="Mega" id="mega-menu-dropdown"
                   className="nav-item dropdown dropdown-fw dropdown-mega">
        <div className="mega-content">
          <div className="row">
            <div className="col-md-4">
              <h5>UI Kit</h5>
              <ul className="blocks-2">
                <li className="mega-menu margin-0">
                  <ul className="list-icons">
                    <li><i className="wb-chevron-right-mini"
                           aria-hidden="true"/><a
                      href={htmlPath + 'advanced/animation.html'}>Animation</a>
                    </li>
                    <li><i className="wb-chevron-right-mini"
                           aria-hidden="true"/><a
                      href={htmlPath + 'uikit/buttons.html'}>Buttons</a></li>
                    <li><i className="wb-chevron-right-mini"
                           aria-hidden="true"/><a
                      href={htmlPath + 'uikit/colors.html'}>Colors</a></li>
                    <li><i className="wb-chevron-right-mini"
                           aria-hidden="true"/><a
                      href={htmlPath + 'uikit/dropdowns.html'}>Dropdowns</a>
                    </li>
                    <li><i className="wb-chevron-right-mini"
                           aria-hidden="true"/><a
                      href={htmlPath + 'uikit/icons.html'}>Icons</a></li>
                    <li><i className="wb-chevron-right-mini"
                           aria-hidden="true"/><a
                      href={htmlPath + 'advanced/lightbox.html'}>Lightbox</a>
                    </li>
                  </ul>
                </li>
                <li className="mega-menu margin-0">
                  <ul className="list-icons">
                    <li><i className="wb-chevron-right-mini"
                           aria-hidden="true"/><a
                      href={htmlPath + 'uikit/modals.html'}>Modals</a></li>
                    <li><i className="wb-chevron-right-mini"
                           aria-hidden="true"/><a
                      href={htmlPath + 'uikit/panel-structure.html'}>Panels</a>
                    </li>
                    <li><i className="wb-chevron-right-mini"
                           aria-hidden="true"/><a
                      href={htmlPath + 'structure/overlay.html'}>Overlay</a>
                    </li>
                    <li><i className="wb-chevron-right-mini"
                           aria-hidden="true"/><a
                      href={htmlPath + 'uikit/tooltip-popover.html '}>Tooltips</a>
                    </li>
                    <li><i className="wb-chevron-right-mini"
                           aria-hidden="true"/><a
                      href={htmlPath + 'advanced/scrollable.html'}>Scrollable</a>
                    </li>
                    <li><i className="wb-chevron-right-mini"
                           aria-hidden="true"/><a
                      href={htmlPath + 'uikit/typography.html'}>Typography</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Media<span className="label label-pill label-success">4</span></h5>
              <ul className="blocks-3">
                <li>
                  <a className="thumbnail margin-0" href="javascript:void(0)">
                    <img className="width-full"
                         src={htmlPath + 'view-1-150x100.jpg'} alt="..."/>
                  </a>
                </li>
                <li>
                  <a className="thumbnail margin-0" href="javascript:void(0)">
                    <img className="width-full"
                         src={htmlPath + 'view-2-150x100.jpg'} alt="..."/>
                  </a>
                </li>
                <li>
                  <a className="thumbnail margin-0" href="javascript:void(0)">
                    <img className="width-full"
                         src={htmlPath + 'view-3-150x100.jpg'} alt="..."/>
                  </a>
                </li>
                <li>
                  <a className="thumbnail margin-0" href="javascript:void(0)">
                    <img className="width-full"
                         src={htmlPath + 'view-4-150x100.jpg'} alt="..."/>
                  </a>
                </li>
                <li>
                  <a className="thumbnail margin-0" href="javascript:void(0)">
                    <img className="width-full"
                         src={htmlPath + 'view-5-150x100.jpg'} alt="..."/>
                  </a>
                </li>
                <li>
                  <a className="thumbnail margin-0" href="javascript:void(0)">
                    <img className="width-full"
                         src={htmlPath + 'view-6-150x100.jpg'} alt="..."/>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="margin-bottom-0">Accordion</h5>
              <Accordion className=" panel-group-simple">
                <Panel header="Collapsible Group Item #1" eventKey="1" bsClass="panel">
                  De moveat laudatur vestra parum doloribus labitur
                  sentire partes, eripuit praesenti congressus ostendit
                  alienae, voluptati ornateque accusamus clamat reperietur
                  convicia albucius.
                </Panel>
                <Panel header="Collapsible Group Item #2" eventKey="2" bsClass="panel">
                  Praestabiliorem. Pellat excruciant legantur ullum
                  leniter vacare foris voluptate loco ignavi, credo
                  videretur multoque choro fatemur mortis animus
                  adoptionem, bello statuat expediunt naturales.
                </Panel>
                <Panel header="Collapsible Group Item #3" eventKey="3" bsClass="panel">
                  Horum, antiquitate perciperet d conspectum locus
                  obruamus animumque perspici probabis suscipere.
                  Desiderat magnum, contenta poena desiderant concederetur
                  menandri damna disputandum corporum.
                </Panel>
              </Accordion>
            </div>
          </div>
        </div>
      </NavDropdown>
    );
  }
}

export default MegaMenu;
