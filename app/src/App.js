import logo from './logo.svg';
import './App.css';
import {useCallback} from "react";

function App() {
  const clickBtn = useCallback(() => {
    fetch("http://localhost:5000/api/answer")
      .then(res => res.text())
      .then((json) => {
        window.alert(json)
      })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={clickBtn} className="btn">Answer</button>
      </header>
    </div>
  );
}

export default App;
