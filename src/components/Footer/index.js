import { Link } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Button from "../Button";
import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <section className="footer__subscription">
        <p className="footer__subscription__heading">
          Join the newsletter to receive emails with news and our best adventure
          deals
        </p>
        <p className="footer__subscription__text">
          You can unsubscribe at any time
        </p>
        <div className="footer__input__group">
          <form>
            <input
              className="footer__email"
              name="email"
              type="email"
              placeholder="Your Email"
            />

            <Button btnStyle="btn__outline" path="/">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      <div className="footer__links">
        <div className="footer__links__group">
          <h2>About Us</h2>
          <Link to="/">How it works</Link>
          <Link to="/">Success stories</Link>
          <Link to="/">Career</Link>
          <Link to="/">Terms of Service</Link>
        </div>
        <div className="footer__links__group">
          <h2>Contact Us</h2>
          <Link to="/">Earth chat</Link>
          <Link to="/">Intergalactic chat</Link>
          <Link to="/">Destinations</Link>
          <Link to="/">Sponsorships</Link>
        </div>

        <div className="footer__links__group">
          <h2>Videos</h2>
          <Link to="/">Journey</Link>
          <Link to="/">Hibernation</Link>
          <Link to="/">Spacecrafts</Link>
          <Link to="/">On board</Link>
        </div>
        <div className="footer__links__group">
          <h2>Social Media</h2>
          <Link to="/">Facebook</Link>
          <Link to="/">Instagram</Link>
          <Link to="/">Youtube</Link>
          <Link to="/">Twitter</Link>
        </div>
      </div>
      <section className="footer__media__wrapper">
        <div className="social__media__wrap">
          <div className="footer__rights">
            <small>kosmolet © 2021</small>
          </div>
          <div className="social__icons">
            <a
              className="facebook social__icon "
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              className="instagram social__icon "
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              className="youtube social__icon "
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Youtube"
            >
              <YouTubeIcon />
            </a>
            <a
              className="twitter social__icon "
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </a>
            <a
              className="linkedin social__icon "
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
