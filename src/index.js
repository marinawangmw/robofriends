import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({ searchRobots, requestRobots })

//instant logger that keep track of changes in states
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

// le paso el store de states a app
// lo recibe en componentDidMount()
// ReactDOM.render(<App store={store} />,document.getElementById('root'));

//Uso Provider para pasar el store a todos los hijos de app.js
ReactDOM.render(
	<Provider store={store}> 
		<App />
	</Provider>, document.getElementById('root'));


serviceWorker.unregister();
