import "./About.css"
import img2 from "./images/dog1.png"
import img00 from "./images/what we do.png"


export default function About(){

return(

<>

<section className="about">
    <div className="section-box">
        <div className="content-grid">
            <div className="left-grid">
                <h3 className="section-sub">About Us</h3>
                <h2 className="section-title">Who We Are</h2>
            <p className="para1">At DOG NGO, we are dedicated to improving the lives of abandoned and neglected dogs. Our mission is to provide shelter, medical care, and loving homes for every furry friend in need. Through community outreach and education, we strive to promote responsible pet ownership and animal welfare.</p>
            <button className="action-btn">Learn More</button>
            </div>
       
        <div className="right-grid">
             <img src={img2} className="about-img"></img> 
        </div>
        </div>
    </div>
</section>
<section className="about">
    <div className="section-box">
        <div className="content-grid">
            <div className="left-grid">
            <img src={img00} className="about-img2"></img> 
            </div>
       
        <div className="right-grid">
        <h3 className="section-sub">Projects</h3>
                <h2 className="section-title">What We Do</h2>
            <p className="para1">1. <b>Rescue and Rehabilitation</b> - Providing shelter and medical care for abandoned and abused dogs.
                <br></br>
            2.<b> Adoption Events</b> - Organizing events to connect rescued dogs with potential adopters.
        <br></br>
            3. <b>Community Education </b>- Conducting workshops on responsible pet ownership, training, and animal welfare.
            </p>
            <button className="action-btn">Learn More</button>
            
        </div>
        </div>
    </div>
</section>




</>


)};