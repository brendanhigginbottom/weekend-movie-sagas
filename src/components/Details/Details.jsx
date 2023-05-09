import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Imports for MUI Cards
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// Import for MUI Button
import Button from '@mui/material/Button';
// Import for typography
import Typography from '@mui/material/Typography';


function Details() {
    const dispatch = useDispatch();
    const history = useHistory();
    // movieId fetches id stored in reducer of poster clicked on in MovieList
    const movieId = useSelector(store => store.selectedMovieId);
    // movie fetches data from selected movie
    const selectedMovie = useSelector(store => store.selectedMovie);


    useEffect(() => {
        //dispatch to saga to GET movie details
        dispatch({ type: 'FETCH_SELECTED_MOVIE', payload: movieId });
    }, []);

    // live solve with client-side url params

    const backButton = () => {
        history.push('/');
    }
    console.log(selectedMovie);
    return (
        <Card variant="outlined" sx={{ margin: "3em" }}>
            {/* Conditionally rendering based on whether saga has 
            returned data from server to selectedMovie reducer */}
            {selectedMovie.length === 0 ? (
                <h1>Loading</h1>
            ) : (
                <CardContent>
                        <div>
                            <Typography variant="h3">{selectedMovie[0].title}</Typography>
                            <img src={selectedMovie[0].poster} alt={selectedMovie[0].title} />
                            <br />
                            {/* Conditional rendering for genre text being plural */}
                            <Typography variant="h5"> 
                                {selectedMovie.length === 1 ? (
                                'Genre:'
                                ) : (
                                'Genres:'
                                )
                                }
                                {/* Might be a better way to query the database to not have to map
                                over the results but this works! */}
                                {selectedMovie.map(genre => (
                                    <span key={genre.name}>{genre.name} </span>

                                ))
                                }
                            </Typography>
                            <br />
                            <Typography variant="body1">{selectedMovie[0].description}</Typography>
                            <br />
                            <CardActions>
                                <Button variant="outlined" onClick={backButton}>Return to list</Button>
                            </CardActions>
                        </div>
                </CardContent>
            )}
        </Card>
    );
}

export default Details;