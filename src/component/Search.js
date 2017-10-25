import React,{ Component } from 'react';


export default class Search extends Component{
	
	_handleAddDuty( e ){
		if( e.keyCode == 13 ){
			let duty = {
				"done":false,
				"dutyContent": e.target.value
			};
			if( this.props.onInputTodoDuty ){
				this.props.onInputTodoDuty( duty );
			}
		}
		
	}
	
	_handleShowNone(){
		if( this.props.onShowNone ){
			this.props.onShowNone();
		}
	}
	
	render(){
		return (
			<div className="search">
				<span>
					<i onClick={this._handleShowNone.bind( this )}
						className="icon icon-drop">&#xe61d;</i>
				</span>
				<input className="search-input" 
					placeHolder="what needs to be done?" 
					onKeyUp={ this._handleAddDuty.bind( this ) }
					/>
			</div>
		);
	}
}
