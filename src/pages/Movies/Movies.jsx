import Searchbar from "components/Searchbar"
import { Link } from "./Movies.styled"

export default function Movies () {
    return <main>
        <Searchbar />
        <p>тут будет список результата поиска</p>
        <Link to=":movieId"> Movie Detail</Link>
    </main>
}