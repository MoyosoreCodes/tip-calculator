import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      amount: 0.00, 
      tip : 0, 
      people: 1,  
      totalTip: 0.00, 
      tipPerPerson: 0.00
    }

    this.calculate = this.calculate.bind(this);
    this.setValues = this.setValues.bind(this);
  }


  setValues ( {target} ) {
      this.setState ({
        [target.name]: target.value
      });
  }

  calculate = () => {
    this.setState({ totalTip: this.state.amount * this.state.tip * 0.01})
    this.setState({ tipPerPerson: this.state.amount * this.state.tip * 0.01 / this.state.people})
    
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
                
                <div className = "bill-amount">
                    <p>How much is your Bill?</p>
                    <input  type = "Number" name = "amount" value = {this.state.amount} onChange ={this.setValues}/>
                </div>
                
                <div className = "bill-percent">
                    <p>How much do you wan to tip? (%)</p>
                    <select onChange = {this.setValues} name = "tip" value ={this.state.tip} onChange = {this.setValues}>
                           <option > -- Choose an Option --</option>
                           <option type= "Number" value = "5"> 5%</option>
                           <option type= "Number" value = "10"> 10%</option>
                           <option type= "Number" value = "15"> 15%</option>
                           <option type= "Number" value = "20"> 20%</option>
                    </select>                        
                </div>

                <div className = "bill-people">
                    <p>Number of people</p>
                    <input  type = "Number" name = "people" value = {this.state.people} onChange = {this.setValues}/>
                </div>

            <div>
                <input className ="calc" type = "button" value = "Calculate"  onClick = {this.calculate}></input>
            </div>

            <span className ="total-tip">Total Tip:</span>
            <span className ="tip-p">Tip per Person:</span>

            <span className = "tip-value">{this.state.totalTip}</span>
            <span className = "tip-p-value">{this.state.tipPerPerson}</span>

        </div>
    </div>
    )
  }
}

export default App
