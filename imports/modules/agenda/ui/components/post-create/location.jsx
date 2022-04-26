import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { Translate, I18n } from 'react-redux-i18n';
import InputGeolocation from '../../../../core/ui/components/forms/input-geolocation';

class PostLocation extends React.Component {
  constructor() {
    super();

    this.state = {
      location: '',
      markers: [{
        position: {
          lat: 19.4403823,
          lng: -99.184876,
        },
        defaultAnimation: 2,
      }],
      center: {
        lat: 19.4403823,
        lng: -99.184876,
      },
    };

    this.onMapMove = this.onMapMove.bind(this);
    this.saveLocation = this.saveLocation.bind(this);
    this.setPosition = this.setPosition.bind(this);
  }


  setPosition(position) {
    const newState = { ...this.state };
    newState.center = position.location;
    newState.coordinates = position.location;
    newState.location = position.label;
    newState.markers = [
      {
        position: position.location,
        defaultAnimation: 2,
      },
    ];
    this.setState(newState);
  }

  componentWillReceiveProps() {
    const { location } = this.props;
    if (location) {
      let position = { ...location };
      if (location.coordinates) {
        position = {
          location: location.coordinates,
          label: location.location,
        };
      }
      this.setPosition(position);
    }
  }

  onMapMove() {
    const component = this;
    return function () {
      const values = this.getCenter();
      const lat = values.lat();
      const lng = values.lng();

      const geocoder = new google.maps.Geocoder();
      const debouncedGeocoder = _.debounce(geocoder.geocode, 500);

      component.setState({
        coordinates: [lat, lng],
        markers: [
          {
            position: {
              lat,
              lng,
            },
            defaultAnimation: 2,
          },
        ],
      });

      debouncedGeocoder({ location: { lat, lng } }, (res, status) => {
        if (status === 'OK') {
          if (res[1]) {
            component.setState({ location: res[0].formatted_address });
          } else {
            component.setState({ location: 'Unknown Location' });
          }
        } else {
          component.setState({ location: 'Unknown Location' });
        }
      });
    };
  }

  componentWillMount() {
    this.props.input.onChange(this.state);
  }

  saveLocation() {
    this.props.close();
    this.props.input.onChange(this.state);
  }

  render() {
    const Map = withGoogleMap(props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={14}
        defaultCenter={this.state.center}
        onDragEnd={props.onMapDrag}
      >
        {props.markers.map((marker, index) => (
          <Marker
            key={index}
            {...marker}
          />
        ))}
      </GoogleMap>
    ));
    return (
      <div
        className={`${this.props.open ? 'open' : ''} panel location-panel panel-modal`}
        style={{ background: '#fff' }}
      >
        <div className="panel-body container-fluid padding-20">
          <div className="row">
            <InputGeolocation
              location={this.props.location}
              input={{
                value: this.props.input.value || this.state.location,
                onChange: (a) => { this.setPosition(a); },
              }}
              types={[]}
            />
            {this.props.open ? (
              <Map
                containerElement={
                  <div style={{ height: '300px', margin: '20px 0' }} />
              }
                mapElement={
                  <div style={{ height: '300px', borderRadius: '.215rem' }} />
              }
                onMapDrag={() => {}}
                markers={this.state.markers}
              />
            ) : ''}
            <a className="btn btn-primary pull-right" onClick={this.saveLocation}>
              <Translate value="Agenda.publish.modal.write.controls.save" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PostLocation;