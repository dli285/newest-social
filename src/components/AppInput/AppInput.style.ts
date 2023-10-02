import { styled } from "styled-components";

type StyledInput = {
    $isError?:boolean
}

export const ThemeInput = styled.input<StyledInput>`
    display: block;
    width: 100%;
    margin-bottom: ${(props) => props.$isError ? '8px' : '20px'};
    border: 2px solid ${(props) => props.theme.colors.disabledBgc};
    background-color: transparent;

    &:last-child {
      margin-bottom: 40px;
    }

    &:is(:hover, :focus) {
      border-color: ${(props) => props.$isError ? 
        props.theme.colors.red : 
        props.theme.colors.disabledBgc};
    }

    ${(props) => props.$isError && `
        border-color: ${props.theme.colors.red}
    `}
`

export const ThemeInputError = styled.span<StyledInput>`
display: block;
margin: 0 0 20px;
${(props) => props.$isError && `
    color: ${props.theme.colors.red}
`}
`