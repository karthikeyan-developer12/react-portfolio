export const Projects = () =>
{ return(<section id="project">
    <h1 className="projectheader">projects</h1>
    <div className="projects">
  <div className="qrproject">
    <img src="qr.png" className="qr" alt="QR Code" />
    <a href="https://github.com/karthikeyan-developer12/qrcodegenerator"><button className="show">show code</button></a>
    <p className="qrdesc">qr code generetor based on user requirments
      using api 
    </p>
  </div>

  <div className="food">
    <img src="food.png" className="fo" alt="Food" />
    <a href="https://github.com/karthikeyan-developer12/food-cart-project"><button className="show">showcode</button></a>
    
    <p className="fooddesc">basic food cart website using html,css,
      react js
    </p>
    
    
  </div>
</div>

</section>)

}
