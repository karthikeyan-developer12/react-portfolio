import { AiOutlineTwitter } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
 const Home = ({props}) =>{
    return(
    <section id="home" className="home">
        <div className="ahome">
        <h3 className="name">HI! I AM ,<br/> 
        <div className="effect">{props.name}</div><p>FULL STACK DEVELOPER</p></h3>
        <div className="logos">
       
        <a  href="https://github.com/karthikeyan-developer12"><FaGithub className="logo"/></a>
        <a  href=""><MdEmail className="logo"/></a>
        <a  href="https://wa.me/916383234227?text=Start%20message%20in%20whatsapp"><FaSquareWhatsapp className="logo"/></a>
        <a  href="https://www.linkedin.com/in/karthikeyan12developer"><FaLinkedin className="logo"/></a>
        </div>
        </div> 
        
        <img src="my.png" className="first"></img>
    </section>)
}
export default Home;