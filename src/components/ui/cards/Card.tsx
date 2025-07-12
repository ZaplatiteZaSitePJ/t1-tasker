import CardInfo from "./CardInfo";
import styles from "./Task.module.scss";

export default function Card() {
	return (
		<div className={styles.card}>
			<div className={styles.card__topInfo}></div>
			<div className={styles.card__contentPanel}>
				<CardInfo />
			</div>
			<div className={styles.card__bottomInfo}></div>
		</div>
	);
}
