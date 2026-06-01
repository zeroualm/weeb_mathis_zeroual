import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return(
        <footer>

            <div className="footer-links">

                <div>
                    <span className="footer-logo"><Link to="/">weeb</Link></span>
                </div>

                <div>
                    <h3>Product</h3>
                    <Link to="/">Pricing</Link>
                    <Link to="/">Overview</Link>
                    <Link to="/">Accessibility</Link>
                    <Link to="/">Five</Link>
                </div>

                <div>
                    <h3>Solutions</h3>
                    <Link to="/">Brainstorming</Link>
                    <Link to="/">Ideation</Link>
                    <Link to="/">Wireframing</Link>
                    <Link to="/">Research</Link>
                </div>

                <div>
                    <h3>Resources</h3>
                    <Link to="/">Help Center</Link>
                    <Link to="/">Blog</Link>
                    <Link to="/">Tutorials</Link>
                </div>

                <div>
                    <h3>Company</h3>
                    <Link to="/">About</Link>
                    <Link to="/">Press</Link>
                    <Link to="/">Events</Link>
                    <Link to="/">Careers</Link>
                </div>

            </div>

            <div className="footer-media">
                <p>@ 2025 Weeb, Inc. All rights reserved.</p>

                <div className="footer-media-icons">
                    
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                        <FaYoutube className="icon youtube" />
                    </a>

                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebook className="icon" />
                    </a>

                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter className="icon twitter" /> 
                    </a>

                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram className="icon instagram" />
                    </a>

                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin className="icon" />
                    </a>

                </div>

            </div>


        </footer>
    )
}

export default Footer


