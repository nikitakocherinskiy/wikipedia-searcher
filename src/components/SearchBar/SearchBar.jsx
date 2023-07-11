import { useState } from 'react'
import WikiStore from '../../store/WikiStore'
import styles from './SearchBar.module.css'
import WikiLink from '../WikiLink/WikiLink'
import { observer } from 'mobx-react-lite'

const SearchBar = observer(() => {
	const [query, setQuery] = useState('')
	const { setSearchQuery, setArticlesAction } = WikiStore

	const handleChange = (e) => {
		setQuery(e.target.value)
	}

	const handleKeyDown = (event) => {
		if (event.key === 'Enter' && event.target.value !== '') {
			setSearchQuery(event.target.value)
			setArticlesAction()
		}
	}

	return (
		<div>
			<input
				className={styles.input}
				type='text'
				value={query}
				onChange={(event) => handleChange(event)}
				onKeyDown={handleKeyDown}
			/>
			<WikiLink
				link={'https://en.wikipedia.org/wiki/Special:Random'}
				text={'Random'}
			/>
		</div>
	)
})

export default SearchBar
