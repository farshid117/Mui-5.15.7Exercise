import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const TextFieldTest = () => {
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: 300 },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Box>


            <Box sx={{textAlign:"center", mt:2}}>
                <Button component={Link} to="/" variant='contained' color="success" >بازگشت به لیست</Button>
            </Box>
        </>
    );
}

export default TextFieldTest;
