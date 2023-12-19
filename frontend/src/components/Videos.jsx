import "@styles/Videos.css";
import Video from "@videos/video.mp4";

function Videos() {
  return (
    <section className="videos">
      <h2 className="videos__text">Videos</h2>
      <div className="video">
        <video controls className="video__item" src={Video}></video>
      </div>
    </section>
  );
}

export default Videos;
