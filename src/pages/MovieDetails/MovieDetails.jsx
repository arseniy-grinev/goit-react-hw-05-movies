import BackLink from "components/BackLink";
import { useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Link, Wrapper, InfoWrapper, GenreWrapper} from "./MovieDetails.styled";
import { getMovieById } from '../../services/api'
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Loader from "components/Loader";

const MovieDetails = () => {
    const location = useLocation();
    const {movieId} = useParams()
    const [movie, setMovie] = useState(null);
    const [status, setStatus] = useState('idle');
    const backLinkHref = location.state?.from ?? "/movies";

   
    useEffect(() => {
        async function renderMovieById() {
      setStatus('pending');  
            try {
                const movieById = await getMovieById(movieId);
                setMovie(movieById);
                setStatus('resolved');
                
            } catch (error) {
                toast.error('Something went wrong. Please, reload the page.');
                setStatus('rejected');
            }
        }

        renderMovieById();
        console.log("dsgjkytycdshbcka")
    },[movieId]);

    if (!movie) {
        return
    }
    const { poster_path, original_title, vote_average, overview, genres, release_date } = movie
    const scope = Math.round(vote_average * 10);
    const posterUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;
    const releseYear = release_date.slice(0, 4)
    return <>
        {status === 'penging' && <Loader />}
        {status === 'resolved' && <div>
             <BackLink to={backLinkHref} label={"назад"} />  
            <Wrapper>
                <img src={posterUrl} alt="" />
                <InfoWrapper>
                    <h2>{original_title}({releseYear})</h2>
                    <p>User Score: {scope}%</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <GenreWrapper>
                        {genres.map(({ id, name }) => (
                            <p key={id}>{ name }</p>
                        ))}
                    </GenreWrapper>
                </InfoWrapper>    
            </Wrapper>
                <Link to="cast">Cast</Link>
                <Link to="reviews">Reviews</Link>
                <Outlet/>
        </div>}
        <ToastContainer autoClose={3000} position="top-right" /></>
}

export default MovieDetails;