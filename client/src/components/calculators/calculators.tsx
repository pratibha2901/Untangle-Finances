import * as React from "react";
import {useState} from "react";
import Box from '@mui/material/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Outlet, useLocation, useNavigate,useOutletContext } from "react-router";
import { IPO_CALCULATE_ROUTE,INCOME_TAX_CALCULATE_ROUTE,LOAN_CALCULATE_ROUTE } from "../navigation/routesConstant";
export const Calculators = () => {
  const location = useLocation();
  const CalculatorHomePage= ()=>{
    if(location.pathname === IPO_CALCULATE_ROUTE || location.pathname === INCOME_TAX_CALCULATE_ROUTE || location.pathname === LOAN_CALCULATE_ROUTE){
      return false;
    }else{
      return true;
    }
  }
  const navigate = useNavigate();
    const ipoCalculatorCard = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {"Ipo calculator"}
            </Typography>
            <Typography variant="h5" component="div">
             {"This calculator will compute IPO profit"}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {""}
            </Typography>
            <Typography variant="body2">
              {""}
              <br />
              {}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={()=>{
              
              navigate(IPO_CALCULATE_ROUTE,{replace:true, state: {history:location.pathname}})
              }} 
              size="small">{"Take me to calculator"}</Button>
          </CardActions>
        </React.Fragment>
      );
    const incomeTaxCalculatorCard = (
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {"Income tax calculator"}
          </Typography>
          <Typography variant="h5" component="div">
           {"This calculator will compute income tax on CTC"}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {""}
          </Typography>
          <Typography variant="body2">
            {""}
            <br />
            {}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={()=>{
            
            navigate(INCOME_TAX_CALCULATE_ROUTE,{replace:true, state: {history:location.pathname}})
            }} 
            size="small">{"Take me to calculator"}</Button>
        </CardActions>
      </React.Fragment>
    );
    const loanCalculatorCard = (
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {"Loan calculator"}
          </Typography>
          <Typography variant="h5" component="div">
           {"This calculator will compute your monthly EMI and interest"}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {""}
          </Typography>
          <Typography variant="body2">
            {""}
            <br />
            {}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={()=>{
           
            navigate(LOAN_CALCULATE_ROUTE,{replace:true, state: {history:location.pathname}})
            }} 
            size="small">{"Take me to calculator"}</Button>
        </CardActions>
      </React.Fragment>
    );
    return (
      <>
      {CalculatorHomePage() === true?
        (<>
            <Grid item xs={4} md={3} paddingLeft={"10px"} paddingRight={"10px"}>
            <Card variant={"outlined"}   >
            {ipoCalculatorCard}
            </Card>
            </Grid>
            <Grid item xs={4} md={3} paddingLeft={"10px"} paddingRight={"10px"}>
            <Card variant={"outlined"}>
            {incomeTaxCalculatorCard}
            </Card>
            </Grid>
            <Grid item xs={4} md={3}  paddingLeft={"10px"} paddingRight={"10px"}>
            <Card variant={"outlined"}>
            {loanCalculatorCard}
            </Card>
            </Grid>
        </>):
        (<Outlet />)
      }
      </>
    )
    
}

