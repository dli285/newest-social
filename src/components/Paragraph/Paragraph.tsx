import React from "react";
import './Paragraph.scss'

type ParagraphProps = {
    ParagraphText: string
}

export const Paragraph = ({ ParagraphText }: ParagraphProps) => {
    return (
        <p>{ParagraphText}</p>
    )
}