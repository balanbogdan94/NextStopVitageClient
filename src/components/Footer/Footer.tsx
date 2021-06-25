import React from "react";
import "./Footer.scss";
import { TiSocialFacebookCircular, TiSocialInstagram } from "react-icons/ti";
import { BiPhone } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-links">
        <hr />
        <ul>
          <li>
            <a href="https://www.facebook.com/NextStopVintageShop/">
              <TiSocialFacebookCircular size={30} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/next_stop_vintage_shop/">
              <TiSocialInstagram size={30} />
            </a>
          </li>
        </ul>
        <hr />
      </div>

      <ul className="contact">
        <li>
          <BiPhone fontSize={24} />
          (+40) 751 943 516
        </li>
        <li>
          <BiMailSend fontSize={24} /> vlad500cent@yahoo.com
        </li>
      </ul>
      <div className="info-link">
		  <div className="info-link--title">
	  <hr />
	  	Links
    	<hr />
		</div>
        <ul>
		<a href="#">
            <li>Contact</li>
          </a>
          <a href="#">
            <li>Livrare si retur</li>
          </a>
          <a href="#">
            <li>Termeni si conditii </li>
          </a>
		  <a href="#">
            <li>Politica de confidentialitate </li>
          </a>
          <a href="https://anpc.ro/">
            <li>A.N.P.C.</li>
          </a>
        </ul>
      </div>
      <div className="copyright">
		  <hr/>
		  © 2021 Next Stop Vintage
		  <hr/>
	  </div>
    </div>
  );
};

export default Footer;
