import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const OMDBKEY = import.meta.env.VITE_OMDBKEY;

export default function SerachResults() {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentQuery = (searchParams.get("query") || "").trim();

    const [inputValue, setInputValue] = useState(currentQuery);
    const [movies, setMovies] = useState([]);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setInputValue(currentQuery);
    }, [currentQuery]);

    useEffect(() => {
        async function search() {
            if (!currentQuery) {
                setMovies([]);
                setMessage("Type a movie name to search.");
                setLoading(false);
                return;
            }

            setLoading(true);
            console.log("hey");

            try {
                const res = await fetch(`https://www.omdbapi.com/?apikey=${OMDBKEY}&s=${encodeURIComponent(currentQuery)}`);
                const data = await res.json();

                if (data.Response === "False") {
                    setMovies([]);
                    setMessage(`Error: ${data.Error || "No results found"}`);
                    return;
                }

                setMovies(data.Search || []);
                setMessage(`Search results for '${currentQuery}'`);
            } catch {
                setMovies([]);
                setMessage("Error: Failed to search movies.");
            } finally {
                setLoading(false);
            }
        }

        search();
    }, [currentQuery]);

    function handleKeyDown(e) {
        if (e.key !== "Enter") return;

        const nextQuery = inputValue.trim();
        console.log("searching for:", nextQuery);

        if (!nextQuery) {
            setSearchParams({});
            return;
        }

        setSearchParams({ query: nextQuery });
    }

    return (
        <div>
            <div id="input-container">
                <input
                    type="text"
                    placeholder="Search"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>

            {loading ? <h4>Loading...</h4> : <h4>{message}</h4>}

            <div id="trending-container">
                {movies.map((movie) => (
                    <div key={movie.imdbID}>
                        <Link to={`/details/${movie.imdbID}`}>
                            <img src={movie.Poster} className="poster" alt="Movie Poster" />
                            <p>{movie.Title}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
