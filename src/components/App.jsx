
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";



 const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<div>Home</div>} />
        <Route path="about" element={<div>About</div>}>
          <Route path="mission" element={<div>Mission</div>} />
          <Route path="team" element={<div>Team</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
        <Route path="products" element={<div>Products</div>} />
        <Route path="products/:id" element={<div>ProductsId</div>} />
      </Route>
    </Routes>
  );
};

export default App;