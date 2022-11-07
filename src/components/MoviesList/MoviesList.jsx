import { Link, useLocation } from "react-router-dom";

const MoviesList = ({ movies }) => {
    const location = useLocation();
    return <>
        <ul className="gallery">
            {movies.map(({ id, original_title }) => (
                <Link to={`/movies/${id}`}
                key={id} state={{from: location}}
                 >{ original_title }</Link>
             ))}
        </ul>
    </>
}

export default MoviesList;