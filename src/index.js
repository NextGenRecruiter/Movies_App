import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies)
    yield takeEvery('GET_DETAIL', getDetails)
    yield takeEvery('UPDATE_MOVIES', updateMovies);
    yield takeEvery('SINGLE_MOVIE', setSingleMovie);


}
function* getMovies(){
    try{
        const response = yield axios.get('/api/movies');
        console.log(response.data); 
        yield put({ type:'SET_MOVIES', payload: response.data})
    }catch(error){
        console.log('error in GET generator function', error);  
    }
}
function* getDetails(action){
    try{
        const response = yield axios.get('/api/movies/'+ action.payload.id);
        console.log(response.data); 
        yield put({ type:'SET_GENRES', payload: response.data})
    }catch(error){
        console.log('error in GET detail generator function', error);  
    }
}
//create saga function for details
function* setSingleMovie(action){
    console.log(action.payload)
    try{
      const response = yield axios.get('/api/movies/details/'+ action.payload);
      yield put({type: 'single_MOVIE', payload: response.data})
    }catch(err){
      console.log(err);
    }
  }
function* updateMovies(action){
    try {
        yield axios.put('/api/movies', action.payload);
        console.log('in updateMovies:',action.payload)
      } catch (err){
        console.log('PUT ERROR:',err);
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
const singleMovies = (state=[], action)=>{
    switch(action.type){
      case 'SINGLE_MOVIE':
        return action.payload
      default:
        return state
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
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
