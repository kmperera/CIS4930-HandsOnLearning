import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from './Homepage/Homepage';
import Excercises from './Exercises/Excercises'
import Evaluations from './Evaluations/Evaluations'
import StayConnected from './StayConnected/StayConnected'
import Useful from './Useful/Useful' 

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "home",
    element: <Homepage/>,
  },
  {
    path: "exercises",
    element: <Excercises/>,
  },
  {
    path: "evaluations",
    element: <Evaluations/>,
  },
  {
    path: "stayconnected",
    element: <StayConnected/>,
  },
  {
    path: "useful",
    element: <Useful/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <RouterProvider router = {router} />
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
