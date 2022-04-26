import React from 'react';
import { Translate } from 'react-redux-i18n';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import InputFileUpload from '../../../core/ui/components/forms/input-file-upload';

class Header extends React.Component {
  render() {
    const getTranslation = key => `Campaigns.edit.tabs.information.${key}`;
    const { tabIndex } = this.props;
    const { information } = this.props.form.values;

    return (
      <div className="campaign-information">
        <div className="header">
          <Field
            tabIndex={tabIndex}
            component={InputFileUpload}
            name="cover"
            content={(
              <div
                className="back"
                style={{ background: (information.cover ? `url(${information.cover})` : '') }}
              >
                <div className={`add ${information.cover ? 'hidden' : ''}`}>
                  <i
                    className="icon wb-plus"
                    aria-hidden="true"
                  />
                </div>
              </div>
            )}
            uploader="campaign-image-upload"
            settings={{
              multiple: false,
              maxSize: 3 * 1024 * 1024,
              className: 'cover',
              activeClassName: 'drop-in',
              accept: 'image/png, image/jpeg, image/gif',
            }}
          />

          <Field
            tabIndex={tabIndex}
            component={InputFileUpload}
            name="profile"
            content={(
              <div
                className="back"
                style={{ background: (information.profile ? `url(${information.profile})` : '') }}
              >
                <div className={`add ${information.profile ? 'hidden' : ''}`}>
                  <i
                    className="icon wb-plus"
                    aria-hidden="true"
                  />
                </div>
              </div>
            )}
            uploader="campaign-image-upload"
            settings={{
              multiple: false,
              maxSize: 3 * 1024 * 1024,
              className: 'profile',
              activeClassName: 'drop-in',
              accept: 'image/png, image/jpeg, image/gif',
            }}
          />

          <div className="name">
            <div className="row">
              <div className="col-md-7">
                <div className="form-group">
                  <label htmlFor="campaignName">
                    <Translate value={getTranslation('form.name')} />
                  </label>
                  <p className="form-control-static">{information.name || '-'}</p>
                </div>
              </div>
              <div className="col-md-5 align-center">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="campaignName">
                        <Translate value={getTranslation('form.dateStart')} />
                      </label>
                      <p
                        className="form-control-static"
                      >
                        {moment(new Date(information.dateStart)).format('DD/MM/YYYY')}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="campaignName">
                        <Translate value={getTranslation('form.dateEnd')} />
                      </label>
                      <p
                        className="form-control-static"
                      >
                        {moment(new Date(information.dateEnd)).format('DD/MM/YYYY')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  form: state.form['campaign-edit'],
}))(Header);
