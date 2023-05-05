import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Details() {
    const dispatch = useDispatch();
    // movieId fetches id stored in reducer of poster clicked on in MovieList
    const movieId = useSelector(store => store.selectedMovieId);
    // movie fetches data from selected movie
    const selectedMovie = useSelector(store => store.selectedMovie);


    useEffect(() => {
        //dispatch to saga to GET movie details
        dispatch({ type: 'FETCH_SELECTED_MOVIE', payload: movieId });
    }, []);

    //    console.log(selectedMovie, selectedMovie[0].title);

    // live solve with client-side url params


    return (
        <>
            {selectedMovie.length === 0 ? (
                <h1>Loading</h1>
            ) : (
                <div>
                    <h1>Test{selectedMovie[0].title}</h1>
                    <div>
                        <h3>{selectedMovie[0].title}</h3> 
                        <img src={selectedMovie[0].poster} alt={selectedMovie[0].title}/>
                        <br />
                        <p>{selectedMovie[0].description}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Details;