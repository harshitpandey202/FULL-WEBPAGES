import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer(){
    return(
<section className="footer">
    <div className="section-box1">
        <div className="footer-grid">
            <div>
                <h3>Quick Links</h3>
                <Link to="/"><a  className="footer-items f1" >Home</a></Link>
                <Link to="/support"> <a  className="footer-items f2">Support</a></Link>
                <Link to="/campaign"> <a  className="footer-items f3">Campaigns</a></Link>
                <Link to="/blog"> <a  className="footer-items f4">Blog</a></Link>
                <Link to="/more"> <a  className="footer-items f5">More</a></Link>
            </div>


            <div>
            <h3>Contacts</h3>
                <a  className="footer-items f1" >+555 987-6543</a>
                <a  className="footer-items f2"> +971 55 123 4567</a>
                <a  className="footer-items f3">+61 4 1234 5678</a>
                
            </div>


            <div>
            <h3>Socials</h3>
                <a   className="footer-items f1">FaceBook</a>
                <a  className="footer-items f2">Instagram</a>
                <a  className="footer-items f3">Youtube</a>
                <a  className="footer-items f4">Linkedin</a>
                <a  className="footer-items f5">Twitter</a>
               
            </div>
        
            
        </div>
        <p className="copyright">© Harshit | all right reserved</p>
    </div>
</section>
 
    )};