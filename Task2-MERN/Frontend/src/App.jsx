import React, { Component, Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";

import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const About = lazy(() => {
  return import("./components/About");
});

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
    ],
  },
]);

export default App;
