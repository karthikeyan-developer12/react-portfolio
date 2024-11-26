import React, { useState } from 'react';
import Home from './Home';


const Header = () =>{
const[event,setEvent]=useState(false)
    return(
        <div className="header">
          <h1 className='heading'>portfolio</h1>
           <ul className="navc">
              <a  className="leftnav"href="#home"><li>Home</li></a>  
              <a  className="leftnav"href="#About"><li>about</li></a> 
              <a className="leftnav"href='#project'><li>project</li></a> 
              <a className="leftnav"href='#contact'><li>contact</li></a> 
            </ul>
            {event &&<ul onClick={() => setEvent(!true)} className="navcs">
              <a className="snav"href="#home" ><li>Home</li></a>  
              <a className="snav"href="#About"><li>about</li></a> 
              <a className="snav"href='#project'><li>project</li></a> 
              <a className="snav"href='#contact'><li>contact</li></a> 
                
            </ul>
}
         {!event&&<button className='buttoncss' onClick={() => setEvent(true)}><i class="fa-solid fa-bars"></i></button>
}
        </div>
    )
}
export default Header;