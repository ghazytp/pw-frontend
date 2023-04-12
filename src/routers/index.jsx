import { createBrowserRouter, redirect } from "react-router-dom";
import BasePage from "../components/BasePage";
import AboutPage from "../components/AboutPage";
import WorkPage from "../components/WorkPage";
import ContactPage from "../components/ContactPage";
import LoginPage from "../components/LoginPage";
import CmsPage from "../components/CmsPage";

import { onAuthStateChanged, getAuth } from "firebase/auth";
import app from "../firebase";


const router = createBrowserRouter([
  {
    path: "*",
    element: <div>NOT FOUND</div>,
  },
  {
    path: "/mylogin",
    element: <LoginPage />,
  },
  {
    path: "/cms",
    element: <CmsPage />,
  },
  {
    element: <BasePage />,
    children: [
      {
        path: "/",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/work",
        element: <WorkPage />,
      },
    ],
  },
]);

export default router;
