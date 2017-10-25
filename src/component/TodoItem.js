import React,{ Component } from 'react';
import { connect } from 'react-redux';

export default class TodoItem extends Component{
	
	
	componentWillMount(){
		
	}
	
	handleDeleteDuty(){
		if( this.props.onDeleteDuty ){
			console.log( this.props.index );
			this.props.onDeleteDuty( this.props.index );
		}
	
	}
	
	onStatusToggle(){
		if(this.props.onStatusToggle){
			console.log(this.props.index);
			this.props.onStatusToggle( this.props.index );
		}
	}

	
	render(){
		if( this.props.duty.done == true ){
			this.styles = {
				icon:{
					'visibility':'visible'
				},
				text:{
					'text-decoration':'line-through',
					'color':'#bbb'
				}
			}
		}else{
			this.styles = {
				icon:{
					'visibility':'hidden'
				},
				text:{
					'text-decoration':'none',
					'color':'#000'
				}
			}
		}
		return (
			<div className="todo-item">
				<span style={this.styles.icon}>
					<i className="icon icon-done">&#xe61a;</i>
				</span>
				<span	style={this.styles.text} 
					className="todo-content"
					onClick={this.onStatusToggle.bind(this)}>{this.props.duty.dutyContent}</span>
				<span>
					<i className="icon icon-cancel"
						onClick={this.handleDeleteDuty.bind( this )}>&#xe603;</i>
				</span>
			</div>
		);
	}
}
