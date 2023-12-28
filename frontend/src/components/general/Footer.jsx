import "@styles/General/Footer.css";
import Arrow from "@images/arrow.svg";

function Footer() {
  return (
    <>
      <footer className="nav-footer">
        <p className="logo">LO</p>
        <nav className="menu">
          <a className="menu__link" href="">
            Events
          </a>
          <a className="menu__link" href="">
            Propose Event
          </a>
          <a className="menu__link" href="">
            Contact
          </a>
        </nav>

        <nav className="filter">
          <button className="filter__button" href="">
            Your City: New York
            <img className="filter__arrow" src={Arrow} alt="" />
          </button>
          <button className="filter__button" href="">
            Date: 24.06.2023
            <img className="filter__arrow" src={Arrow} alt="" />
          </button>
          <button className="filter__button" href="">
            Type: Rock Concert
            <img className="filter__arrow  " src={Arrow} alt="" />
          </button>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
