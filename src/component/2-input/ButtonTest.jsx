import { Link } from 'react-router-dom';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const ButtonTest = () => {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <h1>This is Button Component</h1>
                <Stack direction="column" spacing={3} alignItems="center" mb={3} sx={{ bgcolor: "farshid.light", p: 4, borderRadius: 2 }}>
                    <Box sx={{ display: "flex", gap: 2 }} >
                        <Button variant="text">Text</Button> {/* default variant is text */}
                        <Button variant="contained">Contained</Button>
                        <Button variant="outlined">Outlined</Button>
                        <Button href="#" variant="contained" color='ochre'>link contained Btn</Button>
                    </Box>
                    <Box>
                        <Button variant='contained' color='warning' onClick={() => alert("Clicked")}>controled Btn</Button>
                    </Box>
                    {/* //! Button With Icon & Label */}
                    <Box>
                        <Button variant='contained' color='secondary' endIcon={<DeleteIcon />} sx={{ mr: 1 }} onClick={() => alert("Clicked")}>Icon Btn</Button>
                        <Button variant='contained' color='primary' startIcon={<SendIcon />} onClick={() => alert("Clicked")}>Icon Btn</Button>
                        <Typography component="span" variant='h6' dir='rtl' sx={{ textAlign: "end", pl: 2, direction: "rtl" }}>Button With Icon & Label :</Typography>
                    </Box>
                    {/* //! Icon Buton */}
                    <Box sx={{textAlign:"left",  width: "100%" }}>
                        <Stack direction="row" alignItems="center" justifyContent="end" spacing={1} sx={{ width: "100%",}}>
                            <IconButton color="primary">
                                <DeleteIcon fontSize='large' />
                            </IconButton>
                            <IconButton disabled >
                                <DeleteIcon />
                            </IconButton>
                            <IconButton color="secondary" >
                                <AlarmIcon />
                            </IconButton>
                            <IconButton color="salamon" >
                                <AddShoppingCartIcon fontSize='large' sx={{ fontWeight: "bold" }} />
                            </IconButton>
                            <Typography component="span" variant='h6' sx={{ textAlign: "end", pl: 2, direction: "rtl" }}>Icon Button :</Typography>
                        </Stack>
                    </Box>
                    {/* //! File Upload Buton */ }
                    <Box sx={{width:"100%", textAlign:"right"}}>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload file
                            <VisuallyHiddenInput type="file" />
                        </Button>
                       
                        <Typography component="span" variant='h6' dir='rtl' sx={{ textAlign: "end", pl: 2, direction: "rtl" }}>File Upload :</Typography>
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
