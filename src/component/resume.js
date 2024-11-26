 export const Resume =()=>{
    const handleDownload = () => {
        const img="food.png"
        const link = document.createElement('a');
        link.href = img; 
        link.download = 'downloaded-image.jpg'; 
        document.body.appendChild(link); 
        link.click(); 
        document.body.removeChild(link); 
      };
    
    return(<section id="contact">
        <div className="contacts">
            <h1 className="conthead"><a href="#home" className="con">CONTACT</a></h1>

        
       <div className="download">
        <button className="resume" onClick={handleDownload}>download resume</button>
        <img src="third.png" className="contactimg"></img>
    </div>
   
    </div> </section>)
}