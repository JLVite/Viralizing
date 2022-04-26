import React from 'react';
import TimePicker from 'react-times';
import InfiniteCalendar from 'react-infinite-calendar';
import { Translate, I18n } from 'react-redux-i18n';

class PostTimeDate extends React.Component {
  constructor() {
    super();

    const date = moment();
    this.state = {
      time: date,
      quantum: 'AM'
    };

    this.onTimeChange = this.onTimeChange.bind(this);
    this.onCalendarChange = this.onCalendarChange.bind(this);
    this.saveDate = this.saveDate.bind(this);
    this.getCurrentDate = this.getCurrentDate.bind(this);
    this.reload = this.reload.bind(this);
    this.toggleTimekeeper = this.toggleTimekeeper.bind(this);
    this.onMeridiem = this.onMeridiem.bind(this);
  }

  onMeridiem(meridiem){
    this.setState(({quantum:meridiem}))
  }

  componentDidMount() {
    this.reload();
  }

  reload() {
    console.log('reload',this.props.event)
    let time = this.props.event ? new Date(this.props.event.start) : new Date();
    if (this.props.input && this.props.input.value) {
      console.log('changed')
      time = this.props.input.value;
    }
    const date = moment(time);
    this.setState({
      time: date,
      quantum: date.format('A'),
    });
  }

  componentWillMount() {
    this.reload();
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.input.value !== this.props.input.value){
      console.log('update',nextProps,this.props)
      this.setState({time:moment(nextProps.input.value)})
      return true;
    }else{
      return false;
    }
  }

  onTimeChange(time) {
    let values = time.split(":"),
        hours = Number(values[0]),
        minutes = Number(values[1]);
    if (this.state.quantum === "PM") {
      hours += 12;
    }
    const newDate = this.state.time.startOf("day").add(hours, "hours").add(minutes, "minutes");
    this.setState({time: newDate})
    if (this.props.autoSave) {
      this.saveDate();
    }
  }

  onCalendarChange(date) {
    const currentDate = this.state.time;
    const hours = currentDate.hours();
    const minutes = currentDate.minutes();
    const newTime = moment(date).hour(hours).minutes(minutes);

    this.setState({
      time: newTime,
    });
    if (this.props.autoSave) {
      this.saveDate();
    }
  }

  saveDate() {
    if (this.props.close) {
      this.props.close();
    }
    this.props.input.onChange(this.state.time.toDate());
  }

  getCurrentDate() {
    let date = moment();
    if (this.state && this.state.time) {
      date = moment(this.state.time);
    }

    return date;
  }

  toggleTimekeeper(val) {
    this.setState({ displayTimepicker: val });
  }

  render() {
    const getTranslation = key => `Agenda.publish.modal.${key}`;
    const props = this.props.input.value;
    const state = this.state.time;
    console.log('STATE',moment(this.state.time._d).format('h:mm'))
    
    return (
      <div className={`${this.props.open ? 'open' : ''} panel date-panel panel-modal`}>
        <div className="panel-body container-fluid padding-20">
          <div className="row">
            <div className="col-md-6">
              {this.props.open ? (
                <InfiniteCalendar
                  minDate={new Date()}
                  onSelect={this.onCalendarChange}
                  selected={this.props.input.value || this.state.time}
                  overscanMonthCount={1}
                  height={250}
                  rowHeight={55}
                  className="ibol-calendar"
                />
              ) : ''}
            </div>
            <div className="col-md-6 date-controls">
            <TimePicker
                 timeMode="12"
                 withoutIcon
                  focused
                 draggable={false}
                 onTimeChange={this.onTimeChange}
                 meridiem={this.state.quantum}
                 onMeridiemChange={this.onMeridiem}
                 time={moment(this.state.time._d).format('h:mm')}
                 phrases={{close: I18n.t(getTranslation('cancel'))}}
                 />
                  <div>
                    <p>{moment.tz.guess().split('_').join(' ')}</p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="time-zone">
                          <div className="location"><Translate value={getTranslation('cities.mexico')} /></div>
                          <div
                            className="time"
                          >
                            {this.getCurrentDate().tz('America/Mexico_City').format('hh:mm A')}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="time-zone">
                          <div className="location"><Translate value={getTranslation('cities.newYork')} /></div>
                          <div
                            className="time"
                          >
                            {this.getCurrentDate().tz('America/New_York').format('hh:mm A')}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="time-zone">
                          <div className="location"><Translate value={getTranslation('cities.london')} /></div>
                          <div
                            className="time"
                          >
                            {this.getCurrentDate().tz('Europe/London').format('hh:mm A')}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="time-zone">
                          <div className="location"><Translate value={getTranslation('cities.losAngeles')} /></div>
                          <div
                            className="time"
                          >
                            {this.getCurrentDate().tz('America/Los_Angeles').format('hh:mm A')}
                          </div>
                        </div>
                      </div>
                    </div>
                    {!this.props.autoSave && (
                    <a className="btn btn-primary pull-right" onClick={this.saveDate}>
                      <Translate value={getTranslation('time.save')} />
                    </a>
                    )}
                  </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}

export default PostTimeDate;
