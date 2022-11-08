import { getMovieCastById } from "services/api";
import { useState, useEffect} from "react";

import { useParams } from "react-router-dom";

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);

   
    useEffect(() => {
        async function renderCastById() {
            try {
                const castById = await getMovieCastById(movieId);
                setCast(castById);
                console.log('нашли cast')
                
            } catch (error) {
                // console.log('reject movie')
                // toast.error('Something went wrong. Please, reload the page.');
                // setStatus('rejected');
            }
        }

        renderCastById();
        console.log("zbs`")
    },[movieId]);
    
    if (!cast) {
        return <div>
                    <p>We haven`t casts to this movie 🙃</p>
              </div>
    }



    return <div>
        <ul>
            {cast.cast.map(({ id, name, profile_path, character }) => (
                <li key={id}>
                    <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={`${name}`} />
                    <p>Name: {name}</p>
                    <p>Character: {character}</p>

                </li>
            ))}
        </ul>
    </div>
}

export default MovieCast;