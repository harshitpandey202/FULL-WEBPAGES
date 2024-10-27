import "./Hero.css"
import img1 from "./images/45.png"
export default function Hero(){

return(

<>
<section className="hero">
     <div className="section-box">
        <div className="content-wrap">
           <header>
            <a className="header-logo"><span>DOG</span> NGO</a>
            <nav>
                <a  className="nav-item" >Home</a>
                <a  className="nav-item">Support</a>
                <a  className="nav-item">Campaigns</a>
                <a  className="nav-item">Blog</a>
                <a  className="nav-item">More</a>
            </nav>
            </header> 
            <div className="hero-content">
                <h3>Protect</h3>
                <h1>Dogs</h1>
                <img src={img1} className="hero-img"></img>
                <button className="hero-btn">Join With Us</button>
            </div>
        </div>
     </div>

</section>



</>

)};