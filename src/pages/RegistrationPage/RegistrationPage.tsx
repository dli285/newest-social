import React from "react";
import './RegistartionPage.scss'
import { Container } from "../../components/Container/Container";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { AppInput } from "../../components/AppInput/AppInput";

export const RegistartionPage = () => {
    return (
      <Container>
      <div className="LoginPage">
      <AppHeader type="h1" headerText="Регистрация"/>
        <form action="#">
          <AppInput type="email" inputPlaceholder="Email"/>
          <AppInput type="password" inputPlaceholder="Пароль" />
          <button>Войти</button>
        </form>
        <a href="/">Уже зарегистрированы? Войдите в приложение.</a>
      </div>
      </Container>
    );
  };