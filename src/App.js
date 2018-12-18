import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { clickButton } from './actions';

class App extends Component {
  state = {
    text:''
  }

  inputChange = (event) => {
    this.setState({text:event.target.value})
  }

  render() {
    const { newValue,clickButton } = this.props;
    const {text } = this.state;
    return (
      <div className="App">
        <div 
          className="App"
          style={{paddingTop:'10px'}}
        >

        <input 
          type="text"
          onChange={this.inputChange}
          value={text}
        />

        <button
          onClick={() => clickButton(text)}
        >
          Clicar
        </button>
        <h1>{newValue}</h1>
        </div>
      </div>
    );
  }
}
const matDispatchToProps = dispatch => bindActionCreators({clickButton},dispatch);

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

export default connect (mapStateToProps,matDispatchToProps)(App);
