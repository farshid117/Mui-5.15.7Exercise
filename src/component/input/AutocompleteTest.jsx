import React from 'react';
import { Box, Button, Autocomplete, TextField, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { top100Films } from '../../asset/top100Films';
/* 
Autocomplete went with two scenarious: 
 1: combo-box :predifined set of allowed value
 2: freeSolo : arbitary value
 */
const AutoCompleteTest = () => {
    return (
        <>
            <Stack gap={3} textAlign="center">
                <h1>This is AutoCompleteTest component</h1>
                <Autocomplete
                    multiple
                    checkboxes
                    disablePortal
                    freeSolo
                    id="combo-box-demo"
                    options={top100Films.map(film => film.year)}
                    sx={{ width: 300, margin: "0 auto" }}
                    renderInput={(params) => <TextField {...params} label="فیلم را انتخاب کنید" />}
                />

                <Box>
                    <Button component={Link} to="/" variant='contained' color="success" >بازگشت به لیست</Button>

                </Box>
            </Stack>

        </>
    );
}

export default AutoCompleteTest;
