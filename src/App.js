import Nav from './Components/Nav';
import Intro from './Components/intro';
import Skills from './Components/Skills';
import Projects from './Components/projects';
import Footer from './Components/Footer';
import './App.css';
import me from './Components/img/thebestone.jpg';
import websiteImage from './Components/img/progressive.png';
import logoImage from './Components/img/logo-pink.png'
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
        
          <div className='big-row'>
          <div>
            <h1>Here are some of my <span className='special-color'>projects</span></h1>
            </div>
       <div className="project--group">
       {projectGroup}
        </div>     
      
      </div>
      </div>
      </section>
      <Footer logoImage={logoImage} />
      </div>
  );
}

export default App;
