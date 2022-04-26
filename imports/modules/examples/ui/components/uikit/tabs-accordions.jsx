import React from 'react';
import {
  Tabs,
  Tab,
  TabContainer,
  TabContent,
  TabPane,
  Row,
  Col,
  Nav,
  NavItem,
  Accordion,
  Panel,
  Well
} from 'react-bootstrap';

class TabsAccordionsExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openCollapse: false
    };
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <ol className="breadcrumb">
            <li>Home</li>
            <li>Examples</li>
            <li className="active">Basic UI</li>
          </ol>
          <h1 className="page-title">Tabs &amp; Accordions</h1>
        </div>
        <div className="page-content container-fluid">
          {/* Panel Tabs */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Tabs</h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-lg-6">
                  <div className="example-wrap">

                    <div className="nav-tabs-horizontal content-padding-top">
                      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" bsStyle="tabs">
                        <Tab eventKey={1} title="Home">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neglegentur sabinum instructus
                          fingitur accusantibus harum neque consuetudine intereant
                          numeris, ipse tuemur suum apud mediocrem iactant. Libidinibus
                          amatoriis dicta albuci manum, statue.
                        </Tab>
                        <Tab eventKey={2} title="Components">
                          Negant parvos fructu nostram mutans supplicii ac dissentias, maius tibi licebit
                          ruinae philosophia. Salutatus repellere titillaret expetendum
                          ipsi. Cupiditates intellegam exercitumque privatio concederetur,
                          sempiternum, verbis malint dissensio nullas noctesque earumque.
                        </Tab>
                        <Tab eventKey={3} title="CSS">
                          Benivole horrent tantalo fuisset adamare fugiendam tractatos indicaverunt animis
                          chaere, brevi minuendas, ubi angoribus iisque deorsum audita
                          haec dedocendi utilitas. Panaetium erimus platonem varias
                          imperitos animum, iudiciorumque operis multa disputando.
                        </Tab>
                        <Tab eventKey={4} title="Javascript">
                          Metus subtilius texit consilio fugiendam, opinionum levius amici inertissimae pecuniae
                          tribus ordiamur, alienus artes solitudo, minime praesidia
                          proficiscuntur reiciat detracta involuta veterum. Rutilius
                          quis honestatis hominum, quisquis percussit sibi explicari.
                        </Tab>
                      </Tabs>
                    </div>
                  </div>

                </div>
                <div className="col-lg-6">
                  {/* Example Tabs Reverse */}
                  <div className="example-wrap">
                    <div className="nav-tabs-horizontal nav-tabs-reverse content-padding-top">
                      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" bsStyle="tabs">
                        <Tab eventKey={1} title="Home">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neglegentur sabinum instructus
                          fingitur accusantibus harum neque consuetudine intereant
                          numeris, ipse tuemur suum apud mediocrem iactant. Libidinibus
                          amatoriis dicta albuci manum, statue.
                        </Tab>
                        <Tab eventKey={2} title="Components">
                          Negant parvos fructu nostram mutans supplicii ac dissentias, maius tibi licebit
                          ruinae philosophia. Salutatus repellere titillaret expetendum
                          ipsi. Cupiditates intellegam exercitumque privatio concederetur,
                          sempiternum, verbis malint dissensio nullas noctesque earumque.
                        </Tab>
                        <Tab eventKey={3} title="CSS">
                          Benivole horrent tantalo fuisset adamare fugiendam tractatos indicaverunt animis
                          chaere, brevi minuendas, ubi angoribus iisque deorsum audita
                          haec dedocendi utilitas. Panaetium erimus platonem varias
                          imperitos animum, iudiciorumque operis multa disputando.
                        </Tab>
                        <Tab eventKey={4} title="Javascript">
                          Metus subtilius texit consilio fugiendam, opinionum levius amici inertissimae pecuniae
                          tribus ordiamur, alienus artes solitudo, minime praesidia
                          proficiscuntur reiciat detracta involuta veterum. Rutilius
                          quis honestatis hominum, quisquis percussit sibi explicari.
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                  {/* End Example Tabs Reverse */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-lg-6">
                  {/* Example Tabs Left */}
                  <div className="example-wrap">
                    <div className="nav-tabs-vertical content-padding-vertical">
                      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" bsStyle="tabs">
                        <Tab eventKey={1} title="Home">
                          Puto loqueretur maxime tuentur statuam quanta quamquam multoque cogitavisse, romano
                          continens repellat omnis liquidae, inveneris aegritudine
                          inesse dirigentur graece secundum ipso unam, cognitionis
                          isdem mortem tantis opibus turma virtus legum, procedat accusantium
                          ipse sine fuissent desideraturam. Naturalem virtutum familiari
                          nasci tenebo provident convincere. Senserit ultima faciam
                          deterius plurimum ornateque curiosi. Oratione sit, dices
                          malunt quibusdam. Distinguique parendum contentam graecam
                          sale.
                        </Tab>
                        <Tab eventKey={2} title="Components">
                          Quaerat delectus arte exhorrescere summum disputando agatur perfunctio, e videntur
                          repellere errorem opinor facete invidi perspici simul liberos,
                          inhumanus. Fingitur iudico simulent polyaeno conclusionemque
                          atomis placatae solido etiam, optinere defenditur libero
                          consequentis aristoteli scribentur curis iudicium divinum.
                          Nostros pertineant, concederetur moveat laborum caeco secutus
                          rectas. Dignitatis tranquillitate negant utilior, approbantibus
                          polyaeno malint ullo vide. Possum sane confidam cogitavisse.
                          Sumitur. Diis.
                        </Tab>
                        <Tab eventKey={3} title="CSS">
                          Chrysippe rebus institutionem utrisque dixisset manus quippiam ignorare defatigatio
                          doctiores, essent doctus ipsam tamquam complexiones corporisque,
                          ars umbram sentiri venandi. Ipsam. Reprehenderit tantum debent
                          sicine assumenda comprobavit, assumenda primos fuerit atomos
                          amicorum inducitur quaedam miserum, potitur numquid effluere
                          haeret ipsos consuetudine, munere putet fugiendis orationis
                          quantumcumque. Perferendis attento saluti liberatione contra,
                          constituam efficeret quaeso accusamus quieti petat rem nisi
                          amicum.
                        </Tab>
                        <Tab eventKey={4} title="Javascript">
                          Laudabilis. At artes audiebamus firmam discordiae potione albam ferantur, epicureum
                          loquerer videretur formidinum utrisque simulent postremo,
                          praesidia variari fecerit ferantur. Hominibus doctissimos
                          multi, ferentur, certissimam medicorum bonum iucundius depravare
                          facile. Degendae istius perfunctio quisquis ordinem ornatum,
                          praeda atomi degendae animus. Mens eximiae placuit terrore,
                          sollicitant efficeret audeam tantalo, vulgo laudantium evertitur
                          spe meminerunt timentis populo, senserit inprobitas facilius
                          referri consiliisque.
                        </Tab>
                      </Tabs>
                    </div>

                  </div>
                  {/* End Example Tabs Left */}
                </div>
                <div className="col-lg-6">
                  {/* Example Tabs Right */}
                  <div className="example-wrap">
                    <div className="nav-tabs-vertical nav-tabs-reverse content-padding-vertical">
                      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" bsStyle="tabs">
                        <Tab eventKey={1} title="Home">
                          Puto loqueretur maxime tuentur statuam quanta quamquam multoque cogitavisse, romano
                          continens repellat omnis liquidae, inveneris aegritudine
                          inesse dirigentur graece secundum ipso unam, cognitionis
                          isdem mortem tantis opibus turma virtus legum, procedat accusantium
                          ipse sine fuissent desideraturam. Naturalem virtutum familiari
                          nasci tenebo provident convincere. Senserit ultima faciam
                          deterius plurimum ornateque curiosi. Oratione sit, dices
                          malunt quibusdam. Distinguique parendum contentam graecam
                          sale.
                        </Tab>
                        <Tab eventKey={2} title="Components">
                          Quaerat delectus arte exhorrescere summum disputando agatur perfunctio, e videntur
                          repellere errorem opinor facete invidi perspici simul liberos,
                          inhumanus. Fingitur iudico simulent polyaeno conclusionemque
                          atomis placatae solido etiam, optinere defenditur libero
                          consequentis aristoteli scribentur curis iudicium divinum.
                          Nostros pertineant, concederetur moveat laborum caeco secutus
                          rectas. Dignitatis tranquillitate negant utilior, approbantibus
                          polyaeno malint ullo vide. Possum sane confidam cogitavisse.
                          Sumitur. Diis.
                        </Tab>
                        <Tab eventKey={3} title="CSS">
                          Chrysippe rebus institutionem utrisque dixisset manus quippiam ignorare defatigatio
                          doctiores, essent doctus ipsam tamquam complexiones corporisque,
                          ars umbram sentiri venandi. Ipsam. Reprehenderit tantum debent
                          sicine assumenda comprobavit, assumenda primos fuerit atomos
                          amicorum inducitur quaedam miserum, potitur numquid effluere
                          haeret ipsos consuetudine, munere putet fugiendis orationis
                          quantumcumque. Perferendis attento saluti liberatione contra,
                          constituam efficeret quaeso accusamus quieti petat rem nisi
                          amicum.
                        </Tab>
                        <Tab eventKey={4} title="Javascript">
                          Laudabilis. At artes audiebamus firmam discordiae potione albam ferantur, epicureum
                          loquerer videretur formidinum utrisque simulent postremo,
                          praesidia variari fecerit ferantur. Hominibus doctissimos
                          multi, ferentur, certissimam medicorum bonum iucundius depravare
                          facile. Degendae istius perfunctio quisquis ordinem ornatum,
                          praeda atomi degendae animus. Mens eximiae placuit terrore,
                          sollicitant efficeret audeam tantalo, vulgo laudantium evertitur
                          spe meminerunt timentis populo, senserit inprobitas facilius
                          referri consiliisque.
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                  {/* End Example Tabs Right */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-lg-6">
                  {/* Example Tabs Icon */}
                  <div className="example-wrap">
                    <div className="nav-tabs-horizontal content-padding-top">
                      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" bsStyle="tabs">
                        <Tab eventKey={1} title={<i className="icon wb-home margin-0" aria-hidden="true"/>}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neglegentur sabinum instructus
                          fingitur accusantibus harum neque consuetudine intereant
                          numeris, ipse tuemur suum apud mediocrem iactant. Libidinibus
                          amatoriis dicta albuci manum, statue.
                        </Tab>
                        <Tab eventKey={2} title={<i className="icon wb-settings margin-0" aria-hidden="true"/>}>
                          Negant parvos fructu nostram mutans supplicii ac dissentias, maius tibi licebit
                          ruinae philosophia. Salutatus repellere titillaret expetendum
                          ipsi. Cupiditates intellegam exercitumque privatio concederetur,
                          sempiternum, verbis malint dissensio nullas noctesque earumque.
                        </Tab>
                        <Tab eventKey={3} title={<i className="icon wb-star margin-0" aria-hidden="true"/>}>
                          Benivole horrent tantalo fuisset adamare fugiendam tractatos indicaverunt animis
                          chaere, brevi minuendas, ubi angoribus iisque deorsum audita
                          haec dedocendi utilitas. Panaetium erimus platonem varias
                          imperitos animum, iudiciorumque operis multa disputando.
                        </Tab>
                        <Tab eventKey={4} title={<i className="icon wb-cloud margin-0" aria-hidden="true"/>}>
                          Metus subtilius texit consilio fugiendam, opinionum levius amici inertissimae pecuniae
                          tribus ordiamur, alienus artes solitudo, minime praesidia
                          proficiscuntur reiciat detracta involuta veterum. Rutilius
                          quis honestatis hominum, quisquis percussit sibi explicari.
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                  {/* End Example Tabs Icon */}
                </div>
                <div className="col-lg-6">
                  {/* Example Tabs Icon Left */}
                  <div className="example-wrap">
                    <div className="nav-tabs-vertical content-padding-vertical">
                      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" bsStyle="tabs">
                        <Tab eventKey={1} title={<i className="icon wb-home margin-0" aria-hidden="true"/>}>
                          Disseruerunt aiebat veterum universas politus corrigere pacto disputata, sabinum
                          officia, status latinas monet optari quid animi arbitratu,
                          inveniri caritatem adhibuit, putamus, electis parabilis nutu
                          unam claris magna locum disputatum, tenuit gymnasia scripserit
                          praetereat exedunt cyrenaicos reformidans. Aliquem, profecto
                          has perpetiuntur industriae liberalitati, prorsus bona, ullus
                          faciendumve ennii. Dein aperiam romanum conspectum complectitur
                          mala, fonte late quorum, commenticiam initiis incidant.
                        </Tab>
                        <Tab eventKey={2} title={<i className="icon wb-settings margin-0" aria-hidden="true"/>}>
                          Utrumvis angore, laudatur eligendi damna tanta ultimum quidque. Data philosophis
                          efficitur. Etsi apte deorsum tradidisse. Excepturi sublatum
                          viros rerum alias ii peccant, ferre facillimis, iucundum
                          veniam natus quaeritur incursione vestrae comit ignaviamque,
                          tria fructuosam acutum secunda perveniri levis posteri vendibiliora
                          nullam. Probes cui appetendi causas, attico familiari rem
                          tempus cn torquatum. Officia expetendis et stultus pervenias
                          stabilique arbitrium, numeranda.
                        </Tab>
                        <Tab eventKey={3} title={<i className="icon wb-star margin-0" aria-hidden="true"/>}>
                          Similique corporisque. Vitam erga videmus. Comparandae fecit. Arbitrarer cives
                          redeamus dein corpus poetae laborum intellegamus tibique,
                          numen acute congressus soluta acutus tradere deserunt confidet
                          iudicium, angusta, voluit discordans umquam arbitrantur,
                          amatoriis quem inportuno distinguique. Istae, referri. Intellegimus
                          dare hac facerem summam quo peccant maluisset earum, mel
                          graeca constituamus provident amicitiae. Mollitia plane,
                          doleamus defuturum ab plerique intellegimus erigimur fictae.
                        </Tab>
                        <Tab eventKey={4} title={<i className="icon wb-cloud margin-0" aria-hidden="true"/>}>
                          Consulatu sequimur persecuti quietus aristippi propter afflueret, quibusdam congressus
                          neglegentur delectu optimus exeduntur aliquod interesset.
                          Quaeque postea ceterorum incurreret copulatas quos. Minuit
                          dicunt torquatum illum libero perfecto illustribus, eximiae
                          quidam quales praesentium turpis illustribus utinam assidua,
                          eaque dicenda, faciunt iudicari fore sint percipiatur vivere
                          vexetur, cuiquam num alios malle vitiis gravissimo nulla,
                          natus lucilius possim indignius. Fortibus ait, accuratius.
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                  {/* End Example Tabs Icon Left */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-lg-6">
                  {/* Example Tabs Solid */}
                  <div className="example-wrap">
                    <div className="nav-tabs-horizontal nav-tabs-solid content-padding-top">
                      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" bsStyle="tabs">
                        <Tab eventKey={1} title="Home">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neglegentur sabinum instructus
                          fingitur accusantibus harum neque consuetudine intereant
                          numeris, ipse tuemur suum apud mediocrem iactant. Libidinibus
                          amatoriis dicta albuci manum, statue.
                        </Tab>
                        <Tab eventKey={2} title="Components">
                          Negant parvos fructu nostram mutans supplicii ac dissentias, maius tibi licebit
                          ruinae philosophia. Salutatus repellere titillaret expetendum
                          ipsi. Cupiditates intellegam exercitumque privatio concederetur,
                          sempiternum, verbis malint dissensio nullas noctesque earumque.
                        </Tab>
                        <Tab eventKey={3} title="CSS">
                          Benivole horrent tantalo fuisset adamare fugiendam tractatos indicaverunt animis
                          chaere, brevi minuendas, ubi angoribus iisque deorsum audita
                          haec dedocendi utilitas. Panaetium erimus platonem varias
                          imperitos animum, iudiciorumque operis multa disputando.
                        </Tab>
                        <Tab eventKey={4} title="Javascript">
                          Metus subtilius texit consilio fugiendam, opinionum levius amici inertissimae pecuniae
                          tribus ordiamur, alienus artes solitudo, minime praesidia
                          proficiscuntur reiciat detracta involuta veterum. Rutilius
                          quis honestatis hominum, quisquis percussit sibi explicari.
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                  {/* End Example Tabs Solid */}
                </div>
                <div className="col-lg-6">
                  {/* Example Tabs Solid Left */}
                  <div className="example-wrap">
                    <div className="nav-tabs-vertical content-padding-vertical nav-tabs-solid">
                      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" bsStyle="tabs">
                        <Tab eventKey={1} title="Home">
                          Puto loqueretur maxime tuentur statuam quanta quamquam multoque cogitavisse, romano
                          continens repellat omnis liquidae, inveneris aegritudine
                          inesse dirigentur graece secundum ipso unam, cognitionis
                          isdem mortem tantis opibus turma virtus legum, procedat accusantium
                          ipse sine fuissent desideraturam. Naturalem virtutum familiari
                          nasci tenebo provident convincere. Senserit ultima faciam
                          deterius plurimum ornateque curiosi. Oratione sit, dices
                          malunt quibusdam. Distinguique parendum contentam graecam
                          sale.
                        </Tab>
                        <Tab eventKey={2} title="Components">
                          Quaerat delectus arte exhorrescere summum disputando agatur perfunctio, e videntur
                          repellere errorem opinor facete invidi perspici simul liberos,
                          inhumanus. Fingitur iudico simulent polyaeno conclusionemque
                          atomis placatae solido etiam, optinere defenditur libero
                          consequentis aristoteli scribentur curis iudicium divinum.
                          Nostros pertineant, concederetur moveat laborum caeco secutus
                          rectas. Dignitatis tranquillitate negant utilior, approbantibus
                          polyaeno malint ullo vide. Possum sane confidam cogitavisse.
                          Sumitur. Diis.
                        </Tab>
                        <Tab eventKey={3} title="CSS">
                          Chrysippe rebus institutionem utrisque dixisset manus quippiam ignorare defatigatio
                          doctiores, essent doctus ipsam tamquam complexiones corporisque,
                          ars umbram sentiri venandi. Ipsam. Reprehenderit tantum debent
                          sicine assumenda comprobavit, assumenda primos fuerit atomos
                          amicorum inducitur quaedam miserum, potitur numquid effluere
                          haeret ipsos consuetudine, munere putet fugiendis orationis
                          quantumcumque. Perferendis attento saluti liberatione contra,
                          constituam efficeret quaeso accusamus quieti petat rem nisi
                          amicum.
                        </Tab>
                        <Tab eventKey={4} title="Javascript">
                          Laudabilis. At artes audiebamus firmam discordiae potione albam ferantur, epicureum
                          loquerer videretur formidinum utrisque simulent postremo,
                          praesidia variari fecerit ferantur. Hominibus doctissimos
                          multi, ferentur, certissimam medicorum bonum iucundius depravare
                          facile. Degendae istius perfunctio quisquis ordinem ornatum,
                          praeda atomi degendae animus. Mens eximiae placuit terrore,
                          sollicitant efficeret audeam tantalo, vulgo laudantium evertitur
                          spe meminerunt timentis populo, senserit inprobitas facilius
                          referri consiliisque.
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                  {/* End Example Tabs Solid Left */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-lg-6">
                  {/* Example Tabs Line */}
                  <div className="example-wrap margin-lg-0">
                    <div className="nav-tabs-horizontal nav-tabs-line content-padding-top">
                      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" bsStyle="tabs">
                        <Tab eventKey={1} title="Home">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neglegentur sabinum instructus
                          fingitur accusantibus harum neque consuetudine intereant
                          numeris, ipse tuemur suum apud mediocrem iactant. Libidinibus
                          amatoriis dicta albuci manum, statue.
                        </Tab>
                        <Tab eventKey={2} title="Components">
                          Negant parvos fructu nostram mutans supplicii ac dissentias, maius tibi licebit
                          ruinae philosophia. Salutatus repellere titillaret expetendum
                          ipsi. Cupiditates intellegam exercitumque privatio concederetur,
                          sempiternum, verbis malint dissensio nullas noctesque earumque.
                        </Tab>
                        <Tab eventKey={3} title="CSS">
                          Benivole horrent tantalo fuisset adamare fugiendam tractatos indicaverunt animis
                          chaere, brevi minuendas, ubi angoribus iisque deorsum audita
                          haec dedocendi utilitas. Panaetium erimus platonem varias
                          imperitos animum, iudiciorumque operis multa disputando.
                        </Tab>
                        <Tab eventKey={4} title="Javascript">
                          Metus subtilius texit consilio fugiendam, opinionum levius amici inertissimae pecuniae
                          tribus ordiamur, alienus artes solitudo, minime praesidia
                          proficiscuntur reiciat detracta involuta veterum. Rutilius
                          quis honestatis hominum, quisquis percussit sibi explicari.
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                  {/* End Example Tabs Line */}
                </div>
                <div className="col-lg-6">
                  {/* Example Tabs Line Left */}
                  <div className="example-wrap">
                    <div className="nav-tabs-vertical content-padding-vertical nav-tabs-line">
                      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" bsStyle="tabs">
                        <Tab eventKey={1} title="Home">
                          Puto loqueretur maxime tuentur statuam quanta quamquam multoque cogitavisse, romano
                          continens repellat omnis liquidae, inveneris aegritudine
                          inesse dirigentur graece secundum ipso unam, cognitionis
                          isdem mortem tantis opibus turma virtus legum, procedat accusantium
                          ipse sine fuissent desideraturam. Naturalem virtutum familiari
                          nasci tenebo provident convincere. Senserit ultima faciam
                          deterius plurimum ornateque curiosi. Oratione sit, dices
                          malunt quibusdam. Distinguique parendum contentam graecam
                          sale.
                        </Tab>
                        <Tab eventKey={2} title="Components">
                          Quaerat delectus arte exhorrescere summum disputando agatur perfunctio, e videntur
                          repellere errorem opinor facete invidi perspici simul liberos,
                          inhumanus. Fingitur iudico simulent polyaeno conclusionemque
                          atomis placatae solido etiam, optinere defenditur libero
                          consequentis aristoteli scribentur curis iudicium divinum.
                          Nostros pertineant, concederetur moveat laborum caeco secutus
                          rectas. Dignitatis tranquillitate negant utilior, approbantibus
                          polyaeno malint ullo vide. Possum sane confidam cogitavisse.
                          Sumitur. Diis.
                        </Tab>
                        <Tab eventKey={3} title="CSS">
                          Chrysippe rebus institutionem utrisque dixisset manus quippiam ignorare defatigatio
                          doctiores, essent doctus ipsam tamquam complexiones corporisque,
                          ars umbram sentiri venandi. Ipsam. Reprehenderit tantum debent
                          sicine assumenda comprobavit, assumenda primos fuerit atomos
                          amicorum inducitur quaedam miserum, potitur numquid effluere
                          haeret ipsos consuetudine, munere putet fugiendis orationis
                          quantumcumque. Perferendis attento saluti liberatione contra,
                          constituam efficeret quaeso accusamus quieti petat rem nisi
                          amicum.
                        </Tab>
                        <Tab eventKey={4} title="Javascript">
                          Laudabilis. At artes audiebamus firmam discordiae potione albam ferantur, epicureum
                          loquerer videretur formidinum utrisque simulent postremo,
                          praesidia variari fecerit ferantur. Hominibus doctissimos
                          multi, ferentur, certissimam medicorum bonum iucundius depravare
                          facile. Degendae istius perfunctio quisquis ordinem ornatum,
                          praeda atomi degendae animus. Mens eximiae placuit terrore,
                          sollicitant efficeret audeam tantalo, vulgo laudantium evertitur
                          spe meminerunt timentis populo, senserit inprobitas facilius
                          referri consiliisque.
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                  {/* End Example Tabs Line Left */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel Tabs */}
          {/* Tabs In Panel */}
          <h4>Tabs With Inverse</h4>
          <div className="row">
            <div className="col-lg-6">
              {/* Example Tabs Inverse */}
              <div className="example-wrap">
                <div className="nav-tabs-horizontal nav-tabs-inverse content-padding">
                  <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" bsStyle="tabs">
                    <Tab eventKey={1} title="Home">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neglegentur sabinum instructus
                      fingitur accusantibus harum neque consuetudine intereant
                      numeris, ipse tuemur suum apud mediocrem iactant. Libidinibus
                      amatoriis dicta albuci manum, statue.
                    </Tab>
                    <Tab eventKey={2} title="Components">
                      Negant parvos fructu nostram mutans supplicii ac dissentias, maius tibi licebit
                      ruinae philosophia. Salutatus repellere titillaret expetendum
                      ipsi. Cupiditates intellegam exercitumque privatio concederetur,
                      sempiternum, verbis malint dissensio nullas noctesque earumque.
                    </Tab>
                    <Tab eventKey={3} title="CSS">
                      Benivole horrent tantalo fuisset adamare fugiendam tractatos indicaverunt animis
                      chaere, brevi minuendas, ubi angoribus iisque deorsum audita
                      haec dedocendi utilitas. Panaetium erimus platonem varias
                      imperitos animum, iudiciorumque operis multa disputando.
                    </Tab>
                    <Tab eventKey={4} title="Javascript">
                      Metus subtilius texit consilio fugiendam, opinionum levius amici inertissimae pecuniae
                      tribus ordiamur, alienus artes solitudo, minime praesidia
                      proficiscuntur reiciat detracta involuta veterum. Rutilius
                      quis honestatis hominum, quisquis percussit sibi explicari.
                    </Tab>
                  </Tabs>
                </div>
              </div>
              {/* End Example Tabs Inverse */}
            </div>
            <div className="col-lg-6">
              {/* Example Tabs Left Inverse */}
              <div className="example-wrap">
                <div className="nav-tabs-vertical content-padding-vertical nav-tabs-inverse">
                  <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" bsStyle="tabs">
                    <Tab eventKey={1} title="Home">
                      Puto loqueretur maxime tuentur statuam quanta quamquam multoque cogitavisse, romano
                      continens repellat omnis liquidae, inveneris aegritudine
                      inesse dirigentur graece secundum ipso unam, cognitionis
                      isdem mortem tantis opibus turma virtus legum, procedat accusantium
                      ipse sine fuissent desideraturam. Naturalem virtutum familiari
                      nasci tenebo provident convincere. Senserit ultima faciam
                      deterius plurimum ornateque curiosi. Oratione sit, dices
                      malunt quibusdam. Distinguique parendum contentam graecam
                      sale.
                    </Tab>
                    <Tab eventKey={2} title="Components">
                      Quaerat delectus arte exhorrescere summum disputando agatur perfunctio, e videntur
                      repellere errorem opinor facete invidi perspici simul liberos,
                      inhumanus. Fingitur iudico simulent polyaeno conclusionemque
                      atomis placatae solido etiam, optinere defenditur libero
                      consequentis aristoteli scribentur curis iudicium divinum.
                      Nostros pertineant, concederetur moveat laborum caeco secutus
                      rectas. Dignitatis tranquillitate negant utilior, approbantibus
                      polyaeno malint ullo vide. Possum sane confidam cogitavisse.
                      Sumitur. Diis.
                    </Tab>
                    <Tab eventKey={3} title="CSS">
                      Chrysippe rebus institutionem utrisque dixisset manus quippiam ignorare defatigatio
                      doctiores, essent doctus ipsam tamquam complexiones corporisque,
                      ars umbram sentiri venandi. Ipsam. Reprehenderit tantum debent
                      sicine assumenda comprobavit, assumenda primos fuerit atomos
                      amicorum inducitur quaedam miserum, potitur numquid effluere
                      haeret ipsos consuetudine, munere putet fugiendis orationis
                      quantumcumque. Perferendis attento saluti liberatione contra,
                      constituam efficeret quaeso accusamus quieti petat rem nisi
                      amicum.
                    </Tab>
                    <Tab eventKey={4} title="Javascript">
                      Laudabilis. At artes audiebamus firmam discordiae potione albam ferantur, epicureum
                      loquerer videretur formidinum utrisque simulent postremo,
                      praesidia variari fecerit ferantur. Hominibus doctissimos
                      multi, ferentur, certissimam medicorum bonum iucundius depravare
                      facile. Degendae istius perfunctio quisquis ordinem ornatum,
                      praeda atomi degendae animus. Mens eximiae placuit terrore,
                      sollicitant efficeret audeam tantalo, vulgo laudantium evertitur
                      spe meminerunt timentis populo, senserit inprobitas facilius
                      referri consiliisque.
                    </Tab>
                  </Tabs>
                </div>
              </div>
              {/* End Example Tabs Left Inverse */}
            </div>
            <div className="clearfix visible-lg-block"/>
            <div className="col-lg-6">
              {/* Example Tabs Solid Inverse */}
              <div className="example-wrap">
                <div className="nav-tabs-horizontal nav-tabs-inverse content-padding nav-tabs-solid">
                  <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" bsStyle="tabs">
                    <Tab eventKey={1} title="Home">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neglegentur sabinum instructus
                      fingitur accusantibus harum neque consuetudine intereant
                      numeris, ipse tuemur suum apud mediocrem iactant. Libidinibus
                      amatoriis dicta albuci manum, statue.
                    </Tab>
                    <Tab eventKey={2} title="Components">
                      Negant parvos fructu nostram mutans supplicii ac dissentias, maius tibi licebit
                      ruinae philosophia. Salutatus repellere titillaret expetendum
                      ipsi. Cupiditates intellegam exercitumque privatio concederetur,
                      sempiternum, verbis malint dissensio nullas noctesque earumque.
                    </Tab>
                    <Tab eventKey={3} title="CSS">
                      Benivole horrent tantalo fuisset adamare fugiendam tractatos indicaverunt animis
                      chaere, brevi minuendas, ubi angoribus iisque deorsum audita
                      haec dedocendi utilitas. Panaetium erimus platonem varias
                      imperitos animum, iudiciorumque operis multa disputando.
                    </Tab>
                    <Tab eventKey={4} title="Javascript">
                      Metus subtilius texit consilio fugiendam, opinionum levius amici inertissimae pecuniae
                      tribus ordiamur, alienus artes solitudo, minime praesidia
                      proficiscuntur reiciat detracta involuta veterum. Rutilius
                      quis honestatis hominum, quisquis percussit sibi explicari.
                    </Tab>
                  </Tabs>
                </div>
              </div>
              {/* End Example Tabs Solid Inverse */}
            </div>
            <div className="col-lg-6">
              {/* Example Tabs Solid Left Inverse */}
              <div className="example-wrap">
                <div className="nav-tabs-vertical content-padding-vertical nav-tabs-inverse nav-tabs-solid">
                  <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" bsStyle="tabs">
                    <Tab eventKey={1} title="Home">
                      Puto loqueretur maxime tuentur statuam quanta quamquam multoque cogitavisse, romano
                      continens repellat omnis liquidae, inveneris aegritudine
                      inesse dirigentur graece secundum ipso unam, cognitionis
                      isdem mortem tantis opibus turma virtus legum, procedat accusantium
                      ipse sine fuissent desideraturam. Naturalem virtutum familiari
                      nasci tenebo provident convincere. Senserit ultima faciam
                      deterius plurimum ornateque curiosi. Oratione sit, dices
                      malunt quibusdam. Distinguique parendum contentam graecam
                      sale.
                    </Tab>
                    <Tab eventKey={2} title="Components">
                      Quaerat delectus arte exhorrescere summum disputando agatur perfunctio, e videntur
                      repellere errorem opinor facete invidi perspici simul liberos,
                      inhumanus. Fingitur iudico simulent polyaeno conclusionemque
                      atomis placatae solido etiam, optinere defenditur libero
                      consequentis aristoteli scribentur curis iudicium divinum.
                      Nostros pertineant, concederetur moveat laborum caeco secutus
                      rectas. Dignitatis tranquillitate negant utilior, approbantibus
                      polyaeno malint ullo vide. Possum sane confidam cogitavisse.
                      Sumitur. Diis.
                    </Tab>
                    <Tab eventKey={3} title="CSS">
                      Chrysippe rebus institutionem utrisque dixisset manus quippiam ignorare defatigatio
                      doctiores, essent doctus ipsam tamquam complexiones corporisque,
                      ars umbram sentiri venandi. Ipsam. Reprehenderit tantum debent
                      sicine assumenda comprobavit, assumenda primos fuerit atomos
                      amicorum inducitur quaedam miserum, potitur numquid effluere
                      haeret ipsos consuetudine, munere putet fugiendis orationis
                      quantumcumque. Perferendis attento saluti liberatione contra,
                      constituam efficeret quaeso accusamus quieti petat rem nisi
                      amicum.
                    </Tab>
                    <Tab eventKey={4} title="Javascript">
                      Laudabilis. At artes audiebamus firmam discordiae potione albam ferantur, epicureum
                      loquerer videretur formidinum utrisque simulent postremo,
                      praesidia variari fecerit ferantur. Hominibus doctissimos
                      multi, ferentur, certissimam medicorum bonum iucundius depravare
                      facile. Degendae istius perfunctio quisquis ordinem ornatum,
                      praeda atomi degendae animus. Mens eximiae placuit terrore,
                      sollicitant efficeret audeam tantalo, vulgo laudantium evertitur
                      spe meminerunt timentis populo, senserit inprobitas facilius
                      referri consiliisque.
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
            {/* End Example Tabs Solid Left Inverse */}
          </div>
          {/* End Tabs With Inverse */}


          {/* Panel Collapse */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Collapse</h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-lg-6">
                  {/* Example Example */}
                  <div className="example-wrap margin-lg-0">
                    <h4 className="example-title">Example</h4>
                    <p>Click the buttons below to show and hide another element via class
                      changes:</p>
                    <ul>
                      <li><code>.collapse</code> hides content</li>
                      <li><code>.collapsing</code> is applied during transitions</li>
                      <li><code>.collapse.in</code> shows content</li>
                    </ul>
                    <p>You can use a link with the <code>href</code> attribute, or a button
                      with the <code>data-target</code> attribute. In both cases, the
                      <code>data-toggle="collapse"</code> is required.</p>
                    <div className="example">
                      <div className="example-buttons">
                        <button type="button" className="btn btn-primary" onClick={() => {
                          console.log('CLICK_THIS', this);
                          this.setState({ openCollapse: !this.state.openCollapse });
                        }}>
                          Collapsible
                        </button>
                      </div>
                      <Panel collapsible expanded={this.state.openCollapse}>
                        <Well>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                          ad squid. Nihil anim keffiyeh helvetica, craft beer labore
                          wes anderson cred nesciunt sapiente ea proident.
                        </Well>
                      </Panel>
                    </div>
                  </div>
                  {/* End Example Example */}
                </div>
                <div className="col-lg-6">
                  {/* Example Accordion Example */}
                  <div className="example-wrap">
                    <h4 className="example-title">Accordion Example</h4>
                    <div className="example">
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
                  {/* End Example Accordion Example */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel Collapse */}
          <div>
            <h3>Accordions</h3>
            <div className="row">
              <div className="col-lg-6">
                {/* Example Default Accordion */}
                <div className="examle-wrap">
                  <h4 className="example-title">Default Accordion</h4>
                  <div className="example">
                    <Accordion className="panel-group-white ">
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
                {/* End Example Default Accordion */}
              </div>
              <div className="col-lg-6">
                {/* Example Continuous Accordion */}
                <div className="examle-wrap">
                  <h4 className="example-title">Continuous Accordion</h4>
                  <div className="example">
                    <Accordion className=" panel-group-white panel-group-continuous">
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
                {/* End Example Continuous Accordion */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TabsAccordionsExample;
