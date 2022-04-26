import React from "react";

class DateControls extends React.Component {
    constructor() {
        super();

        this.updateYear = this.updateYear.bind(this);
    }

    updateYear(offset) {
        let {year, updateYear} = this.props;
        return function () {
            updateYear(year + offset);
        }
    }

    updateMonth(offset) {
        let {month, updateMonth} = this.props;
        return function () {
            updateMonth(month + offset);
        }
    }

    render() {
        let getTranslation = (key) => {
            return "Statement." + key;
        };

        let {year, month} = this.props;

        return (
            <div className="col-md-6 col-md-offset-6">
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-btn">
                            <button type="button"
                                    onClick={this.updateYear(-1)}
                                    className="btn btn-default btn-outline">
                                &lt;
                            </button>
                        </span>

                        <input type="text"
                               className="form-control"
                               value={year}
                               disabled/>

                        <span className="input-group-btn">
                            <button type="button"
                                    onClick={this.updateYear(1)}
                                    className="btn btn-default btn-outline">
                                &gt;
                            </button>
                        </span>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-btn">
                            <button type="button"
                                    onClick={this.updateMonth(-1)}
                                    className="btn btn-default btn-outline">
                                &lt;
                            </button>
                        </span>

                        <input type="text"
                               className="form-control"
                               value={month}
                               disabled/>

                        <span className="input-group-btn">
                            <button type="button"
                                    onClick={this.updateMonth(1)}
                                    className="btn btn-default btn-outline">
                                &gt;
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default DateControls;
