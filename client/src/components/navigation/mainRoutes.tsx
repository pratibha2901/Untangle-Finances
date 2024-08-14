import {createRoot} from "react-dom/client"
import React ,{ useState }  from 'react';
import { Route, RouteObject, Routes } from "react-router";
import { BrowserRouter, RouterProvider,Navigate, createBrowserRouter } from "react-router-dom";

import {Contact } from "./../../components/contact";
import { HomePageDashboard } from "./../../components/homePageDashboard";
import { About } from "./../../components/about";
import { Calculators } from "../calculators/calculators";
import IpoCalculator from "./../calculators/ipoCalculator";
import {PageUnderConstruction} from "./../ErrorPages/pageUnderConstruction";
import {HOME_ROUTE,ABOUT, CONTACT, CALCULATE, IPO_CALCULATE, INCOME_TAX_CALCULATE, LOAN_CALCULATE} from "./routesConstant";


const routeObjects:RouteObject[]=[
    {
        path : "/",
        element : <Navigate to = {HOME_ROUTE} replace={true}/>
    },
    {
        path: HOME_ROUTE,
         element : <HomePageDashboard title={"This is home page"}/>,
         children:[
            {
               path: ABOUT,
               element: <PageUnderConstruction/>
            },
            {
                path: CONTACT,
                element: <PageUnderConstruction/>
            },
            {
                path: CALCULATE,
                element: <Calculators />,
                children:[
                    {
                        path: IPO_CALCULATE,
                        element:<PageUnderConstruction/>
                    },
                    {
                        path: INCOME_TAX_CALCULATE,
                        element:<PageUnderConstruction/>
                    },
                    {
                        path: LOAN_CALCULATE,
                        element:<PageUnderConstruction/>
                    }
                ]

            }
            

         ]
    }
];
export const mainRoutes = createBrowserRouter(routeObjects, {basename : "/UntangleFinances"});