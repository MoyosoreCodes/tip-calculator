import React, { Component } from 'react'

class Result extends Component {
    render() {
        return (
            <div>
                    <span className ="total-tip">Total Tip:</span>
                    <span className ="tip-p">Tip per Person:</span>

                    <span className = "tip-value">{this.props.totalTip}</span>
                    <span className = "tip-p-value">{this.props.tipPerPerson}</span>
            </div>
        )
    }
}

export default Result
