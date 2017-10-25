import React from 'react';
import ReactDOM from 'react-dom';
import './css/todo.css';
import App from './container/TodoApp';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from './reducer/todoReducer';

//创建store
const store = createStore( todoReducer );

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
