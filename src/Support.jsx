import "./Support.css"
import img5 from "./images/support1.png"
import img6 from "./images/support2.png"
import img7 from "./images/support3.png"
import img8 from "./images/support4.png"

export default function Suport(){

return(

    <section className="join-us">
    <div className="section-box">
        <div className="Arrange">
        <div className="support-title">
            <p className="support-para">Support Us</p>
        </div>
        <div className="support-info">
            <div className="support-item">
               <img src={img5}></img>
               <p>Adopt</p>
            </div>

            <div className="support-item">
            <img src={img6}></img>
            <p>Foster</p>
            </div>

            <div className="support-item">
            <img src={img7}></img>
            <p>Sponsor</p>
            </div>

            <div className="support-item">
            <img src={img8}></img>
            <p>Donate</p>
            </div>
        </div>
        </div>
    </div>

   </section>

)

};