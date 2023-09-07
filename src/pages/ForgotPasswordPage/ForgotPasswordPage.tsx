import React from "react";
import './ForgotPasswordPage.scss'
import { Container } from "../../components/Container/Container";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { AppInput } from "../../components/AppInput/AppInput";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { AppButton } from "../../components/AppButton/AppButton";
import * as yup from 'yup'
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'

interface RegistrationForm {
  userphone: string
}

const registartionFormSchema = yup.object({
  userphone: yup.string().required('Обязательное поле'),
})
    
    export const ForgotPasswordPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<RegistrationForm>({
    resolver: yupResolver(registartionFormSchema),
    defaultValues: {
      userphone: '',
    }
  })
  console.log("ERRORS: ", errors);

  const ForgotSubmit = (data: any) => console.log(data)
    return (
        <Container>
        <div className="LoginPage">
        <AppHeader type="h1" headerText="Забыли пароль?"/>
          <form onSubmit={handleSubmit(ForgotSubmit)}>
            <Paragraph ParagraphText="Укажите свой номер телефона, чтобы получить код для сброса пароля."/>
            <Controller name="userphone"
            control={control}
            render={({ field }) => <AppInput
              type="text"
              inputPlaceholder="Номер телефона"
              isError={errors.userphone ? true : false}
              errorText={errors.userphone?.message}
              {...field} />} />
            <AppButton isDisabled={!!Object.keys(errors).length} type="submit" buttonText="Отправить"/>
          </form>
        </div>
        </Container>
    )
}