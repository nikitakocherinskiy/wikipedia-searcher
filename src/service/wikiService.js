import axios from 'axios'

export const getArticles = async (query) => {
	return (
		await axios.get(
			`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&origin=*&format=json`
		)
	).data
}
