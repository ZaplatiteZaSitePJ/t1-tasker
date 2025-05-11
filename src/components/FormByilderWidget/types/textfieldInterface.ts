interface TextfieldInterface  {
    label: string,
    value: "text" | "numbers",
    minLenght: number | undefined,
    maxLenght: number | undefined
}

export type { TextfieldInterface };