import "./Campaign.css"
import img2 from "./images/dog1.png"
export default function Campaign(){
    return(
        <>
        <section className="about">
    <div className="section-box">
        <div className="content-grid">
            <div className="left-grid">
                <h3 className="section-sub">Campaign 1</h3>
                <h2 className="section-title">Pawsitive Change</h2>
            <p className="para1">Pawsitive Change is a campaign focused on improving the lives of dogs in need through community engagement, education, and rescue efforts. Join us to raise awareness for animal welfare and create a brighter future for every furry friend!</p>
            <button className="action-btn">Read More</button>
            </div>
       
        <div className="right-grid">
             <img src={img2} className="about-img"></img> 
        </div>
        </div>
    </div>
</section>
<section className="about">
    <div className="section-box">
        <div className="content-grid">
            <div className="left-grid">
            <img src={img2} className="about-img"></img> 
            </div>
       
        <div className="right-grid">
        <h3 className="section-sub">Campaign 2</h3>
                <h2 className="section-title">Paw Pal Project</h2>
            <p className="para1">The Paw Pal Project connects volunteers with dogs in need of companionship and care. By fostering meaningful relationships, we aim to enhance the lives of both dogs and humans. Join us in building a loving community where every pup finds a friend and a forever home!
            </p>
            <button className="action-btn">Read More</button>
            
        </div>
        </div>
    </div>
</section>
</>
    )
};