import { Link } from 'react-router-dom';
import "./Hero.css";
import img1 from "./images/45.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="section-box">
        <div className="content-wrap">
          <header>
            <a className="header-logo"><span>DOG</span> NGO</a>
            <nav>
              <Link className="nav-item" to="/">Home</Link>
              <Link className="nav-item" to="/support">Support</Link>
              <Link className="nav-item" to="/campaign">Campaigns</Link>
              <Link className="nav-item" to="/blog">Blog</Link>
              <Link className="nav-item" to="/more">More</Link>
              
            </nav>
          </header> 
          <div className="hero-content">
            <h3>Protect</h3>
            <h1>Dogs</h1>
            <img src={img1} className="hero-img" alt="Hero" />
            <button className="hero-btn">Join With Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
