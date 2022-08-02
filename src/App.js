import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Header />

        <Routes>
          <Route path="/" element={ <Homepage /> } />
          
        </Routes>
      
    </div>
    </Router>
  );
}

export default App;