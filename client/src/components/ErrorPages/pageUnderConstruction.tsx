import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Icon, Typography } from "@mui/material";
import {PAGE_UNDER_CONSTRUCTION_HEADER,PAGE_UNDER_CONSTRUCTION_BODY} from "../../utils/constants";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from "@mui/joy";
import underConstructionImg  from "./../../images/under-construction-4010445_1920.jpg"
import { useLocation, useNavigate } from "react-router";
import {useOutletContext} from "react-router-dom";

export const PageUnderConstruction = (props:any) => {
  const location = useLocation();
  const navigate = useNavigate();
  
    return (
        <Grid container >
            <Grid item xs ={2} md={2} xl = {2}>
              <IconButton onClick={()=>{
                
                navigate(location.state.history,{replace:true,state:{history:location.pathname}})
                }}>
              <ArrowBackIcon/>
              </IconButton>
            </Grid>
            <Grid item xs ={4} md={8} xl= {10} alignContent={"center"}>
          
          <img
          
           src={underConstructionImg}
           alt={PAGE_UNDER_CONSTRUCTION_HEADER}
           loading="lazy"
           width={"700px"}
           height={"400px"}
           style={{marginLeft:"200px"}}
           
      />
          
          </Grid>
        </Grid>
      );
}