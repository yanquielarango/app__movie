import { MdGrade } from "react-icons/md";

const IMG_API = "https://image.tmdb.org/t/p/w500";

const setVoteClass = (vote)  => {
  if(vote >= 8) {
    return "green";
  }else if (vote >= 6) {
    return "orange";
  }else{
    return "red";
  }
};

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie">
      <img src={ poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1556132877-ded3bb0173b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80'} alt={title}/>
      <div className="movie-info">
        <h3>{title}</h3>
        <div className="movie__star">
          <MdGrade/>
          <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>
      </div>

      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default Movie
