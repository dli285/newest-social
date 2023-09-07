import React from "react";
import { ThemeInput, ThemeInputError } from "./AppInput.style";

type  AppInputProps = {
    type: 'tel' | 'password' | 'email' | 'text'
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
