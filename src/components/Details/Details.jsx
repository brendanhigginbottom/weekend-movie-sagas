import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Details() {
    const dispatch = useDispatch();
    const movie = useSelector(store => store.selectedMovie)
    const movieId = useSelector(store => store.selectedMovieId)

    useEffect(() => {
        //dispatch to saga to GET movie details
        dispatch({ type: 'FETCH_SELECTED_MOVIE', payload: movieId });
    }, []);

    // live solve with client-side url params


    return (
        <>
            <h1>Details</h1>
            <div>
                <h3>{movie.title}</h3> 
                <>Test</>
                {/* Added data-value to extract ID to pass on to GET for /details */}
                <img data-value={movie.id} src={movie.poster} alt={movie.title}/>
            </div>
        </>
    );
}

export default Details;