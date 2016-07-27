export default (state = {}, action) => {
	switch (action.type) {
		case 'FETCHING_STUDENTS_START':

			return Object.assign( state, { fetchingStudents: true } )

		case 'FETCHING_STUDENTS_SUCCESS':

			return Object.assign(state, { fetchingStudents: false } )

		case 'FETCHING_STUDENTS_FAIL':
		
			return Object.assign( state, { fetchingStudents: false } )

		default:
			return state
	}
}