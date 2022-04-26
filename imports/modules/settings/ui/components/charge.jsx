import React from 'react';
import AppSettings from '../../../../settings';
import InputSelect from '../../../core/ui/components/forms/input-select';
import { Translate, I18n } from 'react-redux-i18n';
import { Field } from 'redux-form';

class Charge extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let getTranslation = (key) => {
      return 'Settings.tabs.charge.' + key;
    };
    return (
      <div className="row">
        <div className="col-md-6" style={{ 'margin': '40px' }}>
          <div className="form-group">
            <label htmlFor="informationGender">
              <Translate value={getTranslation('country')}/>
            </label>
            <Field
              name="example"
              component={InputSelect}
              className="charge-countries form-control"
              options={['México']}/>
          </div>
          <div style={{ 'border': '1px solid rgba(0, 0, 0, .1)' }}>
            <div className="table-responsive">
              <table className="table">
                <thead>
                <tr>
                  <th>Forma de pago</th>
                  <th>Procesando en</th>
                  <th>Tarifa</th>
                  <th>Moneda</th>
                  <th>Información</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td><input type="radio" style={{ 'margin': '0 10px 0 0' }}/>Paypal</td>
                  <td>3 a 4 horas</td>
                  <td>Comisiones por retiro de Paypal</td>
                  <td>USD</td>
                  <td>Conecta tu cuenta de Paypal</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className="container">
              <hr style={{ 'margin': '0 0 13px 0' }}/>
            </div>
          </div>
          <div className="charge-border">
            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <Translate value={getTranslation('add')}/>
                </h4>
              </div>
              <hr style={{ 'margin': 'auto' }}/>
            </div>
            <div className="container">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZuu6bTmrvhAd_7Dr5SIvwtsJOVZCkQ_VyuR0f7O-uRqPCz0RFBA"
                  alt=""
                  style={{ 'width': '150px', 'margin': '-12px 0 12px' }}/>
              </div>
              <Translate value={getTranslation('desc')}/> <a href="https://www.paypal.com">Más información sobre Paypal</a>
              <label htmlFor="informationGender" style={{ 'margin': '10px 0' }}>
                <Translate value={getTranslation('question_1')}/>
              </label>
              <Field
                name="description"
                component="input"
                className="background-white form-control"/>
              <label htmlFor="informationGender" style={{ 'margin': '10px 0' }}>
                <Translate value={getTranslation('question_2')}/>
              </label>
              <Field
                name="example"
                component={InputSelect}
                className="background-white form-control"
                options={['USD']}
              />
              <hr style={{ 'margin': '13px 0 0 0' }}/>
              <button type="button" className="charge-confirm btn btn-primary">
                <Translate value={getTranslation('confirm')}/>
              </button>
            </div>
          </div>
          <div className="charge-border">
            <div className="panel" style={{ 'margin': '0' }}>
              <div className="panel-heading">
                <h4 className="panel-title">
                  <Translate value={getTranslation('methods')}/>
                </h4>
              </div>
              <hr style={{ 'margin': 'auto' }}/>
            </div>
            <div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                  <tr>
                    <th>Metodos</th>
                    <th>Detalle</th>
                    <th>Estado</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Paypal <span className="label label-pill label-dark"
                                     style={{ 'marginLeft': '10px' }}>Predeterminado</span></td>
                    <td>luisjc140992@gmail.com</td>
                    <td>Nuevo</td>
                    <td>
                      <Field
                        name="example"
                        component={InputSelect}
                        className="charge-options background-white form-control"
                        options={['Opciones']}
                        />
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div className="container">

                <hr style={{ 'margin': '0 0 13px 0' }}/>
                <button type="button" className="charge-addMethod btn btn-danger">
                  <Translate value={getTranslation('addMethod')}/>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4" style={{'margin': '40px','border': '1px solid rgba(0, 0, 0, .1)'}}>
          <h3><Translate value={getTranslation('minTitle')}/></h3>
          <h5><Translate value={getTranslation('minDesc_1')}/></h5>
          <h5><Translate value={getTranslation('minDesc_2')}/></h5>
          <label htmlFor="informationGender" style={{ 'margin': '10px 0', 'fontWeight': 'bold' }}>
            <Translate value={getTranslation('question_3')}/>
          </label>
          <Field
            name="description"
            component="input"
            className="background-white form-control"/>
          <button type="button" className="charge-accept btn btn-primary">
            <Translate value={getTranslation('accept')}/>
          </button>
        </div>
      </div>
    );
  }
}

export default Charge;
