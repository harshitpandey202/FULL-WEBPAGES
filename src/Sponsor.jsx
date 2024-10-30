
import img7 from "./images/support3.png"
export default function Sponsor(){

    return(
    
    <>
    
    <section className="about">
        <div className="section-box">
            <div className="content-grid">
                <div className="left-grid">
                 
                    <h2 className="section-title">Why Sponsor ?</h2>
                <p className="para1">Pick an animal of your choice and contribute towards its monthly upkeep. You can visit our hospital/shelter and choose your pet, or leave that to us. We will give you the name and details of your sponsored pet and send you constant updates, for this the person can leave a reminder with the concerned person and we shall revert within 24 hours.</p>
                <button className="action-btn">Sponor Us</button>
                </div>
           
            <div className="right-grid">
                 <img src={img7} className="about-img"></img> 
            </div>
            </div>
        </div>
    </section>
    
    </>
   ) }