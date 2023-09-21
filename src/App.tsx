import React from "react";
import { Provider } from "react-redux";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import { RegistartionPage } from "./pages/RegistrationPage/RegistrationPage";
import { ThemeProvider } from "styled-components"
import { theme } from "./theme/theme";
import { store } from "./store/store";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<LoginPage/>
    },
    {
      path:'/main',
      element:<MainPage/>
    },
    {
      path:'/forgot',
      element:<ForgotPasswordPage />
    },
    {
      path:'/registration',
      element:<RegistartionPage />
    },
    {
      path:'/profile',
      element:<ProfilePage />
    },
  ])
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
