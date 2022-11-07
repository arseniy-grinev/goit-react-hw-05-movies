import { getMovieRevievsById } from "services/api";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

   
    useEffect(() => {
        async function renderRevievsById() {
            try {
                const reviewsById = await getMovieRevievsById(movieId);
                setReviews([...reviewsById]);
                console.log('нашли reviewsById')
                
            } catch (error) {
                // console.log('reject movie')
                // toast.error('Something went wrong. Please, reload the page.');
                // setStatus('rejected');
            }
        }

        renderRevievsById();
        console.log("zbs rev`")
    },[movieId]);
    
    if (reviews.length === 0) {
        return <div>
                    <p>We haven`t reviews to this movie 🙃</p>
              </div>
    }



    return <div>
        <ul>
            {reviews.map(({ id, author, content }) => (
                <li key={id}>
                    <h4>{ author}</h4>
                    <p>{content}</p>
                </li>
            ))}
        </ul>
    </div>
}

export default MovieReviews;