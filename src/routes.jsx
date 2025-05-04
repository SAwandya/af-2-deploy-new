import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HpmePage";
import CountryDetailPage from "./pages/CountryDetailPage";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import SignInPage from "./pages/SignInPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/countries/:countryName",
        element: <CountryDetailPage />,
      },
    ],
  },

  // {
  //   path: "/signup",
  //   element: <Register />,
  // },

  {
    path: "/sign-in",
    element: <SignInPage />,
  },
]);

export default router;
