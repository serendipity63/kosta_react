function MyComponent({ name, age }) {
    return (
        <>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </>//return에서 주는 태그는 하나로 묶어야 한다 props로 갖고오는방법

    )
}

// import React, { Component } from 'react';
// class MyComponent extends Component {
//     render() {
//         let { name, age } = this.props.info;
//         return (
//             <div>
//                 {/* <h1>{this.props.name}</h1>
//                 <h1>{this.props.age}</h1> */}
//                 <h1>{name} </h1>
//                 <h1>{age} </h1>
//             </div>
//         )
//     }

// }

export default MyComponent;