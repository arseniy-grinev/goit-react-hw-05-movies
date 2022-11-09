import Searchbar from "components/Searchbar"
import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getMoviesByQuery } from "services/api";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import MoviesList from "components/MoviesList";
import Loader from "components/Loader";




export default function Movies() {
    const [searchQuery, setSearchQuery] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState('idle');
    const query = searchQuery.get('query');
    

    const onSearch = (e) => {
        e.preventDefault();
        const value = e.currentTarget.elements.query.value
        setSearchQuery({ query: value });

        if (value.trim() === '') {
        toast.error('Please, enter your search query.');
        return;
        }
        e.currentTarget.reset();
    }

    useEffect(() => {
        // if (!query) {
        //     return
        // }

        async function renderMoviesByQuery() {
            setStatus('pending');
            try {
                const moviesList = await getMoviesByQuery(query);
                if (moviesList.length === 0) {
                    toast.error('Something went wrong. Please, reload the page.');
                    setStatus('rejected');
                }
                console.log(moviesList)
                setMovies(moviesList);
                setStatus('resolved');
            } catch (error) {
                toast.error('Something went wrong. Please, reload the page.');
                setStatus('rejected');
            }
            
        }

        renderMoviesByQuery()
    }, [query])

    return <main>
            {status === 'penging' && <Loader/>}
            <Searchbar onSubmit={onSearch} />
            {movies  && <MoviesList movies={movies} />}
            <ToastContainer autoClose={3000} position="top-right" />
        </main>
}