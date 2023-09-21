import React from "react";

type BioInfoItemProperty = {
    description: string
    info: string
}

export const BioInfoItem = ({description, info}: BioInfoItemProperty) => {
    return (
        <div>
            <p className="main__text education">{description}</p>
            <p className="secondary__text education">
              {info}
            </p>
        </div>
        )
}