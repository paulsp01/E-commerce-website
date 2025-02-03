import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'


const TriangleImg=styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute",
})

const TrophyImg=styled("img")({
    right:36,
    bottom:20,
    height:100,
    position:"absolute"
})

const Achivment = () => {
  return (
    <Card  sx={{position:"relative" ,bgcolor:"#190d2b",color:"white"}}>
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing:".25px"}}>
                Shop With Zosh
            </Typography>
            <Typography variant='body2'>
                Congratulations 🥳
            </Typography>
            <Typography variant='h5' sx={{my:3.1}}>
                480.8k
            </Typography>
            <Button size='small' variant='contained'>View Sales</Button>

            <TriangleImg src=''/>
            <TrophyImg src="https://pngfile.net/public/uploads/preview/golden-award-cup-vector-png-117244189155j7s6qxu1d.png"/> 

        </CardContent>
    </Card>
  )
}

export default Achivment