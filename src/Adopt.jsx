
import img5 from "./images/support1.png"
export default function About(){

    return(
    
    <>
    
    <section className="about">
        <div className="section-box">
            <div className="content-grid">
                <div className="left-grid">
                 
                    <h2 className="section-title">Do Not Shop, Come Adopt</h2>
                <p className="para1">Children learn values, including the value of life, from the examples their parents set. Children generalize lessons learned about animal life will influence their attitudes toward human life on some level. How much is that doggie in the window? (The enticement of a Pet Shop)</p>
                <button className="action-btn">Adopt Us</button>
                </div>
           
            <div className="right-grid">
                 <img src={img5} className="about-img"></img> 
            </div>
            </div>
        </div>
    </section>
    
    </>
   ) }