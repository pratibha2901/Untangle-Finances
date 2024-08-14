import * as React from "react";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CalculateIcon from '@mui/icons-material/Calculate';
import {HOME_ROUTE,ABOUT_ROUTE,CONTACT_ROUTE,CALCULATE_ROUTE} from './routesConstant';


interface MainMenuProps  {
    title:string,
    icon?: JSX.Element,
    route?:string
}

export const mainMenu : MainMenuProps[]= [
    {
        title:"Home",
        icon: <HomeIcon/>,
        route: HOME_ROUTE
    },
    {
        title:"About",
        icon: <InfoIcon/>,
        route:ABOUT_ROUTE
    },
    {
        title:"Contact Us",
        icon: <ContactPhoneIcon/>,
        route:CONTACT_ROUTE
    },
    {
        title:"Calculators",
        icon: <CalculateIcon/>,
        route:CALCULATE_ROUTE
    }
]