/* eslint-disable react/prop-types */
import styles from './WikiLink.module.css'

const WikiLink = ({ link, text }) => {
	return (
		<>
			<a href={link} className={styles.link}>
				{text}
			</a>
		</>
	)
}

export default WikiLink
