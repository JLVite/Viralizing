import React from 'react';
import BigCalendar from 'react-big-calendar';
import Modal from 'react-modal';
import { Translate, I18n } from 'react-redux-i18n';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import _ from 'lodash';
import PostUpdate from '../containers/post-update';
import SocialAvatar from '../../../core/ui/components/social-avatar';

const getTranslation = key => `Agenda.calendar.${key}`;

const tooltipContent = content => <Tooltip id="tooltip_content">{content}</Tooltip>;

const Event = ({ event }) => (
  <div>
    <OverlayTrigger
      placement="left"
      overlay={tooltipContent(<Translate value={getTranslation(`types.${event.type}`)} />)}
    >
      <div className={`event-${event.type}`}>
        {event.preview && <SocialAvatar name={event.title} network={event.network} avatar={event.preview} size="35" />}
        <span>{event.title}</span>
      </div>
    </OverlayTrigger>
  </div>
);


const EventAgenda = ({ event }) => (
  <div className={`event-${event.type}`}>
    {event.preview && <SocialAvatar name={event.title} network={event.network} avatar={event.preview} size="35" />}
    <span>
      {event.title}
      {' '}
(
      <Translate value={getTranslation(`types.${event.type}`)} />
)
    </span>
  </div>
);

BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component {
  constructor() {
    super();

    this.state = {
      event: null,
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(event) {
    this.setState({ modalIsOpen: true, event });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }



  render() {
    const messages = {
      allDay: I18n.t(getTranslation('labels.allDay')),
      previous: I18n.t(getTranslation('labels.previous')),
      next: I18n.t(getTranslation('labels.next')),
      today: I18n.t(getTranslation('labels.today')),
      month: I18n.t(getTranslation('labels.month')),
      week: I18n.t(getTranslation('labels.week')),
      day: I18n.t(getTranslation('labels.day')),
      agenda: I18n.t(getTranslation('labels.agenda')),
      date: I18n.t(getTranslation('labels.date')),
      time: I18n.t(getTranslation('labels.time')),
      event: I18n.t(getTranslation('labels.event')),
    };
    const formats = {
      dateFormat: (date, culture, localizer) => moment(date).format('DD'),
      monthHeaderFormat: (date, culture, localizer) => {
        const month = moment(date).format('MMMM').toLowerCase();
        return `${I18n.t(getTranslation(`months.${month}`))} ${moment(date).format('YYYY')}`;
      },
      dayFormat: (date, culture, localizer) => {
        const day = moment(date).format('dddd').toLowerCase();
        return `${I18n.t(getTranslation(`days.${day}`)).substr(0, 2)} ${moment(date).format('DD/MM')}`;
      },

      weekdayFormat: (date, culture, localizer) => {
        const day = moment(date).format('dddd').toLowerCase();
        return I18n.t(getTranslation(`days.${day}`));
      },
    };
    const { refetch, account, tabIndex } = this.props;
    const { event } = this.state;
    const events = this.props.events.map(e => Object.assign({}, e, {
      start: e.start?new Date(e.start) : new Date(e.date),
      end: e.end?new Date(e.end) : new Date(e.date),
    }));

    return (
      <div>
        <BigCalendar
          events={events}
          onSelectEvent={e => this.openModal(e)}
          defaultDate={new Date()}
          defaultView="month"
          timeslots={12}
          popup
          messages={messages}
          formats={formats}
          components={{
            event: Event,
            agenda: {
              event: EventAgenda,
            },
          }}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="app-modal"
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button className="close" onClick={this.closeModal}>
            <i className="icon wb-close-mini" aria-hidden="true" />
          </button>
          <PostUpdate tabIndex={tabIndex} event={event} close={this.closeModal} refetchAgenda={refetch} account={account} />
        </Modal>
      </div>
    );
  }
}

export default Calendar;
