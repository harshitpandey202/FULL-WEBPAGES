import "./Newsletter.css"
export default function Newsletter(){
    return(
        
       <section className="join-us">
        <div className="section-box">
            <div className="content-wrap2">
                <h3 className="section-sub">Join Us</h3>
                <h2 className="section-title">Join the Pack </h2>
                <div className="join-form">
                    <input type="text" className="input-1 i1" placeholder="Your Name" />
                    <input type="email" className="input-1 i2" placeholder="Your Email" />
                    <input type="number" className="input-1 i3" placeholder="Your Phone number" />
                    <input type="text" className="input-1 i4" placeholder="Your Address" />
                </div>
                <button className="join-btn">Be A Member</button>
            </div>
        </div>

       </section>
        
    )
};