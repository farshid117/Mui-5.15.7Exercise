import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AutoCompleteTest = () => {
    return (
        <>
            <Box textAlign="center">
                <h1>this is AutoCompleteTest component</h1>
                <Button component={Link} to="/" variant='contained' color="success" >بازگشت به لیست</Button>

            </Box>

        </>
    );
}

export default AutoCompleteTest;
