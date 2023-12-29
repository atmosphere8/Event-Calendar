import Header from "@components/general/Header.jsx";
import Event from "@components/pages/AboutEvent/Event.jsx";
import About from "@components/pages/AboutEvent/About.jsx";
import Line from "@components/general/Line.jsx";
import Eventstext from "@components/pages/AboutEvent/Events-text.jsx";
import Events from "@components/general/Events.jsx";
import Footer from "@components/general/Footer.jsx";

function AboutEvent() {
  return (
    <>
      <Header />

      <Event />

      <About />

      <Line />

      <Eventstext />

      <Events />

      <Footer />
    </>
  );
}

export default AboutEvent;
