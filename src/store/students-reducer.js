import uuid from 'uuid'

export default (state = [], action) => {
	switch (action.type) {
		case 'CREATE_STUDENT_START':
			var { student } = action
			student.temp_id = uuid.v4()
			student.showSpinner = true
			return [ ...state, student ]

		case 'CREATE_STUDENT_SUCCESS':
			var { student } = action
			return state.map((s) => {
				if (s.temp_id === student.temp_id) {
					var { _id, name } = student
					return { _id, name }
				}
				return s
			})

		case 'CREATE_STUDENT_FAIL':
			//todo

			return state


		case 'UPDATE_STUDENT_START':
			return state.map(s => {
				if (s._id === action.student._id) {
					s.showSpinner = true
				}
				return s
			})

		case 'UPDATE_STUDENT_SUCCESS':
			return state.map(s => {
				if (s._id === action.student._id) {
					return action.student
				}
				return s
			})

		case 'UPDATE_STUDENT_FAIL':
			//todo
			return state

		case 'DELETE_STUDENT_START':
			var { _id } = action
			return state.map(s => {
				if (s._id === _id) {
					s.showSpinner = true
				}
				return s
			})

		case 'DELETE_STUDENT_SUCCESS':
			return state.filter(s => s._id !== action._id)

		case 'DELETE_STUDENT_FAIL':
			//todo
			return state


		case 'FETCHING_STUDENTS_SUCCESS':
			return action.students

		case 'DELETE_ALL_STUDENTS_SUCCESS':
			return []

		default:
			return state
	}
}