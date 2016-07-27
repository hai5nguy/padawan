import request from 'superagent'

const PADAWAN_API_URL = 'http://localhost:9000/graphql'

const sendGraph = async (graph) => {
	return new Promise((resolve, reject) => {
		request.post(PADAWAN_API_URL)
			.set({ 'Content-Type': 'application/graphql' })
			.send(graph)
			.end((err, res) => {
				if (err) {
					throw 'Padawan Api error: unable to send graph' + graph
				} else {
					resolve(res.body.data)
				}
			})
	})
}

export default { sendGraph }