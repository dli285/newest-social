import { styled } from "styled-components";

type RegistrationComponent = {
    isError?:boolean
}
export const ThemeRegistration = styled.input<RegistrationComponent>`
.registration {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid ${(props) => props.theme.colors.lightGray};
  
    span {
      display: inline-block;
      font-size: 16px;
      margin-bottom: 40px;
  
      a {
        display: inline;
        color: ${(props) => props.theme.colors.primeColor};
      }
    }
}
`
