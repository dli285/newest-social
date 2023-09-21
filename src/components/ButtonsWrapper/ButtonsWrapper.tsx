import React from "react";

type ButtonsWrapperProps = {
    children: React.ReactNode
}

export const ButtonsWrapper = ({ children}: ButtonsWrapperProps) => {
    return (
        <div className="buttons-wrapper">
            {children}
        </div>
    )
}