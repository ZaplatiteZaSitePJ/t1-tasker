export interface CardInfoProps {
	title: string;
	content: string;
	optional: React.ReactNode;
	visability?: "default" | "hovered";
}

export interface CardProps {
	topPanel: React.ReactNode;
	bottomPanel: React.ReactNode;
	contentPanel: CardInfoProps;
}
