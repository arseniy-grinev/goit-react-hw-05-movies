import BackLink from "components/BackLink";
import { useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Link, Wrapper } from "./MovieDetails.styled";
import { getMovieById } from '../../services/api'
import { useEffect } from "react";

const MovieDetails = () => {
    const location = useLocation();
    const {movieId} = useParams()
    console.log(movieId);
    const [movie, setMovie] = useState(null);
    // const [status, setStatus] = useState('idle');
    const backLinkHref = location.state?.from ?? "/movies";

   
    useEffect(() => {
        async function renderMovieById() {
    //   setStatus('pending');  
            try {
                const movieById = await getMovieById(movieId);
                setMovie(movieById);
                console.log('нашли')
                
            } catch (error) {
                // console.log('reject movie')
                // toast.error('Something went wrong. Please, reload the page.');
                // setStatus('rejected');
            }
        }

        renderMovieById();
        console.log("dsgjkytycdshbcka")
    },[movieId]);

    if (!movie) {
        return
    }
    const { poster_path, original_title, vote_average, overview, genres } = movie
    const scope = Math.round(vote_average * 10);
    const posterUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;
    
    return <>
        <BackLink to={backLinkHref} label={"назад"} />
    <Wrapper>
        
            <div>
                <img src={posterUrl} alt="" />
                <div>
                    <h2>{original_title}</h2>
                    <p>User Score: {scope}%</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>
                        {genres.map(({ id, name }) => (
                            <span key={id}>{ name }</span>
                        ))}
                    </p>
                </div>
         
            </div>
    </Wrapper>
    <Wrapper>

    <Link to="cast">Cast</Link>
    <Link to="reviews">Reviews</Link>
    <Outlet/>

    </Wrapper></>
}

export default MovieDetails;