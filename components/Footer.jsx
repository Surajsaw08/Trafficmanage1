// components/Footer.js
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer  ">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <p>
            Revolutionizing traffic management with cutting-edge AI technology.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#realtime-monitoring">Real-Time Monitoring</Link>
            </li>
            <li>
              <Link href="#predictive-analytics">Predictive Analytics</Link>
            </li>
            <li>
              <Link href="#smart-traffic-lights">Smart Traffic Lights</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <p>neelbad, Bhopal - mp</p>
          <p>smart@traffic.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
