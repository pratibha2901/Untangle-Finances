import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Drawer from '@mui/material/Drawer';
import { mainMenu } from './mainMenu';
import { useLocation, useNavigate } from 'react-router';

const drawerWidth = 240;









export default function DrawerHeader({open,setOpen}:any) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleMenuClick = (obj:any) =>{
    navigate(obj.route,{replace:true,  state: {history:location.pathname}});
  }
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const drawerList = <Box sx={{ width: 250 }} role="presentation"  onClick={toggleDrawer(false)}>
  <List>
    {mainMenu.map((obj, index) => (
      <ListItem key={obj.title} disablePadding>
        <ListItemButton onClick={()=>handleMenuClick(obj)}>
          <ListItemIcon>
            {obj.icon}
          </ListItemIcon>
          <ListItemText primary={obj.title} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
  
</Box>;

  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
       {drawerList}
    </Drawer>
    
     
      
    
  );
}
