import "./Aboutus.css"
import img2 from "./images/dog1.png"

export default function Aboutus(){
  
    return(
        <>
           <section className="about">
    <div className="section-box4">
        <div className="content-grid">
            <div className="left-grid">
                <h3 className="section-sub">About Us</h3>
                <h2 className="section-title">Who We Are</h2>
            <p className="para1">At DOG NGO, our unwavering commitment is to enhance the lives of abandoned and neglected dogs. We believe that every dog deserves a safe haven, so we provide shelter, essential medical care, and nurturing homes for those in need. Our mission extends beyond rescue; we actively engage with the community to raise awareness about responsible pet ownership and the importance of animal welfare. By offering educational programs, we empower individuals to make informed choices about pet care, fostering a compassionate environment for all animals. Together, we work to create a brighter future where every dog can thrive in a loving forever home.</p>
            
            </div>
       
        <div className="right-grid">
             <img src={img2} className="aboutus-img"></img> 
        </div>
        </div>
    </div>
</section>
        </>
    )};