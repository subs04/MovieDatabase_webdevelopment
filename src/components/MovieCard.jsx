
function MovieCard() {
  return (
    <div style={styles.card}>
      <div style={styles.poster}>
        Poster
      </div>

      <h2>Avengers: Endgame</h2>

      <p>Genre: Action</p>

      <p>Year: 2019</p>

      <span style={styles.rating}>
        ⭐ 8.4
      </span>
    </div>
  );
}

const styles = {
  card: {
    width: "220px",
    border: "1px solid gray",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    fontFamily: "Arial",
  },

  poster: {
    height: "250px",
    backgroundColor: "#ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    marginBottom: "10px",
  },

  rating: {
    backgroundColor: "gold",
    padding: "5px 10px",
    borderRadius: "20px",
    fontWeight: "bold",
  },
};

export default MovieCard;