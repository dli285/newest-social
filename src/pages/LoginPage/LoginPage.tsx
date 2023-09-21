import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "../../components/Container/Container";
import { useNavigate } from "react-router-dom";
import { AppInput } from "../../components/AppInput/AppInput";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { RegistrationInfo } from "../../components/RegistartionInfo/RegistrationInfo";
import { AppButton } from "../../components/AppButton/AppButton";
import * as yup from 'yup'
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { RootState } from "../../store/store";
import { changeUser } from "../../store/userSlice";
import { User } from "../../store/userSlice";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import { useGetUserQuery, useLoginUserMutation } from "../../store/api/authApi";
import "./LoginPage.scss"


const mockUser: User = {
  user_id:999,
  name: 'Pavel',
  mail: 'test@test.com',
  phone_number: '933214567',
  reg_data: new Date().toISOString(),
  city: 'Tashkent'
}

interface LoginForm {
  useremail: string
  userpassword: string
}

const loginFormSchema = yup.object({
  useremail: yup.string().required('Обязательное поле'),
  userpassword: yup.string().required('Обязательное поле'),
})
  
  export const LoginPage = () => {
const user = useSelector((state: RootState) => state.userSlice.user)
const dispatch = useDispatch()
const navigate = useNavigate()

const [loginUser, {data: userData}]= useLoginUserMutation()

useEffect(() => {
  if (userData?.user_id) {
    navigate('/profile')
  }
}, [userData, navigate])

const onLoginSubmit = async (data: LoginForm) => {
  try{
    const res = await loginUser({
      email:  data.useremail,
      password: data.userpassword
    })
    
    return res
  } catch(err){
    throw err
  }
}

// const onLoginClick = () => {
//   dispatch(changeUser(mockUser))
// }

// useEffect (() => {
//   console.log('user', user)
//   if (user?.user_id) {
//     navigate('/profile')
//   }

// }, [user, navigate])

    const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({
      resolver: yupResolver(loginFormSchema),
      defaultValues: {
        useremail: '',
        userpassword: ''
      }
    })
    console.log("ERRORS: ", errors);

    // const onLoginSubmit = (data: any) => console.log(data)

    return (
      <Container>
    <div className="LoginPage">
    <AppHeader type="h1" headerText="Авторизация"/>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
      <Controller name="useremail"
            control={control}
            render={({ field }) => <AppInput
              type="email"
              inputPlaceholder="Email"
              isError={errors.useremail ? true : false}
              errorText={errors.useremail?.message}
              {...field} />} />
          <Controller name="userpassword"
            control={control}
            render={({ field }) => <AppInput
              type="password"
              inputPlaceholder="Пароль"
              isError={errors.userpassword ? true : false}
              errorText={errors.userpassword?.message}
              {...field} />} />
        <AppButton 
          isDisabled={!!Object.keys(errors).length} 
          type="button" 
          buttonText="Войти"
        />
      </form>
      <a href="/forgot">Забыли пароль?</a>
      <RegistrationInfo SpanText="У вас нету аккаунта?"/>
    </div>
    </Container>
  );
};
