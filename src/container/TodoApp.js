import React,{ Component } from 'react';
import Title from '../component/Title';
import TodoList from './TodoList';


export default class TodoApp extends Component{
	
	render(){
		return (
			<div className="app">
				<Title />
				<TodoList />
			</div>
		);
	}
}
