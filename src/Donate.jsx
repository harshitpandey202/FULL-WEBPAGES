
import img8 from "./images/support4.png"
export default function Donate(){

    return(
    
    <>
    
    <section className="about">
        <div className="section-box">
            <div className="content-grid">
                <div className="left-grid">
                 
                    <h2 className="section-title">Donation in kind</h2>
                <p className="para1">We are happy to accept donations in-kind whether used or new. Every donation shall be used in our shelter in Delhi (Sanjay Gandhi Animals Care Centre) or other units across India.

Below given is a list of things required at our shelter:
MASTER LIST OF THINGS REQUIRED BY OUR SHELTER</p>
                <button className="action-btn">Donate In Help</button>
                </div>
           
            <div className="right-grid">
                 <img src={img8} className="about-img"></img> 
            </div>
            </div>
        </div>
    </section>
    
    </>
   ) }