import Home from "./component/Home.js";
import {About} from "./component/About.js";
import Header from "./component/Header.js";
import {Projects} from "./component/project.js";
import { Resume } from "./component/resume.js";
import './App.css';
const personaldetails={
  name:"KARTHIKEYAN.S",
  role:"FULL STACK DEVELOPER",
  github:"k",
  linkedin:"s",
  whatsapp:"",



}
function App() {
  return (
    <div className="App">
     <Header/>
     <Home props={personaldetails}/>
     <About/>
     <Projects/>
     <Resume/>

    </div>
  );
}

export default App;
