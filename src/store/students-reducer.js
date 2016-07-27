import uuid from 'uuid'

export default (state = [], action) => {
	switch (action.type) {
		case 'CREATE_STUDENT_START':
			var { student } = action
			student.temp_id = uuid.v4()
			student.pendingCreation = true
			return [ ...state, student ]

		case 'CREATE_STUDENT_SUCCESS':
			var { student } = action
			return state.map((s) => {
				if (s.temp_id && s.temp_id === student.temp_id) {
					var { _id, name } = student
					return { _id, name }
				}
				return s
			})

		case 'CREATE_STUDENT_FAIL':
			//todo

			return state

		case 'DELETE_STUDENT_START':
			var { _id } = action
			return state.map(s => {
				if (s._id === _id) {
					return Object.assign(s, { pendingDeletion: true })
				}
				return s
			})

		case 'DELETE_STUDENT_SUCCESS':
			return state.filter(s => s._id !== action._id)

		case 'DELETE_STUDENT_FAIL':
			
			return state


		case 'FETCHING_STUDENTS_SUCCESS':
			return action.students

		case 'DELETE_ALL_STUDENTS':
			return []

		default:
			return state
	}
}