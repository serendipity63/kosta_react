import React, { Component } from 'react';

class StateComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateString: 'react',
            stateNumber: 501
        } //기본코드
        //function형은 this 넣지 말고
        //class형은 this 꼭 넣기
    }
    stringChange = (e) => {
        // this.state.stateString = '리액트'; 
        this.setState({ stateString: '리액트' });
    }
    numberChange = (e) => {
        this.setState({ stateNumber: 502 });

    }
    render() {
        return (
            <>
                <button onClick={(e) => { this.stringChange(e) }} >String 변경</button><br />
                <button onClick={(e) => { this.numberChange(e) }} >Number 변경</button><br />
                StateString : {this.state.stateString}<br />
                StateNumber : {this.state.stateNumber}
            </>
        )
    }

}

export default StateComp;