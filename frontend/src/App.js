import "./App.css";
import Todo from "./components/todo";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Todo />
      </div>
    </Router>
  );
}

export default App;
