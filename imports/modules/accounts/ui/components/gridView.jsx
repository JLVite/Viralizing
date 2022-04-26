import React from 'react';
import { inflate } from 'zlib';
import { Link } from 'react-router';
import $ from 'jquery';
import GridViewItem from './gridViewItem';

class GridView extends React.Component {
  constructor() {
    super();
    this.state = {
      pagination: 0,
      size: 0,
    };
    this.renderPagination = this.renderPagination.bind(this);
  }

  currentItem(number) {
    this.setState({ pagination: number });
  }

  renderPagination(number) {
    if (number === 0) {
      return (
        <button
          key={number}
          onClick={this.currentItem.bind(this, number)}
          className={this.state.pagination == number ? 'pagination-buttons-first active-button' : 'pagination-buttons-first'}
        >
          {number}

        </button>
      );
    }

    return (
      <button
        key={number}
        onClick={this.currentItem.bind(this, number)}
        className={this.state.pagination == number ? 'pagination-buttons active-button' : 'pagination-buttons'}
      >
        {number}

      </button>
    );
  }

  render() {
    const { data } = this.props;
    const { size } = this.state;
    const result = Math.trunc(data.length) / 10;
    const array = [];
    for (let i = 0; i < result; i++) {
      if (i === 0) {
        array[i] = data.slice(i, i + 10);
      } else {
        array[i] = data.slice(i * 10, i * 10 + 10);
      }
    }
    return (
      <div>
        <div className="row">
          {
            array[this.state.pagination].map((d, i) => <GridViewItem d={d} key={i} />)
          }
        </div>
        <div className="pagination-container">
          {
            array.map((dat, i) => this.renderPagination(i))
          }
        </div>
      </div>
    );
  }
}

export default GridView;
