// import * as API from '../../../services/api'
const { Link } = require("./Home.styled")


async function Home () {
    // console.log(API.getTopMovies())
    return (<main>
        список популярных фильмов
        <Link to="movies/:movieId"> Movie Detail</Link>
    </main>)
}

export default Home;