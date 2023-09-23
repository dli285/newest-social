import React from "react";
import { ThemeInput, ThemeInputError } from "./AppInput.style";

interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement>  {
    type: 'tel' | 'password' | 'email' | 'text' | 'city'
    inputPlaceholder: string
    isError?: boolean
    errorText?: string
}

export const AppInput = ({ inputPlaceholder, type, isError, errorText, ...props }: AppInputProps) => {
    return (
    <>
        < ThemeInput 
            type={type} 
            placeholder={inputPlaceholder} 
            isError={isError} 
            {...props}
        />
        {isError &&
        <ThemeInputError isError={isError}>
            {errorText}
        </ThemeInputError>
        }
    </>
    )
}
