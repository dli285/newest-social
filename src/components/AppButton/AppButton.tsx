import React from "react"
import { ThemeButton } from "./AppButton.style"
import { isDisabled } from "@testing-library/user-event/dist/utils"

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    buttonText: string
    isError?: boolean
    isDisabled: boolean
    type: 'submit' | 'button'
}

export const AppButton = ({ buttonText, isDisabled, type, ...props}: AppButtonProps) => {
    return (
        <ThemeButton 
        type={type}
        disabled={isDisabled} 
        {...props}
        >
         {buttonText}
        </ThemeButton>
    )
}