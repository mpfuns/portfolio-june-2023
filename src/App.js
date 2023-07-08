import Nav from './Components/Nav';
import Intro from './Components/intro';
import Skills from './Components/Skills';
import './App.css';
import me from './Components/img/thebestone.jpg';
import websiteImage from './Components/img/progressive.png';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Intro me={me}  websiteImage={websiteImage}/>
      <Skills />
      </div>
  );
}

export default App;
