import React from 'react';
import FacebookPreview from '../../../../../search/ui/components/previews/facebook';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function getToltip(tooltip) {
  return <Tooltip id={String(Number(new Date()))}>{tooltip}</Tooltip>;
}

function formatDate(date) {
  if (date === 'Invalid Date') return 'Ongoing';
  return moment(new Date(date)).format('DD/MM/YYYY');
}

class AdView extends React.Component {
  render() {
    let { ad, socialAccount } = this.props;
    if (!ad) return null;
    console.log('ad_VIEW', ad);
    let post = {
      user: {
        avatar: socialAccount.information.avatar,
        name: socialAccount.information.name,
      },
      link: ad.creative[0].link,
      date: new Date(),
      description: ad.creative[0].body,
      media: {
        type: 'photo',
        url: ad.creative[0].image
      }
    };
    console.log('AD_VIEW_POST', post);
    return (
      <div className="ad-view">
        <div className="title">
          Ad Preview
        </div>
        <div className="name">

          <div className="name">
            {ad.name}
          </div>
          <OverlayTrigger placement="left" overlay={getToltip(ad.status.effective)}>
            <div className={'status ' + ad.status.effective.toLowerCase()}/>
          </OverlayTrigger>
          <div className="created">
            {formatDate(ad.created)}
          </div>
        </div>
        {ad.reviewFeedback && (
          <blockquote className="blockquote custom-blockquote blockquote-danger">
            <p className="mb-0">
              {ad.reviewFeedback}
            </p>
          </blockquote>
        )}


        <FacebookPreview data={post} showBadge={false}/>
      </div>
    );
  }
}

export default AdView;


