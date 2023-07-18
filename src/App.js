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
  <Projects   
  image={item.picImg}
  title={item.projectName}
  skills={item.program}
  para={item.para}
  github={item.githubLink}
  link={item.onlineLink}


  
  />
    )}
)
 
 
  return (
    <div className="App">
      <Nav/>
      <Intro me={me}  websiteImage={websiteImage}/>
      <Skills />
      <section id='Projects'>
        <div className='container'>
        
          <div className='med-row'>
          <div>
            <h1>Here are some of my <span className='special-color'>projects</span></h1>
            </div>
            
      {projectGroup}
      </div>
      </div>
      </section>
      </div>
  );
}

export default App;
