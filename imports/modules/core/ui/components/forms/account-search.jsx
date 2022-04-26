import React from 'react';
import Select from 'react-select';
import { Translate, I18n } from 'react-redux-i18n';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import $ from 'jquery';
import SocialAvatar from '../social-avatar';

const SocialAvatarOption = createReactClass({
  propTypes: {
    children: PropTypes.node,
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    isFocused: PropTypes.bool,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func,
  },
  handleMouseDown(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.selectOption(this.props.data, event);
  },
  render() {
    const { name, lastName, avatar } = this.props.data.information;
    return (
      <div
        key={this.props.data._id}
        className={`${this.props.className} react-select__option`}
        onMouseDown={this.handleMouseDown}
        title={this.props.data.title}
      >
        <SocialAvatar avatar={avatar} name={`${name} ${lastName}`} network={this.props.data.network} size="50" />
        <span className="title">{`${name} ${lastName}`}</span>
      </div>
    );
  },
});

const SocialAvatarValue = createReactClass({
  propTypes: {
    children: PropTypes.node,
    placeholder: PropTypes.string,
    value: PropTypes.object,
  },
  render() {
    const { name, lastName, avatar } = this.props.value.information;
    return (
      <div key={this.props.data._id} className="Select-value" title={this.props.value.information.name}>
        <span className="Select-value-label">
          <SocialAvatar avatar={avatar} name={`${name} ${lastName}`} network={this.props.value.network} size="50" />
          <span className="title">{`${name} ${lastName}`}</span>
        </span>
      </div>
    );
  },
});

function arrowRenderer() {
  return (
    <span />
  );
}

class AccountSearch extends React.Component {
  constructor() {
    super();

    this.setValue = this.setValue.bind(this);
    this.filterOptions = this.filterOptions.bind(this);
  }


  setValue(value, b, c) {
    console.log('should show TESTSETSET');
    const ok = $('[class^="css-kj6f9i"]').html();
    console.log('TESTSETSET', ok);


    console.log('VALUE', value, b, c);
    this.props.input.onChange(value);
  }

  filterOptions(options, filter, current) {
    return options.filter((o) => {
      let { name = '', lastName = '' } = o.information;
      if (!name) name = '';
      if (!lastName) lastName = '';
      if (current) {
        const match = current.filter(c => c._id === o._id)[0];
        if (match) {
          return false;
        }
      }
      const regEx = new RegExp(filter.toLowerCase());
      return name.toLowerCase().match(regEx) || lastName.toLowerCase().match(regEx) || o.network.toLowerCase().match(regEx);
    });
  }

  render() {
    const getTranslation = key => `Agenda.campaigns.${key}`;
    const { input: { value, onChange }, className } = this.props;
    const arrData = this.props.data;
    let data = [];
    data = arrData.map(a => Object.assign({}, a, { value: a._id }));


    const customStyles = {
      multiValue: (provided, state) =>

      // console.log("STATE",state.data.information.avatar)
        ({
          backgroundImage: `url(${state.data.information.avatar})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: 50,
          width: 50,
          borderRadius: '50%',
          color: '#76838f',
          margin: '5px',
        }),
      multiValueRemove: () => ({
        height: 20,
        width: 20,
        position: 'absolute',
        marginTop: '-10px',
        marginLeft: '42px',
      }),
      dropdownIndicator: () => ({
        backgroundImage: 'url(/images/search.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 15,
        width: 15,
        margin: '10px 10px 15px 10px',
        svg: {
          display: 'none',
        },
      }),
    };

    return (
      <div>
        <Select
          onChange={this.setValue}
          filterOptions={this.filterOptions}
          isMulti
          className={`social-select ${className || ''}`}
          components={{ Option: SocialAvatarOption }}
          options={data}
          placeholder={this.props.placeholder || ''}
          value={value}
          styles={customStyles}
          closeMenuOnSelect={false}
          noOptionsMessage={() => I18n.t(getTranslation('noOptionsMessage'))}
        />
      </div>
    );
  }
}

export default AccountSearch;
