import { type FC } from "react";
import { Card, CardContent, Divider } from "@mui/material";
import type { CardInfoProps } from "./Card.interface";
import styles from "./CardInfo.module.scss";

const CardInfo: FC<CardInfoProps> = ({
	title,
	content,
	optional,
	visability = "default",
}) => {
	return (
		<Card
			sx={{
				maxWidth: "25rem",
				minWidth: "5rem",
				background: "transparent",
			}}
		>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "fit-content",
					gap: "0.5rem",
					padding: "0.5rem 2rem",
				}}
			>
				<h3 className={styles.title}>{title}</h3>
				<Divider orientation="horizontal" flexItem />
				<p className={styles.description}>{content}</p>
				<div
					style={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
						gap: "0.25rem",
					}}
				>
					{optional}
				</div>
			</CardContent>
		</Card>
	);
};

export default CardInfo;
