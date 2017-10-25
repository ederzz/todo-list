import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { deleteCompleted, showAll, showActive, showCompleted} from '../reducer/todoReducer';

class SmallBtns extends Component{
	
	_showAll( e ){
		if( this.props.showAll ){
			let siblings =  e.target.parentNode.childNodes;
			for(let i = 0;i < siblings.length;i++){
				siblings[i].classList.remove("actived");
			}
			e.target.classList.add("actived");
			this.props.showAll();
		}
	}
	_showActive( e ){
		if( this.props.showActive ){
			let siblings =  e.target.parentNode.childNodes;
			for(let i = 0;i < siblings.length;i++){
				siblings[i].classList.remove("actived");
			}
			e.target.classList.add("actived");
			this.props.showActive();
		}
	}
	_showCompleted( e ){
		if( this.props.showCompleted ){
			let siblings =  e.target.parentNode.childNodes;
			for(let i = 0;i < siblings.length;i++){
				siblings[i].classList.remove("actived");
			}
			e.target.classList.add("actived");
			this.props.showCompleted();
		}
	}
	_deleteCompleted(){
		if( this.props.deleteCompleted ){
			let newTodoDuty = this.props.todoDuty.filter( ( duty ) => {
				return duty.done == false;
			} );
			console.log(newTodoDuty);
			localStorage.setItem( 'todoDuty', JSON.stringify( newTodoDuty ));
			this.props.deleteCompleted( newTodoDuty );
		}
	}
	
	render(){
		
		return (
			<div className="footer">
				<span className="rest-duty">{this.props.todoDuty.length} items left</span>
				<div className="btn-wrapper">
					<button onClick={this._showAll.bind( this )}
						className="btn btn-all actived">All</button>
					<button onClick={this._showActive.bind( this )}
						className="btn btn-active">Active</button>
					<button onClick={this._showCompleted.bind( this )}
						className="btn btn-completed">Completed</button>
					<button onClick={this._deleteCompleted.bind( this )} 
						className="btn">Clear Completed</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ( state ) => {
	return {
		todoDuty: state.todoDuty
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		deleteCompleted: ( newTodoDuty ) => {
			dispatch( deleteCompleted( newTodoDuty ) );
		},
		showAll: () => {
			dispatch( showAll() );
		},
		showActive: () => {
			dispatch( showActive() );
		},
		showCompleted: () => {
			dispatch( showCompleted() );
		}
	}
}

export default connect( mapStateToProps, mapDispatchToProps )(SmallBtns);
