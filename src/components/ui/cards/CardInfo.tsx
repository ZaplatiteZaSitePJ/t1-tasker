import { type FC } from "react";
import { Card, CardContent } from "@mui/material";
import type { CardInfoProps } from "./Card.interface";

const CardInfo:FC<CardInfoProps> = ({title, content, optional, visability="default"}) => {
	return (
		<Card sx={{ width: "fit-content", gap: "0.5rem" }}>
			<CardContent>
				<h5>{title}</h5>
				<h6>
					{content}
				</h6>
				<div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '0.25rem'}}>
					{...optional}
				</div>
			</CardContent>

		</Card>
	);
}

export default CardInfo