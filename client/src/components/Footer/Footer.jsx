import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, qui? Iure odio possimus tenetur asperiores,
            tempora quia, officia blanditiis aperiam inventore culpa incidunt, nemo quas.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, qui? Iure odio possimus tenetur asperiores,
            tempora quia, officia blanditiis aperiam inventore culpa incidunt, nemo quas.
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">Store</span>
          <div className="copyright">© Copyright 2022. All rights reserved.</div>
        </div>
        <div className="right">
          <img src="./img/payment.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
