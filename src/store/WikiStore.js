import { makeAutoObservable } from 'mobx'
import { getArticles } from '../service/wikiService'
import { fromPromise } from 'mobx-utils'

class WikiStore {
	articles = []
	searchQuery = ''

	constructor() {
		makeAutoObservable(this)
	}

	setArticlesAction = () => {
		this.articles = fromPromise(getArticles(this.searchQuery))
	}

	setSearchQuery = (query) => {
		this.searchQuery = query
	}
}

export default new WikiStore()
