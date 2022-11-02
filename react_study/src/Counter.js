import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        // constructor사용시 반드시 선언.component의 생성자 함수를 호출해줌
        super(props) 
        //state 초기화
        this.state = {
            number: 0,
            number2: 0,
            fixedNumber: 0
        }
    }
    
    
    render() {
        // const { number } = this.
        const { number, number2, fixedNumber } = this.state
        return (
            <div>
                {/* <h1>{number}</h1>
                <h2>고정숫자: {fixedNumber}</h2>
                <button onClick={(prevState)=>{
                    // this.setState({ number: number +1 })
                    this.setState((prevState)=>{
                        return { number: number +1 }
                    })
                }}>+1</button> */}
                <button onClick={(prevState)=>{
                    // this.setState({ number: number +1 })
                    this.setState((prevState)=>{
                        return { number: number +1 }
                    })
                }}>+1</button>
                <h1>{number2}</h1>
                <button onClick={()=>{
                    this.setState({ number2: number2-1 })
                }}>-1</button>
            </div>
        );
    }
}

export default Counter;
