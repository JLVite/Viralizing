import React from 'react';
import { connect } from 'react-redux';
import SummaryPeople from './summary/people';
import SummaryInformation from './summary/information';
import SummaryPricing from './summary/pricing';
import SummaryInformationEdit from './summary/information-edit';
import SummaryAnalytics from './summary/analytics';
import SummaryGallery from './summary/gallery';
import SummaryCalendar from './summary/calendar';

class Summary extends React.Component {
  render() {
    const {
      information, pricing, settings, manager, owner, shares, groups, gallery, campaignsCount,
    } = this.props.form.values;
    const { accountID, campaignInviteSentCount } = this.props;
    return (
      <div className="content-padding-30">
        <div className="row">
          <SummaryPeople
            owner={owner}
            manager={manager}
            shares={shares}
          />
          <SummaryInformation
            campaignInviteSentCount={campaignInviteSentCount}
            campaignsCount={campaignsCount}
            information={information}
            settings={settings}
            groups={groups}
          />
          <SummaryPricing pricing={pricing} />
        </div>

        <SummaryInformationEdit information={information} />
        <SummaryAnalytics />

        <div className="row">
          <div className="col-md-6">
            <SummaryGallery gallery={gallery} />
          </div>
          <div className="col-md-6">
            <SummaryCalendar accountID={accountID} />
          </div>
          <div className="col-md-12" />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  form: state.form['account-edit'],
}))(Summary);
