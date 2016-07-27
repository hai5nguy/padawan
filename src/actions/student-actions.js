import { dispatch } from '~/store/store'
import PadawanApi from '~/actions/padawan-api'


const create = async () => {
	var graph = `
		mutation {
			createStudent ( name: "new student" ) {
				_id,
				name
			}
		}
	`
	try {
		var student = await PadawanApi.sendGraph(graph)
	} catch (err) {
		//handle error
	}

	console.log('student', student)
}

export default { create }