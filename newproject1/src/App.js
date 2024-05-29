import logo from './logo.svg';
import './App.css';
import TodoApp1 from './Components/TodoApp1.js'
import Counter from './Components/Counter.js';

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
      
        <div>
       
          <Counter />
        
       </div>


      </header>
    </div>
  );
}

export default App;
