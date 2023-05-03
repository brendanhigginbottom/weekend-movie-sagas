import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { useHistory } from 'react-router-dom';
// import ReactDom from 'react-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const showDetails = (event) => {
        console.log(Number(event.target.dataset.value));
        const selectedMovieId = Number(event.target.dataset.value);
        dispatch({
            type: 'SET_SELECTED_MOVIE_ID',
            payload: selectedMovieId,
        })
        history.push(`/details/${selectedMovieId}`);
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            {/* Added data-value to extract ID to pass on to GET for /details */}
                            <img data-value={movie.id} onClick={showDetails} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;