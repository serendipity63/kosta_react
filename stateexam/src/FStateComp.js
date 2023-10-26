import { useState } from 'react';
function FStateComp() {
    const [stateString, setStateString] = useState('react');
    const [stateNumber, setStateNumber] = useState(501);
    return (
        <>
            <button onClick={() => { setStateString('리액트') }} >String 변경</button><br />
            <button onClick={() => { setStateNumber(502) }} >Number 변경</button><br />
            StateString : {stateString}<br />
            StateNumber : {stateNumber}
        </>

    )
}
export default FStateComp;