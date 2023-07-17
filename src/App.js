import Nav from './Components/Nav';
import Intro from './Components/intro';
import Skills from './Components/Skills';
import Projects from './Components/projects';
import './App.css';
import me from './Components/img/thebestone.jpg';
import websiteImage from './Components/img/progressive.png';
import data from './data';

function App() {
 const projectGroup= data.map(item => {  
  return (
  <Projects />
    )}
)
 
 
  return (
    <div className="App">
      <Nav/>
      <Intro me={me}  websiteImage={websiteImage}/>
      <Skills />
      {projectGroup}
      </div>
  );
}

export default App;
