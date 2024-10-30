import "./Community.css"
import img40 from "./images/1663139024.jpg"
import img41 from "./images/c2.jpg"
import img42 from "./images/c3.jpg"
import img43 from "./images/c4.jpg"
import img44 from "./images/c5.jpeg"
import img45 from "./images/c6.jpg"


export default function Community(){
    return(

        <>
        <section className="about">
    <div className="section-box3">
        <div className="Community">
            <div className="com-title">
                <p>Ours Members</p>
            </div>

<div className="card-list">

             <div className="card">
                <div className="card-img">
                     <img src={img40} alt="" />
                </div>
                <div className="card-info">
                    <p><b>Kamal Singh </b></p>
                    <p><b>U.P</b></p>
                    <p>know More</p>
                </div>
             </div>

             <div className="card">
                <div className="card-img">
                     <img src={img41} alt="" />
                </div>
                <div className="card-info">
                    <p><b>R.k Singh </b></p>
                    <p><b>Mumbai</b></p>
                    <p>know More</p>
                </div>
             </div>

             <div className="card">
                <div className="card-img">
                     <img src={img42} alt="" />
                </div>
                <div className="card-info">
                    <p><b>Avika Sharma</b></p>
                    <p><b>Punjab</b></p>
                    <p>know More</p>
                </div>
             </div>
           
             








             </div> 



             <div className="card-list">

             <div className="card">
                <div className="card-img">
                     <img src={img43} alt="" />
                </div>
                <div className="card-info">
                    <p><b>Aditi Jha</b></p>
                    <p><b>U.K</b></p>
                    <p>know More</p>
                </div>
             </div>

             <div className="card">
                <div className="card-img">
                     <img src={img44} alt="" />
                </div>
                <div className="card-info">
                    <p><b>Ritika Kumar</b></p>
                    <p><b>Delhi</b></p>
                    <p>know More</p>
                </div>
             </div>

             <div className="card">
                <div className="card-img">
                     <img src={img45} alt="" />
                </div>
                <div className="card-info">
                    <p><b>Tapsi Rajput</b></p>
                    <p><b>Dehradun</b></p>
                    <p>know More</p>
                </div>
             </div>
           
             








             </div> 
       
        </div>
    </div>
</section>
      </>
    )
};