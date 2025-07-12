export interface CardInfoProps {
    title: string,
    content: string,
    optional: React.ReactNode[]
}

export interface CardProps {
    topPanel: React.ReactNode,
    bottomPanel: React.ReactNode,
    contentPanel: CardInfoProps
}