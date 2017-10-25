import React,{ Component } from 'react';
import Search from './Search';
import TodoItem from '../component/TodoItem';
import SmallBtns from '../component/SmallBtns';
import { connect } from 'react-redux';
import { initTodoDuty, deleteTodoDuty, updateTodoDuty } from '../reducer/todoReducer';

class TodoList extends Component{
	
	constructor( props ){
		super( props );
	}
	
	componentWillMount(){
		let todoDuty = localStorage.getItem( 'todoDuty' );
		todoDuty = todoDuty ? JSON.parse( todoDuty ) : [];
		this.props.initTodoDuty( todoDuty );
	}
	
	_filterRenderArr(){
		return this.props.todoDuty.map( ( duty, index ) => {
											if( this.props.show == 'all' ){
												return <TodoItem
													key={index} duty={duty} index={index}
													onDeleteDuty={this.handleDeleteDuty.bind( this )}
													onStatusToggle={this.handleStatusToggle.bind( this )}
												/>
											}else if( this.props.show == 'active' && duty.done == false ){
												return <TodoItem
													key={index} duty={duty} index={index}
													onDeleteDuty={this.handleDeleteDuty.bind( this )}
													onStatusToggle={this.handleStatusToggle.bind( this )}
												/>
											}else if( this.props.show == 'completed' && duty.done == true ){
												return <TodoItem
													key={index} duty={duty} index={index}
													onDeleteDuty={this.handleDeleteDuty.bind( this )}
													onStatusToggle={this.handleStatusToggle.bind( this )}
												/>
											}
										});
	}
	
	handleDeleteDuty( index ){
		console.log(index);
		console.log(this.props.todoDuty);
		let newTodoDuty = [
			...this.props.todoDuty.slice( 0, index),
			...this.props.todoDuty.slice( index + 1 )
		];
		localStorage.setItem( 'todoDuty', JSON.stringify( newTodoDuty ) );
		this.props.deleteTodoDuty( index );
	} 
	
	handleStatusToggle( index ){
		let newTodoDuty = [...this.props.todoDuty];
		if( newTodoDuty[index]['done'] == true ){
			newTodoDuty[index]['done'] = false;
		}else{
			newTodoDuty[index]['done'] = true;
		}
		console.log(newTodoDuty);
		localStorage.setItem( 'todoDuty', JSON.stringify( newTodoDuty ));
		this.props.updateTodoDuty( newTodoDuty );
		console.log(this.props.todoDuty);
	}
	
	render(){
		
		
		return (
			<div className="todo-list">
				<Search />
				{
					this._filterRenderArr()
				}
				<SmallBtns />
			</div>
		);
	}
}

const mapStateToProps = ( state ) => {
	return {
		todoDuty: state.todoDuty,
		show: state.show
	}
}
const mapDispatchToProps = ( dispatch ) => {
	return {
		initTodoDuty: ( todoDuty ) => {
			dispatch( initTodoDuty( todoDuty ) );
		},
		deleteTodoDuty: ( index ) => {
			dispatch( deleteTodoDuty( index ) );
		},
		updateTodoDuty: ( newTodoDuty ) => {
			dispatch( updateTodoDuty( newTodoDuty ) );
		}
	}
}
export default connect( mapStateToProps, mapDispatchToProps )( TodoList )
