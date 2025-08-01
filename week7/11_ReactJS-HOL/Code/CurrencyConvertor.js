import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: ''
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  }

  handleSubmit = () => {
    const rate = 0.011; // example conversion rate
    const euros = this.state.rupees * rate;
    this.setState({ euros: euros.toFixed(2) });
  }

  render() {
    return (
      <div>
        <h2>Currency Convertor</h2>
        <label>Enter amount in INR: </label>
        <input
          type="number"
          value={this.state.rupees}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Convert</button>
        <p>Amount in Euro: €{this.state.euros}</p>
      </div>
    );
  }
}

export default CurrencyConvertor;
