import React from 'react';
import { inflate } from 'zlib';
import { Link } from 'react-router';
import GridViewItem from './gridViewItem';
import $ from 'jquery';

class GridView extends React.Component {
  constructor() {
    super();
    this.state = {
      pagination: 0,
      size: 0,
    };
    this.renderPagination = this.renderPagination.bind(this);
  }

  currentItem(number){
    this.setState({pagination:number});
  }

  renderPagination(number) {
    if(number===0){
      return (<button key={number}
        onClick={this.currentItem.bind(this,number)}
        className={this.state.pagination==number?'pagination-buttons-first active-button': 'pagination-buttons-first'}>{number}</button>)
    }
    else{
      return (<button key={number}
        onClick={this.currentItem.bind(this,number)}
        className={this.state.pagination==number?'pagination-buttons active-button': 'pagination-buttons'}>{number}</button>)
    }
  }

  render() {

    const { data } = this.props;
    const {size}=this.state;
    let result = Math.trunc(data.length) / 8;
    let array = [];
    for (let i = 0; i < result; i++) {
      if (i === 0) {
        array[i] = data.slice(i, i + 8);
      } else {
        array[i] = data.slice(i * 8, i * 8 + 8);
      }
    }

    return (
      <div style={{marginTop:"30px"}}>
        <div className="row">
          {
            array[this.state.pagination].map((d, i) => <GridViewItem data={d} key={i} /> )
          }
        </div>
        <div className='pagination-container'>
          {
            array.map((dat, i) => this.renderPagination(i))
          }
        </div>
      </div>
    );
  }
}

export default GridView;
