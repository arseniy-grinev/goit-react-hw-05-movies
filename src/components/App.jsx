import MovieDetails from "components/pages/MovieDetails";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import MovieCast from "./MovieCast";
import MovieReviews from "./MovieReviews";
import Movies from "components/pages/Movies/Movies";
import Home from "./pages/Home";

 export const App = () => {
   return (
    
    <Routes>
      <Route path="/" element={<SharedLayout />}>
         <Route index element={<Home/>} />
         <Route path="movies" element={<Movies/>}/>
         <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<MovieCast/>} />
            <Route path="reviews" element={<MovieReviews/>} />
         </Route>
      </Route>
    </Routes>
  );
};

// export default App;