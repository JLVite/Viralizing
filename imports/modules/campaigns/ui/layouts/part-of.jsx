import React from 'react';
import Modal from 'react-modal';
import { Translate } from 'react-redux-i18n';
import ListEmpty from '../../../core/ui/components/list-empty';
import ListTable from '../components/part-of/list-table';
import CampaignTypes from '../components/campaign-types';

class PartOfList extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

  }

  render() {
    let getTranslation = (key) => {
      return 'Campaigns.' + key;
    };
    return (
      <div className="page-content container-fluid">
        <CampaignTypes/>
        {(this.props.data && this.props.data.length) ? <ListTable data={this.props.data}/> : <ListEmpty
          message={<Translate value={getTranslation('empty.message')}/>}
           callback={this.openModal}/>}
      </div>
    );
  }
}

export default PartOfList;
