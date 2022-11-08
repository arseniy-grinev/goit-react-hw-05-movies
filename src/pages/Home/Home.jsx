import { getTopMovies } from "services/api";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import MoviesList from "components/MoviesList";
import Loader from "components/Loader";


function Home() {
    const [trandMovies, setTrandMovies] = useState([]);
    const [status, setStatus] = useState('idle');

    useEffect(() => {

    async function renderTrandMovies() {
      setStatus('pending');

      try {
          const moviesList = await getTopMovies();
          setTrandMovies([...moviesList]);
          setStatus('resolved');
        if (moviesList.length === 0) {
            toast.error('Something went wrong. Please, reload the page.');
            setStatus('rejected');
        }
      } catch (error) {
        toast.error('Something went wrong. Please, reload the page.');
        setStatus('rejected');
      }
    }

    renderTrandMovies();
  }, []);

    return (<main>
        {status === 'penging' && <Loader/>}
        {trandMovies.length > 0 && <MoviesList movies={trandMovies} />}
        <ToastContainer autoClose={3000} position="top-right" />
    </main>)
}

export default Home;