import logo from './logo.svg';
import './App.css';
import TodoApp1 from './Components/TodoApp1.js'

function App() {
  const weather = {
      currentCity: "Cleveland",
      description: "Sunny",
      temperature: 76,
       arrayTodo : [
        "learn React",
        "eat",
        "sleep",
        "practice React",
        "watch React Pluralsight videos",
        "practice JavaScript",
      ]
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
       
           <TodoApp1 weather = {weather} />;
       </div>


      </header>
    </div>
  );
}

export default App;
