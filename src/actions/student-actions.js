import { dispatch } from '~/store/store'
import PadawanApi from '~/actions/padawan-api'


const create = async (student) => {
	dispatch({
		type: 'CREATE_STUDENT_START',
		student
	})

	console.log('student', student)
	var graph = `
		mutation {
			createStudent ( name: "${student.name}" ) {
				_id,
				name
			}
		}
	`
	try {
		var data = await PadawanApi.sendGraph(graph)
		Object.assign(student, data.createStudent)
		var action = {
			type: 'CREATE_STUDENT_SUCCESS',
			student
		}
	} catch (err) {
		var action = {
			type: 'CREATE_STUDENT_FAIL',
			student
		}
	}

	dispatch(action)

}

export default { create }