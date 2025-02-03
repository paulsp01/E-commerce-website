import React from 'react';
import { TrendingUp, SettingsCell, AttachMoney, AccountBox } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const salesData = [
  {
    stats: "245k",
    title: "Sales",
    color: "#E11D48",
    icon: <TrendingUp sx={{ fontSize: "1.7rem" }} />
  },
  {
    stats: "24.5k",
    title: "Customers",
    color: "#16A34A",
    icon: <AccountBox sx={{ fontSize: "1.7rem" }} />
  },
  {
    stats: "1.54k",
    title: "Products",
    color: "#EA580C",
    icon: <SettingsCell sx={{ fontSize: "1.7rem" }} />
  },
  {
    stats: "88k",
    title: "Revenue",
    color: "#0EA5E9",
    icon: <AttachMoney sx={{ fontSize: "1.7rem" }} />
  }
];

const renderState = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box sx={{
        display: "flex",
        alignItems: "center",
      }}>
        <Avatar variant="rounded" sx={{
          mr: 3,
          width: 44,
          height: 44,
          boxShadow: 3,
          color: "white",
          backgroundColor:`${ item.color}`
        }}>
          {item.icon}
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant='caption'>{item.title}</Typography>
          <Typography variant='h6'>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
};

const MonthlyOverview = () => {
  return (
    <Card sx={{bgcolor:"#190d2b",color:"white"}}>
      <CardHeader title="Monthly Overview"
        action={
          <IconButton size='small'>
            <MoreVertIcon />
          </IconButton>
        }
        subheader={
          <Typography variant='body2'>
            <Box component="span" sx={{ fontWeight: 600,  }}>
              Total: 48.5% growth{" "}
            </Box>
            😎 this month
          </Typography>
        }

        titleTypographyProps={{
            sx: {
                mb:2.5,
                lineHeight:"2rem !important",
                letterSpacing:".15px !important",

            }
        }}
      />
     <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
       <Grid container spacing={[5,0]}>
        {renderState()}

       </Grid>

     </CardContent>
    </Card>
  );
};

export default MonthlyOverview;