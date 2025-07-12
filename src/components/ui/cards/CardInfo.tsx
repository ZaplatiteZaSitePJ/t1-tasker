import React from "react";
import { Card, CardContent } from "@mui/material";

export default function CardInfo() {
	return (
		<Card sx={{ width: "fit-content", gap: "0.5rem" }}>
			<CardContent>
				<h5>Заголовок</h5>
				<h6>
					Это описание карточки. Здесь можно разместить краткий текст.
				</h6>
			</CardContent>
		</Card>
	);
}
