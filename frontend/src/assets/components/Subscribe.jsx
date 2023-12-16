import "../styles/Subscribe.css";

function Subscribe() {
  return (
    <>
      <section className="subscribe">
        <h2 className="subscribe__text">Subscribe to news in your city</h2>

        <div className="self-information">
          <input
            className="information__item"
            type="text"
            placeholder="Enter your name"
          />

          <input
            className="information__item"
            type="text"
            placeholder="Enter you city"
          />

          <input
            className="information__item"
            type="text"
            placeholder="Enter e-mail"
          />

          <input
            className="information__item"
            type="text"
            placeholder="Enter phone number (optional)"
          />

          <button className="submit__button">
            <p className="button__text">Subscribe</p>
          </button>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
