import { Outlet } from "react-router-dom";
import { Link } from "./MovieDetails.styled";

const MovieDetails = () => {
    return <div>
        movie detail by id
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet/>
    </div>
}

export default MovieDetails;