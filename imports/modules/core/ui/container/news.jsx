import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../core/ui/components/loading';
import List from '../components/home/news-list';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';

class NewsContainer extends React.Component {
  render() {
    let { loading, getNews, refetch, history } = this.props;
    return (
      <div>
        {loading ? <Loading/> :
          <List data={getNews} refetch={refetch} history={history}/>}
      </div>
    );
  }
}

const QUERY = gql`
query($lang:String!){
  getNews(lang:$lang){
    title,
    author,
    link,
    type,
    image
  }
}
`;

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, getNews, refetch } }) => {
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };

    return {
      loading,
      getNews,
      refetch,
    };
  },
  options: (ownProps) => (
    {
      pollInterval: 150000,
      variables: {
        lang: ownProps.locale
      }
    }
  ),
});

const NewsContainerWithData = withData(NewsContainer);

export default NewsContainerWithData;
