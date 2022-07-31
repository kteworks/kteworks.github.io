import './App.css';
import BlogPage from './components/BlogPage';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

function App() {
  return (
    <Router>
    <div className="App">
      <Header />

        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/blog" element={ <BlogPage /> } />
          
        </Routes>
      
    </div>
    </Router>
  );
}

export default App;