import './App.css';
import MyComponent from './MyComponent';
import PropsBoolean from './PropsBoolean';
import PropsDataType from './PropsDataType';
import PropsNode from './PropsNode';
import PropsRequired from './PropsRequired';
function App() {
  return (
    <div className="App">
      {/* <MyComponent name="Song" age="20" /> */}
      {/* <MyComponent info={{ name: "gong", age: "40" }} />
      <PropsDataType
        String="react"
        Number={501}
        Boolean={1 == 1}
        Array={[1, 2, 3]}
        ObjectJson={{ react: '리액트', version: 501 }}
        Function={console.log("FunctionProps:function!")}
      />
      <PropsBoolean BooleanTrueFalse={false} />
      <PropsBoolean BooleanTrueFalse /> */}
      <PropsRequired ReactString={"React"} ReactVersion={501} />
      <br />
      <PropsRequired ReactVersion={501} /> <br />
      <PropsRequired /> <br />
      <PropsNode>
        <span>node from App.js</span>
      </PropsNode>
    </div>
  );
}

export default App;
