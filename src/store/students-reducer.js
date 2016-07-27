import uuid from 'uuid'

export default (state = [], action) => {
	switch (action.type) {
		case 'CREATE_STUDENT_START':
			var { student } = action
			student.temp_id = uuid.v1()
			student.pendingCreation = true
			return [ ...state, student ]

		case 'CREATE_STUDENT_SUCCESS':
			var { student } = action
			return state.map((s) => {
				if (s.temp_id && s.temp_id === student.temp_id) {
					var { _id, name } = student
					return { _id, name }
				} else {
					return s
				}
			})
			
		default:
			return state
	}
}