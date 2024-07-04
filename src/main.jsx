import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home.jsx';
import ProfileCreate from './pages/profileCreate.jsx';
import Homepage from './pages/homepage.jsx';
const router = createBrowserRouter({
  path: "/vite-react-router",
  element: <App />,
  children: [{
    path: "/vite-react-reouter/",
    element: <Home />
  }, {
    path: "/vite-react-reouter/profilecreation",
    element: <ProfileCreate />
  }, {
    path: "/vite-react-reouter/homepage",
    element: <Homepage />
  },]
})
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
