import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import React from 'react';

const ButtonTest = () => {
    return (
        <>
            <Box textAlign="center">
                <h1>this is button component</h1>
                <Button component={Link} to="/" variant='contained' color="success" >بازگشت به لیست</Button>

            </Box>

        </>
    );
}

export default ButtonTest;
