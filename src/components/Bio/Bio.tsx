import React from "react";

type BioProps = {
    children: React.ReactNode
}

export const Bio = ({ children }: BioProps) => {
    return (
        <div className="bio">{children}</div>
    )
}
