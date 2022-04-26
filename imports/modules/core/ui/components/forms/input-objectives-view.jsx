import React from 'react';
import swal from 'sweetalert2';

class InputObjectives extends React.Component {
  constructor() {
    super();

    this.state = {
      objectives: [],
      value: ''
    };

    this.updateObjective = this.updateObjective.bind(this);
    this.deleteObjective = this.deleteObjective.bind(this);
    this.addObjectiveChange = this.addObjectiveChange.bind(this);
    this.addObjective = this.addObjective.bind(this);
    this.save = this.save.bind(this);
  }

  updateObjective(index) {
    let component = this;
    return function (e) {
      let val = e.target.value;
      let objectives = component.state.objectives;
      objectives[index] = val;
      component.setState({ objectives });
      component.save();
    };
  }

  deleteObjective(index) {
    let component = this;
    return function () {
      swal({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function () {
        let objectives = [...component.state.objectives];
        objectives.splice(index, 1);
        component.setState({ objectives });
        component.save();
      });
    };
  }

  addObjective() {
    let val = this.state.value;
    let objectives = [...this.state.objectives, val];
    this.setState({ objectives, value: '' });
    this.save();
  }

  addObjectiveChange(e) {
    let value = e.target.value;
    this.setState({ value });
  }

  save() {
    let component = this;
    setTimeout(function () {
      component.props.input.onChange(component.state.objectives);
    }, 200);
  }

  componentWillMount() {
    this.setState({
      objectives: this.props.input.value
    });
  }

  render() {
    let { objectives } = this.state;
    return (
      <div>
        <div className="row">
          {objectives.map((v, i) => (
            <div className="col-md-4" key={i}>
              <div className="form-group">
                <div className="input-group input-group-file">
                  <input type="text" className="form-control" value={v} onChange={this.updateObjective(i)}/>
                  <span className="input-group-btn">
                              <span className="btn btn-danger " onClick={this.deleteObjective(i)}>
                                <i className="icon wb-trash" aria-hidden="true"/>
                              </span>
                            </span>
                </div>
              </div>
            </div>
          ))}

          <div className="col-md-4">
            <div className="form-group">
              <div className="input-group input-group-file">
                <input type="text" className="form-control" placeholder={this.props.placeholder || 'Add New Objective'}
                       value={this.state.value} onChange={this.addObjectiveChange}/>
                <span className="input-group-btn">
                              <span className="btn btn-success btn-file">
                                <i className="icon wb-check" aria-hidden="true" onClick={this.addObjective}/>
                              </span>
                            </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default InputObjectives;
