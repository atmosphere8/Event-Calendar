import "@styles/Propose.css";

import Download from "@images/download.svg";

function Propose() {
  return (
    <section className="propose">
      <h2 className="propose__text">Wanna Propose Event?</h2>

      <div className="event-information">
        <input
          className="information__item"
          type="text"
          placeholder="Enter organizer name"
        />

        <input
          className="information__item"
          type="text"
          placeholder="Enter e-mail"
        />

        <label className="information__item-photo">
          Upload photo
          <input className="information__item" type="file" accept="image/*" />
          <img className="download-icon" src={Download} alt="" />
        </label>

        <input
          className="information__item"
          type="text"
          placeholder="Choose date and time"
        />

        <input
          className="information__item"
          type="text"
          placeholder="Enter location"
        />

        <input
          className="information__item"
          type="text"
          placeholder="Enter link"
        />

        <input
          className="information__item-describe"
          type="text"
          placeholder="Describe the Event"
        />

        <button className="submit__button">
          <p className="button__text">Submit</p>
        </button>
      </div>
    </section>
  );
}

export default Propose;
