import "./contact.scss";
import { Facebook, Instagram, Twitter, Google, Pinterest } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>STAY IN TOUCH: </span>
        <div className="mail">
          <input type="email" placeholder="Enter your email..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <Facebook />
          <Instagram />
          <Twitter />
          <Google />
          <Pinterest />
        </div>
      </div>
    </div>
  );
};

export default Contact;
