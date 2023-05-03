import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { useSelector } from 'react-redux';



// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_SELECTED_MOVIE', fetchMovie(movie))
}

function* fetchMovie(movie) {
    //saga to fetch specific movie
    // const selectedId = useSelector(store => store.selectedMovieId);
    try {
        const selectedMovie = yield axios.get(`/api/details/${movie}`);
        console.log('get selected movie', selectedMovie.data);
        yield put({ type: 'SET_SELECTED_MOVIE', payload: selectedMovie.data })
    } catch {
        console.log('get selected movie error');
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}
// Used to store selected movie id for GET request
const selectedMovieId = (state = 0, action) => {
    switch (action.type) {
        case 'SET_SELECTED_MOVIE_ID':
            return action.payload;
        default:
            return state;
    }
}

// Used to store selected movie returned from the server
const selectedMovie = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectedMovie,
        selectedMovieId,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
