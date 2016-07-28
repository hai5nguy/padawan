export default (state = {}, action) => {
	switch (action.type) {
		case 'FETCHING_STUDENTS_START':
		case 'DELETE_ALL_STUDENTS_START':

			return Object.assign({}, state, { showLoading: true } )

		case 'FETCHING_STUDENTS_SUCCESS':
		case 'FETCHING_STUDENTS_FAIL':
		case 'DELETE_ALL_STUDENTS_SUCCESS':
		case 'DELETE_ALL_STUDENTS_FAIL':
		
			return Object.assign({}, state, { showLoading: false } )

		default:
			return state
	}
}