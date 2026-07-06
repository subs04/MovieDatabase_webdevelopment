function MovieCard(props) {
  let badgeColor = "";

  if (props.rating >= 8) {
    badgeColor = "green";
  } else if (props.rating >= 5) {
    badgeColor = "orange";
  } else {
    badgeColor = "red";
  }

  return (
    <div className="card">
      <div className="poster">Poster</div>

      <h2>{props.title}</h2>

      <p><b>Genre:</b> {props.genre}</p>

      <p><b>Year:</b> {props.year}</p>

      <span
        className="rating"
        style={{ backgroundColor: badgeColor }}
      >
        ⭐ {props.rating}
      </span>
    </div>
  );
}

export default MovieCard;