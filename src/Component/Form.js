import React, { Component } from 'react'
import Result from './Result'

class Form extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          amount: 0.00, 
          tip : 0, 
          people: 1
        }
    
        this.setValues = this.setValues.bind(this);
        this.calculate = this.calculate.bind(this);
      }
    
    
      setValues ( {target}) {
          this.setState ({
              [target.name ] : target.value
          });
      }
 
      calculate = () => {
        this.props.onCalculate(this.state.amount, this.state.tip, this.state.people)        
      }
    render() {
        return (
                <div>
                    
                <div className = "bill-amount">
                    <p>How much is your Bill?</p>
                    <input  type = "Number" name = "amount"  value = {this.state.amount} onChange ={this.setValues}/>
                </div>
                
                <div className = "bill-percent">
                    <p>How much do you wan to tip? (%)</p>
                    <select name = "tip"   value ={this.state.tip} onChange = {this.setValues}>
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
                        <input className ="calc" type = "button" value = "Calculate" onClick = {this.calculate}/>
                    </div>
                </div>
        )
    }
}

export default Form
