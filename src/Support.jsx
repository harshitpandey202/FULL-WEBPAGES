import { Link } from "react-router-dom";
import "./Support.css";
import img5 from "./images/support1.png";
import img6 from "./images/support2.png";
import img7 from "./images/support3.png";
import img8 from "./images/support4.png";

export default function Support() {
    return (
        <section className="join-us">
            <div className="section-box">
                <div className="Arrange">
                    <div className="support-title">
                        <p className="support-para">Support Us</p>
                    </div>
                    <div className="support-info">
                        <Link to="/adopt"><div className="support-item">
                            <img src={img5} alt="Adopt" />
                            <p>Adopt</p>
                        </div></Link>

                        <div className="support-item">
                            <img src={img6} alt="Foster" />
                            <p>Foster</p>
                        </div>

                        <div className="support-item">
                            <img src={img7} alt="Sponsor" />
                            <p>Sponsor</p>
                        </div>

                        <div className="support-item">
                            <img src={img8} alt="Donate" />
                            <p>Donate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
