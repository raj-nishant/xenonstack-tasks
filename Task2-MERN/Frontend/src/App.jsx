import React, { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage.js";

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const App = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/registration",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <RegistrationPage />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <LoginPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default App;
