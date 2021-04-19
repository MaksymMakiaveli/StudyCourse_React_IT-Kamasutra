import reportWebVitals from './reportWebVitals';
import state from './Redux/state';
import { BrowserRouter } from 'react-router-dom';
import { rerenderEntireTree } from './render';

rerenderEntireTree(state);

reportWebVitals();
