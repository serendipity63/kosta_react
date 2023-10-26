import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState({ name: '', age: '', address: '', tel: '' });
  const change = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
    //비어있는걸 만듦 []< 자체 
  }
  return (
    <div className="App">
      이름 : <input type="text" name="name" onChange={change} /> <br />
      나이 : <input type="text" name="age" onChange={change} /> <br />
      주소 : <input type="text" name="address" onChange={change} /> <br />
      전화 : <input type="text" name="tel" onChange={change} /> <br /><br />
      <table border="1">
        <tbody>
          <tr><th>이름</th><th>나이</th><th>주소</th><th>전화</th></tr>
          <tr><td>{user.name}</td><td>{user.age}</td><td>{user.address}</td><td>{user.tel}</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
