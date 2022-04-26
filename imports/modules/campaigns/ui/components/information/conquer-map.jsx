import React from 'react';
import $ from 'jquery';
import TagsInput from '../../../../core/ui/components/forms/input-tags';

class ConquerMap extends React.Component {
  constructor() {
    super();

  }

  componentDidMount() {
    let component = this;
    let { countries } = this.props;
    let codes = [];
    if (component.props.value && Array.isArray(component.props.value) && typeof component.props.value[0] === 'string') {
      codes = component.props.value.map((code) => {
        return countries.filter((c) => c.name === code)[0].code;
      });
    }
    let domMap = $('#world-map-campaign-information');
    let map = domMap.vectorMap({
      map: 'world_mill',
      regionsSelectable: true,
      selectedRegions: codes,
      regionStyle: {
        initial: {
          fill: '#ccc'//fill: '#5c9dc1'
        },
        selected: {
          fill: '#c28c58'
        }
      },
      onRegionClick: function (e, code, d, f) {
        //console.log("REGION CLICK",code);
        //console.log("MAP_DATA", map, mapObject);
        setTimeout(function () {
          let regions = mapObject.getSelectedRegions();
          let value = regions.map((r) => {
            return countries.filter((c) => c.code === r)[0].name;
          });
          //console.log("MAP VALUES",value);
          component.props.onChange(value);
          setTimeout(() => $('.jvectormap-tip').remove(), 100);
        }, 100);

        //component.props.close();

      }
    });

    let mapObject = domMap.vectorMap('get', 'mapObject');
  }

  render() {

    return (
      <div>
        <h3>{this.props.title}</h3>
        <div id="world-map-campaign-information" className="vectorMap"
             style={{ width: ' 100%', height: ' 400px' }}></div>
        <a className="btn btn-primary pull-right" onClick={this.props.close}>{this.props.save}</a>
        {/*<TagsInput/>*/}
      </div>
    );
  }
}

export default ConquerMap;
