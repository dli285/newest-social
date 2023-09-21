import React from "react";
import './RegistartionPage.scss'
import { Container } from "../../components/Container/Container";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import * as yup from 'yup'
import { AppInput } from "../../components/AppInput/AppInput";
import { AppButton } from "../../components/AppButton/AppButton";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { RegistrationInfo } from "../../components/RegistartionInfo/RegistrationInfo";
import { yupResolver } from '@hookform/resolvers/yup'
import { useAddUserMutation } from "../../store/api/authApi";

interface RegistrationForm {
  username: string
  userphone: string
  userpassword: string
  useremail: string
  city: string
}

const registartionFormSchema = yup.object({
  username: yup.string().required('Обязательное поле'),
  userphone: yup.string().required('Обязательное поле'),
  userpassword: yup.string().required('Обязательное поле'),
  useremail: yup.string().required('Обязательное поле'),
  city: yup.string().required('Обязательное поле'),
})

export const RegistartionPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<RegistrationForm>({
    resolver: yupResolver(registartionFormSchema),
    defaultValues: {
      username: '',
      userphone: '',
      userpassword: '',
      useremail:'',
      city:''
    }
  })

  console.log("ERRORS: ", errors);

  const [registerUser] = useAddUserMutation()

  const onRegistrationSubmit = (data: any) => {
    registerUser({
      email: data.useremail,
      name: data.username,
      phone_number: data.userphone,
      password: data.userpassword,
      user_city: data.city
    })
  }

  return (
    <Container>
      <div className="LoginPage">
        <AppHeader type="h1" headerText="Регистрация" />
        <form onSubmit={handleSubmit(onRegistrationSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => <AppInput
              type="text"
              inputPlaceholder="Имя фамилия"
              isError={errors.username ? true : false}
              errorText={errors.username?.message}
              {...field} />} />
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
              isError={errors.userpassword ? true : false}
              errorText={errors.userpassword?.message}
              {...field} />} />
            <Controller name="useremail"
            control={control}
            render={({ field }) => <AppInput 
              type="email" 
              inputPlaceholder="Email"
              isError={errors.useremail ? true : false}
              errorText={errors.useremail?.message}
              {...field} />} />
            <Controller name="city"
            control={control}
            render={({ field }) => <AppInput 
              type="city" 
              inputPlaceholder="City"
              isError={errors.city ? true : false}
              errorText={errors.city?.message}
              {...field} />} />
          <AppButton isDisabled={!!Object.keys(errors).length} type="submit" buttonText="Зарегестрироваться" />
        </form>
        <RegistrationInfo SpanText="У вас есть аккаунт?"/>
      </div>
    </Container>
  );
};