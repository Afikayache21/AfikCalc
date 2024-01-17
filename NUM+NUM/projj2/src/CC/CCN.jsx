import { Component } from "react";

export default class Afik extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //no needed
            // num1: 0,
            // num2: 0,
            // res: null,
        };
    }


    HandelFirstNum = (event) => {
        this.setState({ num1: Number(event.target.value) })
        console.log({ num1: Number(event.target.value) });
    }

    HandelSecondNum = (event) => {
        this.setState({ num2: Number(event.target.value) })
        console.log({ num2: Number(event.target.value) });
    }

    HandleResP = () => {
        
            this.setState({ res: this.state.num1 + this.state.num2 })       

    }
    HandleResM = () => {
        this.setState({ res: this.state.num1 - this.state.num2 })
    }
     HandleResD = () => {
         this.setState({ res: this.state.num1 / this.state.num2 })
     }
     HandleResMp = () => {
         this.setState({ res: this.state.num1 * this.state.num2 })
    }
    render() {
        return (
            <div>
                <header>
                    <h1>Afiks Calaculator</h1>
                </header>
                num1=<input type="number"

                    onChange={this.HandelFirstNum} />
                <br />
                num2=<input type="number"
                    onChange={this.HandelSecondNum} />

                <br />

                <button onClick={this.HandleResP} className='submit-btn'>+</button>
                <button onClick={this.HandleResM} className='submit-btn'>-</button>
                <button onClick={this.HandleResD} className='submit-btn'>/</button>
                <button onClick={this.HandleResMp} className='submit-btn'>*</button>

                <div>
                    {/* fast  if (when res is undefid all the left part = false)*/}
                    {this.state.res && '=' + this.state.res}
                </div>

            </div>)
    }




}