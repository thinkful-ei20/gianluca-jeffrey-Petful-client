import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Dashboard';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

let cat = {
  imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription: 'Orange Bengal cat with black stripes lounging on concrete.',
  name: 'Jim',
  sex: 'Male',
  age: 10,
  breed: 'Bengal',
  story: 'Lazy Cat, No body cares about him, :('
};

let dog = {
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Chunky',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'He has an eating disorder'
};

ReactDOM.render(
  <Provider store={store}>
    <Dashboard catToAdopt={cat} dogToAdopt={dog} />
  </Provider>,
  document.getElementById('root')
);
