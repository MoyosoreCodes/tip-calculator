import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Form from './Component/Form'
import Result from './Component/Result'

class App extends Component {
    constructor(props){
      super(props);

      this.state = {
        result1 : 0,
        result2 : 0
      }
      
      this.handleCalculate = this.handleCalculate.bind(this);
    }

  handleCalculate = (bill, tip, noOfPeople) =>
  {
    this.setState({
      result1 : bill * tip * 0.01, 
      result2: bill * tip * 0.01 / noOfPeople
    })
  }

  render() {
    return (
      <div className="App">
          
      <div className ="main-content">
                <div  className = "main-title">
                      <img src={logo} className="logo" alt="logo" />
                    <p>
                      Tip Calculator
                    </p>
                </div>

                <Form  onCalculate= {this.handleCalculate} />

                <Result  totalTip = {this.state.result1}  tipPerPerson = {this.state.result2}/>
              
        </div>
    </div>
    )
  }
}

export default App
