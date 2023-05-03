import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Remembered seeing exporting at function declaration done in documentation somewhere,
// seeing if it works. Seems to!
export default function Details() {
    const dispatch = useDispatch();
    const movie = useSelector(store => store.selectedMovie)

    useEffect(() => {
        //dispatch to saga to GET movie details
        dispatch({ type: 'FETCH_SELECTED_MOVIE', fetchSelectedMovie(movie) });
    }, []);


    return (
        <>
            <h1>Details</h1>
            <div>
                <h3>{movie.title}</h3> 
                {/* Added data-value to extract ID to pass on to GET for /details */}
                <img data-value={movie.id} src={movie.poster} alt={movie.title}/>
            </div>
        </>
    );
}