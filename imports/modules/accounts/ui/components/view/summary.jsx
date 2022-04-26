import React from 'react';
import { connect } from 'react-redux';
import SummaryPeople from '../summary/people';
import SummaryInformation from '../summary/information';
import SummaryPricing from '../summary/pricing';
import SummaryInformationForm from './summary/information-edit';
import SummaryAnalytics from '../summary/analytics';
import SummaryGallery from '../summary/gallery';
import SummaryCalendar from '../summary/calendar';

class Summary extends React.Component {
  render() {
    let { account } = this.props;
    let { information, pricing, settings, manager, owner, shares, groups, gallery } = account;
    let accountID = account._id;
    return (
      <div className="content-padding-30">
        <div className="row">
          <SummaryPeople owner={owner}
                         manager={manager}
                         shares={shares}/>
          <SummaryInformation information={information}
                              settings={settings}
                              groups={groups}/>
          <SummaryPricing pricing={pricing}/>
        </div>

        <SummaryInformationForm information={information}/>
        <SummaryAnalytics/>

        <div className="row">
          <div className="col-md-6">
            <SummaryGallery gallery={gallery}/>
          </div>
          <div className="col-md-6">
            <SummaryCalendar accountID={accountID}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    form: state.form['account-edit']
  };
})(Summary);
