import { Link } from 'react-router-dom';
import { Box, Button, Stack } from '@mui/material';
import React from 'react';

const ButtonTest = () => {
    return (
        <>
            <Box textAlign="center">
                <h1>This is Button Component</h1>
                <Stack direction="column" spacing={2} justifyContent="center" mb={3} sx={{bgcolor:"farshid.light"}}>
                  <Box sx={{display:"flex", justifyContent:"center", gap:1}}>
                        <Button variant="text">Text</Button> {/* default variant is text */}
                        <Button variant="contained">Contained</Button>
                        <Button variant="outlined">Outlined</Button>
                        <Button href="#" variant="contained" color='secondary'>link contained Btn</Button>
                  </Box>
                  <Box>
                    <Button variant='contained' color='warning' onClick={()=> alert("Clicked")}>controled Btn</Button>
                  </Box>
                </Stack>
                <Box>
                    <Button component={Link} to="/" variant='contained' color="success" >بازگشت به لیست</Button>

                </Box>

            </Box>

        </>
    );
}

export default ButtonTest;
