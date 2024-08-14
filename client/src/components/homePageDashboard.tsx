import * as React from "react";
import { Route, Routes, Outlet } from "react-router";
import IconButton from '@mui/joy/IconButton';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CustomDrawer from "./../components/navigation/mainNavigation";
import { AppBar, Divider, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import './../../styles/homePageDashboard.css'
import DrawerHeader from "./navigation/mainNavigation";
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from "@emotion/react";


interface HomePageDashboardProps {
   title: String
}

export function HomePageDashboard(props: HomePageDashboardProps) {
   const theme = useTheme();
   const [open, setOpen] = React.useState(false);
   return (
      <>
        <Grid container>
            <AppBar position="relative">
               <Toolbar>
                  <IconButton onClick={() => {
                     if (open) {
                        setOpen(false);
                     } else {
                        setOpen(true)
                     }
                  }
                  }>
                     <MenuOpenIcon />
                  </IconButton>
               </Toolbar>
            </AppBar>

        </Grid>
        <DrawerHeader open={open} setOpen={setOpen} />
         <Grid className="main-content open" container>
            
               <Outlet />
            
         </Grid>
         </>
     
   )
}
