import { dispatch } from '~/store/store'
import PadawanApi from '~/actions/padawan-api'


const create = async (student) => {
	dispatch({
		type: 'CREATE_STUDENT_START',
		student
	})

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

const update = async (student) => {
	dispatch({
		type: 'UPDATE_STUDENT_START',
		student
	})

	var graph = `
		mutation {
			updateStudent ( _id: "${student._id}" name: "${student.name}" ) {
				_id,
				name
			}
		}
	`
	try {
		var data = await PadawanApi.sendGraph(graph)
		var action = {
			type: 'UPDATE_STUDENT_SUCCESS',
			student: data.updateStudent
		}
	} catch (err) {
		var action = {
			type: 'UPDATE_STUDENT_FAIL',
			student,
			error: err
		}
	}

	dispatch(action)
}

const _delete = async (_id) => {
	dispatch({
		type: 'DELETE_STUDENT_START',
		_id
	})

	var graph = `
		mutation {
			deleteStudent ( _id: "${_id}" ) {
				status
			}
		}
	`

	try {
		var data = await PadawanApi.sendGraph(graph)
	} catch (err) {
		dispatch({
			type: 'DELETE_STUDENT_FAIL',
			_id,
			error: err
		})
	}

	if (data.deleteStudent.status === 'DELETE_SUCCESS') {
		dispatch({
			type: 'DELETE_STUDENT_SUCCESS',
			_id
		})
	} else {
		dispatch({
			type: 'DELETE_STUDENT_FAIL',
			_id,
			error: JSON.stringify(data)
		})
	}

}

const fetchAll = async () => {
	dispatch({ type: 'FETCHING_STUDENTS_START' })
	
	var graph = `
		query {
			students {
				_id,
				name
			}
		}
	`
	try {
		var data = await PadawanApi.sendGraph(graph)
		var action = {
			type: 'FETCHING_STUDENTS_SUCCESS',
			students: data.students
		}
	} catch (err) {
		var action = {
			type: 'FETCHING_STUDENTS_FAIL',
			error: err
		}
	}
	
	dispatch(action)
}

const deleteAll = async () => {
	var graph = `
		mutation {
			deleteAllStudents {
				status
			}
		}
	`
	try {
		var data = await PadawanApi.sendGraph(graph)
	} catch (err) {
		throw 'Student.deleteAll error: ' + err
	}

	if (data.deleteAllStudents.status === 'DELETE_SUCCESS') {
		dispatch({ type: 'DELETE_ALL_STUDENTS' })
	} else {
		throw 'Student.deleteAll error, data: ' + JSON.stringify(data)
	}

}

export default { create, update, delete: _delete, fetchAll, deleteAll }