import Nav from './Components/Nav';
import Intro from './Components/intro';
import './App.css';
import me from './Components/img/thebestone.jpg';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Intro me={me} />
      </div>
  );
}

export default App;
