/* eslint-disable react/prop-types */
import styles from './ResultItem.module.css'
import WikiLink from '../WikiLink/WikiLink'

const ResultItem = ({ resultItem }) => {
	return (
		<div className={styles.item}>
			<h2 className={styles.header}>{resultItem.title}</h2>
			<p
				dangerouslySetInnerHTML={{ __html: `${resultItem.snippet}...` }}
				className={styles.content}
			></p>
			<WikiLink
				link={`https://en.wikipedia.org/wiki/${resultItem.title}`}
				text={'Continue Reading'}
			/>
		</div>
	)
}

export default ResultItem
