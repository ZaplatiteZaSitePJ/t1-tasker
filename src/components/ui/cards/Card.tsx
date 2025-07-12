import type { FC } from "react";
import CardInfo from "./CardInfo";
import styles from "./Card.module.scss";
import type { CardProps } from "./Card.interface";

const Card: FC<CardProps> = ({ topPanel, bottomPanel, contentPanel }) => {
	return (
		<button className={styles.card} type="button">
			<div className={styles.card__topInfo}>{topPanel}</div>
			<div className={styles.card__contentPanel}>
				<CardInfo {...contentPanel} />
			</div>
			<div className={styles.card__bottomInfo}>{bottomPanel}</div>
		</button>
	);
};

export default Card;
