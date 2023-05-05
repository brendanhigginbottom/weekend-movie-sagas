import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Details() {
    const dispatch = useDispatch();
    // movie fetches data from selected movie
    const selectedMovie = useSelector(store => store.selectedMovie)
    // movieId fetches id stored in reducer of poster clicked on in MovieList
    const movieId = useSelector(store => store.selectedMovieId)

    useEffect(() => {
        //dispatch to saga to GET movie details
        dispatch({ type: 'FETCH_SELECTED_MOVIE', payload: movieId });
        console.log(selectedMovie);
    }, []);

   console.log(selectedMovie);

    // live solve with client-side url params


    return (
        <>
            <h1>{selectedMovie.title}</h1>
                <div key={selectedMovie.id}>
                    <h3>{selectedMovie.title}</h3> 
                    <img src={selectedMovie.poster} alt={selectedMovie.title}/>
                </div>
        </>
    );
}

export default Details;