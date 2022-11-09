import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Home from "../pages/Home";

const Movies = lazy(() => import("pages/Movies/Movies"))
const MovieCast = lazy(() => import("./MovieCast"))
const MovieReviews = lazy(() => import("./MovieReviews"))
const MovieDetails = lazy(() => import("../pages/MovieDetails"))


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