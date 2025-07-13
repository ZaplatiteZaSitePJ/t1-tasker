import { type FC } from "react";
import { Card, CardContent, Divider } from "@mui/material";
import type { CardInfoProps } from "./Card.interface";
import styles from "./CardInfo.module.scss";
import cn from "classnames";

const CardInfo: FC<CardInfoProps> = ({
	title,
	content,
	optional,
	visability = "default",
}) => {
	return (
		<Card
			sx={{
				maxWidth: "20rem",
				minWidth: "5rem",
				background: "transparent",
				padding: "0rem 0rem",
			}}
		>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "fit-content",
					gap: "0.5rem",
					padding: "0.5rem 2rem 0.5rem 2rem",
				}}
				className={styles.cardContent}
			>
				<h3 className={styles.title}>{title}</h3>
				<div
					className={cn(styles.additionalContainer, {
						[styles.hovered]: visability === "hovered",
					})}
				>
					<Divider orientation="horizontal" flexItem />

					<p className={styles.description}>{content}</p>
					{optional}
				</div>
			</CardContent>
		</Card>
	);
};

export default CardInfo;
