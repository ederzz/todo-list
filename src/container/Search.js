import Search from '../component/Search';
import React,{ Component } from 'react';
import { addTodoDuty, showNone } from '../reducer/todoReducer';
import { connect } from 'react-redux';

class SearchContainer extends Component{
	
	handleInputTodoDuty( duty ){
		let newTodoDuty = [...this.props.todoDuty, duty ];
		localStorage.setItem( 'todoDuty', JSON.stringify( newTodoDuty ) )
		this.props.addDuty( duty );
	}
	
	handleShowNone(){
		if( this.props.showNone ){
			let status = this.props.show == 'none' ? 'all' : 'none';
			if( status == 'all' ){
				document.querySelector('.btn-wrapper .btn-active').classList.remove("actived");
				document.querySelector('.btn-wrapper .btn-all').classList.remove("actived");
				document.querySelector('.btn-wrapper .btn-completed').classList.remove("actived");
				document.querySelector('.btn-wrapper .btn-all').classList.add("actived");
			}
			this.props.showNone( status );
			console.log( this.props.show )
		}
	}
	
	render(){
		return (
			<div>
				<Search onShowNone={this.handleShowNone.bind( this )}
					onInputTodoDuty={this.handleInputTodoDuty.bind(this)} />
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
		addDuty: ( duty ) => {
			dispatch( addTodoDuty( duty ) );
		},
		showNone: ( status ) => {
			dispatch( showNone( status ) );
		}
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( SearchContainer );
