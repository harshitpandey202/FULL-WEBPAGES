import "./Aboutus.css"
import img2 from "./images/dog1.png"

export default function Whatwedo(){
  
    return(
        <>
           <section className="about">
    <div className="section-box4">
        <div className="content-grid">
            <div className="left-grid">
                <h3 className="section-sub">About Us</h3>
                <h2 className="section-title">What We Do</h2>
            <p className="para1">At DOG NGO, we engage in a variety of initiatives to support abandoned and neglected dogs. Our primary focus is on rescue <br></br>
            1. <b>Rescue Operations </b>- Actively rescue abandoned and neglected dogs from difficult situations.
<br></br>2. <b>Shelter Services</b> - Provide a safe and comfortable shelter for dogs in need.<br></br>
3. <b>Medical Care </b>- Offer veterinary services, including vaccinations, spaying/neutering, and treatment for injuries or illnesses.<br></br>
4.<b> Adoption Programs </b>- Facilitate the adoption process to find loving homes for rescued dogs.<br></br>
5. <b>Fundraising Events</b> -  Organize events to raise funds for operations, care, and rehabilitation of the dogs.

            </p>
            
            </div>
       
        <div className="right-grid">
             <img src={img2} className="aboutus-img"></img> 
        </div>
        </div>
    </div>
</section>
        </>
    )};