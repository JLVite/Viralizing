import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import Header from './header';
import InputConquer from '../information/input-conquer';
import SocialAvatar from '../../../../core/ui/components/social-avatar';
import TargetObjectives from './information/objectives';
import Brands from '../summary/brands';

class Information extends React.Component {
  constructor() {
    super();

    this.handleTags = this.handleTags.bind(this);
  }

  handleTags(tags) {
    return tags.map((tag) => tag.split('#').length > 1 ? tag : '#' + tag);
  }

  render() {
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.information.' + key;
    };
    let { campaign } = this.props;
    let { owner, information } = campaign;
    return (
      <div>
        <Header campaign={campaign}/>
        <div className="content-padding-30">
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="campaignName">
                  <Translate value={getTranslation('form.name')}/>
                </label>
                <input type="text" className="form-control" defaultValue={information.name} readOnly={true}/>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="campaignName">
                  <Translate value={getTranslation('form.owner')}/>
                </label>
                <div className="form-control social-avatar-form">
                  <SocialAvatar avatar={owner.profile.avatar}
                                name={(owner.profile.name || '') + ' ' + (owner.profile.lastName || '')}/>
                  <span>{(owner.profile.name || '') + ' ' + (owner.profile.lastName || '')}</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="campaignName">
                  <Translate value={getTranslation('form.brand')}></Translate>
                </label>
                <Brands brands={information.brands} title={false}/>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="campaignName">
                  <Translate value={getTranslation('form.conquer')}/>
                </label>
                <InputConquer input={{ value: information.conquer, onChange: () => {} }}/>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="campaignName">
                  <Translate value={getTranslation('form.dateStart')}/>
                </label>
                <input type="text" className="form-control"
                       defaultValue={moment(new Date(information.dateStart)).format('DD/MM/YYYY')} readOnly={true}/>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="campaignName">
                  <Translate value={getTranslation('form.dateEnd')}/>
                </label>
                <input type="text" className="form-control"
                       defaultValue={moment(new Date(information.dateEnd)).format('DD/MM/YYYY')} readOnly={true}/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  <Translate value={getTranslation('form.description.label')}/>
                </label>
                <textarea readOnly={true} rows={3} className="form-control">{information.description}</textarea>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="campaignName">
                  <Translate value={getTranslation('form.url')}/>
                </label>
                <input type="text" className="form-control" defaultValue={information.url} readOnly={true}/>
              </div>
            </div>
          </div>
          <h4><Translate value={getTranslation('form.objectives.title')}/></h4>
          <TargetObjectives objectives={information.objectives} readOnly={true}/>
        </div>
      </div>
    );
  }
}

export default Information;
