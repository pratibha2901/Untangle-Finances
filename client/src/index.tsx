import {createRoot} from "react-dom/client"
import React   from 'react';

import { RouterProvider,Navigate } from "react-router-dom";
import {mainRoutes} from "./../src/components/navigation/mainRoutes";
import { ThemeProvider } from "@emotion/react";
import {theme} from "./themes/mainTheme";

const root = createRoot(document.getElementById("UNTANGLE_FINANCES") as HTMLElement);
root.render(
    
      <RouterProvider router={mainRoutes} />
     
  );
  /*
   <ThemeProvider theme={theme}>
    </ThemeProvider>
    */