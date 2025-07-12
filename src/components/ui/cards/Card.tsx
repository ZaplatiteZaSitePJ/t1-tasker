import type { FC } from "react";
import CardInfo from "./CardInfo";
import styles from "./Task.module.scss";
import type { CardProps } from "./Card.interface";

const Card: FC<CardProps> = ({ topPanel, bottomPanel, contentPanel }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__topInfo}>{topPanel}</div>
            <div className={styles.card__contentPanel}>
                <CardInfo {...contentPanel}/>
            </div>
            <div className={styles.card__bottomInfo}>{bottomPanel}</div>
        </div>
    );
};

export default Card
