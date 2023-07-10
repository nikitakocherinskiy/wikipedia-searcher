import ResultList from './components/ResultList/ResultList'
import SearchBar from './components/SearchBar/SearchBar'
import styles from './App.module.css'

const App = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>Wikipedia Searcher</h1>
			<SearchBar />
			<ResultList />
		</div>
	)
}

export default App
