import "@styles/About.css";
import Concert from "@images/concert.png";

function About() {
  return (
    <>
      <section className="about">
        <div className="about__text">
          <p className="text__item">
            Lörem ipsum hupp hexar, i martad. Hjulboja dest röpeck är sagisk.
            Varor är i paran. Sode pretil, att solupp. Agt podda tere. Varor är
            i paran. <br />
            <br /> Fude repektig stalker på kroren men jönade blippbetalning gru
            Dörar teligt än spere, plangiu. Nysk tina. Fur decing tritt benas
            nygt stenost. Autona nilig.
          </p>
        </div>
        <img className="about__image" src={Concert} alt="" />
      </section>
    </>
  );
}

export default About;
