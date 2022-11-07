import Searchbar from "components/Searchbar"
import { Link } from "./Movies.styled"
import { useSearchParams } from "react-router-dom"
// import { useState } from "react";



export default function Movies() {
    const [serchQuery, setSearchQuery] = useSearchParams();
    // const [query, setQuery] = useState();

    const updateSearchQuery = value => {
        const nextParams = value !== "" ? { value } : {};
        setSearchQuery(nextParams);
    }

    const onSearch = (e) => {
        e.preventDefault();
        console.log(serchQuery)
    }



    return <main>
        <Searchbar onChange={updateSearchQuery} onSubmit={onSearch} />
        <p>тут будет список результата поиска</p>
        <Link to=":movieId"> Movie Detail</Link>
    </main>
}