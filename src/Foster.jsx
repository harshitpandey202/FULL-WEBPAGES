
import img6 from "./images/support2.png"
export default function Foster(){

    return(
    
    <>
    
    
    <section className="about">
        <div className="section-box">
            <div className="content-grid">
                <div className="left-grid">
                 
                    <h2 className="section-title">Did you Know?</h2>
                <p className="para1">Our shelter homes are constantly flooded with rescue calls about pets being abandoned and left on their own by their “Pet Parents”. When they are separated, they are left with a feeling of anxiety, trauma, and helplessness and this often makes their life miserable when a lack of proper nutrition, support.</p>
                <button className="action-btn">Foster Me</button>
                </div>
           
            <div className="right-grid">
                 <img src={img6} className="about-img"></img> 
            </div>
            </div>
        </div>
    </section>
    
    </>
   ) }