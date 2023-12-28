import "@styles/General/Line.css";

function Line() {
  return (
    <section className="line">
      <svg>
        <line className="line__item" x1="10" y1="30" x2="2000" y2="30" />
      </svg>
    </section>
  );
}

export default Line;
