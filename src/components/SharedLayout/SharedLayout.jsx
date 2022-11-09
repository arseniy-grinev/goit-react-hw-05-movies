import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, Header, Link } from "./SharedLayout.styled";

function SharedLayout ()  {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense>
        <Outlet/>
      </Suspense>
    </Container>
  );
};

export default SharedLayout;