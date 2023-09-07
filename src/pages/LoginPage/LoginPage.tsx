import React from "react";
import "./LoginPage.scss";
import { Container } from "../../components/Container/Container";
import { AppInput } from "../../components/AppInput/AppInput";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { RegistrationInfo } from "../../components/RegistartionInfo/RegistrationInfo";
import { AppButton } from "../../components/AppButton/AppButton";
import * as yup from 'yup'
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'

interface RegistrationForm {
  userphone: string
  userpassword: string
}

const registartionFormSchema = yup.object({
  userphone: yup.string().required('Обязательное поле'),
  userpassword: yup.string().required('Обязательное поле'),
})
  
  export const LoginPage = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<RegistrationForm>({
      resolver: yupResolver(registartionFormSchema),
      defaultValues: {
        userphone: '',
        userpassword: ''
      }
    })
    console.log("ERRORS: ", errors);

    const onLoginSubmit = (data: any) => console.log(data)

    return (
    <Container>
    <div className="LoginPage">
    <AppHeader type="h1" headerText="Авторизация"/>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
      <Controller name="userphone"
            control={control}
            render={({ field }) => <AppInput
              type="text"
              inputPlaceholder="Номер телефона"
              isError={errors.userphone ? true : false}
              errorText={errors.userphone?.message}
              {...field} />} />
          <Controller name="userpassword"
            control={control}
            render={({ field }) => <AppInput
              type="password"
              inputPlaceholder="Пароль"
              isError={errors.userphone ? true : false}
              errorText={errors.userphone?.message}
              {...field} />} />
        <AppButton isDisabled={!!Object.keys(errors).length} type="submit" buttonText="Войти"/>
      </form>
      <a href="/forgot">Забыли пароль?</a>
      <RegistrationInfo SpanText="У вас нету аккаунта?"/>
    </div>
    </Container>
  );
};
