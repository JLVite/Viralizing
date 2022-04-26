import React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import Loading from '../../../core/ui/components/loading';
import Edit from '../layouts/edit';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';
import notie from 'notie';
import { I18n } from 'react-redux-i18n';

let getTranslation = (key) => {
  return 'Campaigns.edit.messages.' + key;
};

class ListContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      saving: 'saved'
    };

    this.saveReport = this.saveReport.bind(this);
  }

  componentDidMount() {
    this.savedData = JSON.stringify(this.props.account);
    let component = this;
    this.saveInterval = setInterval(function () {
      if (component.props.form && component.props.form.values) {
        component.saveReport(component.props.form.values, true);
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.saveInterval);
  }

  saveReport(data, silent) {
    if (silent && typeof (silent) === 'boolean') {
      silent = true;
    } else {
      silent = false;
    }

    if (silent && this.savedData === JSON.stringify(data)) {
      this.setState({ saving: 'saved' });
      return;
    }

    this.setState({ saving: 'saving' });
    this.savedData = JSON.stringify(data);
    let component = this;
    //TODO: Validate Data
    Meteor.call('report-save', data, function (err, res) {
      if (err) {
        if (err.error === 500) {
          err.error = 'Failed to create report.';
        }
        //console.log("ERROR",err);
        notie.alert(3, err.reason || err.error, 3);
        return;
      }
      component.setState({ saving: 'saved' });
      if (!silent) {
        notie.alert(1, I18n.t(getTranslation('saved')), 3);
      }
      //console.log("SERVER_SAVE_POSTS_RESPONSE",res);
    });
  }

  render() {
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <Edit initialValues={this.props.report} refetch={this.props.refetch} history={this.props.history}/>}
      </div>
    );
  }
}

const QUERY = gql`
    query ($reportId: String!){
        report(reportId:$reportId){
            _id,
            name,
            owner {
                _id
            },
            items {
                name
                Description
                type,
                size,
                source {
                    type,
                    campaign {
                        _id
                        status
                    },
                    account {
                        _id
                        suspended
                        type
                        active
                        delete
                        network
                        groups
                        campaignsCount
                    }
                }
            }
        }
    }
`;

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, report, refetch } }) => {
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      report,
      refetch,
    };
  },
  options: (ownProps) => (
    {
      variables: {
        reportId: ownProps.params.reportID,
        query: ''
      },
      pollInterval: 3000
    }
  ),
});

const ListContainerWithData = withData(ListContainer);

export default connect(state => {
  return {
    form: state.form['report-edit']
  };
})(ListContainerWithData);
