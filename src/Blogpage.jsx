import "./Blogpage.css"
import Hero from "./Hero"
import img025 from "./images/blog 1.jpeg"
import img024 from "./images/blog 2.png"
import Footer from "./Footer"


export default function BlogPage(){

return(

<>
<Hero/>
<section className="about">
    <div className="section-box">
        <div className="content-grid">
            <div className="left-grid">
               
                <h2 className="section-title">blog 1  </h2>
                <h3 className="section-sub">BRAIN TRAINING GAMES TO KEEP YOUR DOG MENTALLY STIMULATED</h3>
            <p className="para1">It was a languid afternoon and Molly was lounging all by herself in the veranda. The poor kid was so bored that she entertained herself by watching the clouds roll by. She did this everyday and was gaining weight due to lack of activity and since her environment offered very little stimulation, she was getting exceedingly dull and inactive. </p>
            <button className="action-btn">Read More</button>
            </div>
       
        <div className="right-grid">
             <img src={img025} className="about-img025"></img> 
        </div>
        </div>
    </div>
</section>
<section className="about">
    <div className="section-box">
        <div className="content-grid">
            <div className="left-grid">
            <img src={img024} className="about-img024"></img> 
            </div>
       
        <div className="right-grid">
        
                <h2 className="section-title">blog 2</h2>
                <h3 className="section-sub">Rakesh Shukla led B2B platform Vet2Trade crosses veterinary products on the B2B</h3>
            <p className="para1">Vet2Trade™, part of Rakesh Shukla-led VOSD Corporation, is India’s largest B2B platform for the veterinary industry for market, product & service discovery across Veterinary Equipment and Instruments, Veterinary Supplies and Accessories,
            </p>
            <button className="action-btn">Read More</button>
            
        </div>
        </div>
    </div>
</section>
<Footer/>





</>


)};