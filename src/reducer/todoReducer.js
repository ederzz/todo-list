
//reducer
export default function ( state, action ) {
	if( !state ){
		state = {
			todoDuty:[],
			show:'all'
		}
	}
	
	switch( action.type ){
		case 'INIT_DUTY':
			return {
				todoDuty: action.todoDuty,
				show: 'all'
			}
		case 'ADD_DUTY':		
			return {
				todoDuty: [...state.todoDuty,action.duty],
				show: state.show
			}
		case 'DELETE_DUTY':
		 	return {
		 		todoDuty: [
		 					...state.todoDuty.slice( 0, action.dutyIndex ),
		 					...state.todoDuty.slice( action.dutyIndex + 1 )
		 					],
		 		show: state.show
		 	}
		case 'UPDATE_DUTY':
			return {
				todoDuty: [
							...action.todoDuty
						],
				show: state.show
			}
		case 'DELETE_COMPLETED':
			return {
				todoDuty: [
							...action.todoDuty
						],
				show: state.show
			}
		case 'ALL':
			return {
				todoDuty:[...state.todoDuty],
				show: 'all'
			}
		case 'ACTIVE':
			return {
				todoDuty:[...state.todoDuty],
				show: 'active'
			}
		case 'COMPLETED':
			return {
				todoDuty:[...state.todoDuty],
				show: 'completed'
			}
		case 'NONE':
			return {
				todoDuty:[...state.todoDuty],
				show: action.show
			}
		default:
			return state;
	}
}


//action creator
//打开页面从localStorage取出所有任务初始化
export const initTodoDuty = ( todoDuty ) => {
	return {
		type: 'INIT_DUTY',
		todoDuty: todoDuty
	}
}
//添加某个任务
export const addTodoDuty = ( duty ) => {
	return {
		type: 'ADD_DUTY',
		duty: duty
	}
}
//删除某个任务
export const deleteTodoDuty = ( dutyIndex ) => {
	return {
		type: 'DELETE_DUTY',
		dutyIndex: dutyIndex
	}
}
//切换任务完成状态
export const updateTodoDuty = ( todoDuty ) => {
	return {
		type: 'UPDATE_DUTY',
		todoDuty: todoDuty
	}
}
//删除所有已完成任务
export const deleteCompleted = ( newTodoDuty ) => {
	return {
		type: 'DELETE_COMPLETED',
		todoDuty: newTodoDuty
	}
}


//显示哪种任务
export const showAll = () => {
	return {
		type: 'ALL',
	}
}
export const showActive = () => {
	return {
		type: 'ACTIVE',
	}
}
export const showCompleted = () => {
	return {
		type: 'COMPLETED',
	}
}
//折叠任务
export const showNone = ( status ) => {
	return {
		type: 'NONE',
		show: status
	}
}
