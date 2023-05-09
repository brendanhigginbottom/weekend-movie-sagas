import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { useHistory } from 'react-router-dom';
// imports for MUI Grid
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// imports for MUI Cards
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


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
        // history.push(`/details/${selectedMovieId}`); Need to research URL params for this to work
        history.push('/details');
    }

    return (
        <main>
            <h1>MovieList</h1>
            <Box sx={{ flexGrow: 1 }}>
                {/* <section className="movies"> */}
                <Grid className="movies" container spacing={2}>
                    {movies.map(movie => {
                        return (
                            <Grid item xs={3} key={movie.id}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <h3>{movie.title}</h3>
                                        {/* Added data-value to extract ID to pass on to GET for /details */}
                                        <img data-value={movie.id} onClick={showDetails} src={movie.poster} alt={movie.title} />
                                    </CardContent> 
                                </Card>
                            </Grid>
                        );
                    })}
                {/* </section> */}
                </Grid>
            </Box>
        </main>

    );
}

export default MovieList;