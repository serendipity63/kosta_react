import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  //</React.StrictMode>
);

//React는 순수 자바스크립트이고, 이 자바스크립트를 이용해 컴포넌트를 만들어 나간다.
//실제로 브라우저가 이해할 수 있는 것은, html, css, javascript뿐이며, 이것들만 이용할 수 있다.
//그래서, 위의 코드와 같은 식은 babel을 이용해서 순수 자바스크립트로 변환이 된다.
// 그리고나서, 우리가 만든 컴포넌트를 html과 연결하는 작업을 해줘야 하는데 이것을 해주는 것이 react-dom이다.
// 그래서 사용자에게 궁극적으로 배포되어지는 것은 index.html이다.



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
