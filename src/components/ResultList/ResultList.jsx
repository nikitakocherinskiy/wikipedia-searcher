import WikiStore from '../../store/WikiStore'
import { observer } from 'mobx-react-lite'
import ResultItem from '../ResultItem/ResultItem'
import styles from './ResultList.module.css'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const ResultList = observer(() => {
	const { articles } = WikiStore

	// useEffect(() => {
	// 	getArticlesAction(searchQuery)
	// }, [])

	if (articles?.state === 'pending') {
		return (
			<div>
				<LoadingSpinner />
			</div>
		)
	}

	return (
		<div className={styles.container}>
			{articles?.state === 'fulfilled' &&
				articles.value.query.search.map((el) => (
					<ResultItem
						key={Math.floor(Math.random() * 10000000)}
						resultItem={el}
					/>
				))}
		</div>
	)
})

export default ResultList
