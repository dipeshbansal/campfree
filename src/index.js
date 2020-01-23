import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {evaluate,sqrt,log} from 'mathjs';
import Screen from './components/screen';
import DigitButton from './components/DigitButton';
import OperatorButton from './components/OperatorButton';




class Calculator extends React.Component {
  
  constructor(props) {
    super(props);
    this.state= {
      expression: ""
    };
  }
  
  handleClick = (element) => {
     let expression = this.state.expression;
     expression += element;
     this.setState({expression});
  };

  evaluate = () => {
    let answer=evaluate(this.state.expression);
    this.setState({expression: answer});
  }
  
  clearAll = () => {
    this.setState({expression: ""});
  }
  
  undo = () => {
    let expression = this.state.expression;
    expression = expression.slice(0, expression.length-1);
    this.setState({expression});
  }

  sqrt = () =>{
    let answer = sqrt(this.state.expression);
    this.setState({expression: answer});
  }
  
  log = () => {
    let answer = log(this.state.expression);
    this.setState({expression: answer});
  }
   

 
  render() {
    return ( 
      <>
        <title/>
        <Screen expression={this.state.expression}/>
        {["1","2","3"].map(element => <DigitButton value={element} doClick={() => this.handleClick(element)}/>)}
        <OperatorButton value="A C" doClick={this.clearAll}/>
        {["4","5","6"].map(element => <DigitButton value={element} doClick={() => this.handleClick(element)}/>)}
        {["7","8","9","0","."].map(element => <DigitButton value={element} doClick={() => this.handleClick(element)}/>)}
        {["+","-","/","*"].map(element => <OperatorButton value={element} doClick={() => this.handleClick(element)}/> )}
        <OperatorButton value="=" doClick={this.evaluate}/>
        <OperatorButton value="Undo" doClick={this.undo}/>
        <OperatorButton value="Sqrt" doClick={this.sqrt}/>
        <OperatorButton value="log" doClick={this.log}/>
      </>
    )
  }
}

// ========================================

ReactDOM.render(<Calculator/>, document.getElementById("root"));
