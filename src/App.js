import './App.css';
import About from './components/About';
import Certificates from './components/Certificates';
import Home from './components/Home';
import Nav from './components/Nav';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Skill />
      <Certificates />
    </div>
  );
}

export default App;
