import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
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
            <Typography variant="h4" color="initial" sx={{ direction: "rtl", fontWeight: "bold", textAlign: "right" }}>4-2: Form Props</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                <Card sx={{ maxWidth: 500, }}>

                    <CardContent sx={{display:"flex",flexWrap:"wrap", gap:2, justifyContent:"center"}}>
                        <TextField
                            required
                            label="نام"
                            defaultValue="نام خود را وارد کنید"
                        />
                        <TextField
                            disabled
                            label="Disabled"
                            defaultValue="Hello World"
                        />
                        <TextField
                            label="پسورد"
                            type="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            label="فقط خواندنی"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </CardContent>

                </Card>

            </Box>


            <Box sx={{ textAlign: "center", mt: 2 }}>
                <Button component={Link} to="/" variant='contained' color="success" >بازگشت به لیست</Button>
            </Box>
        </>
    );
}

export default TextFieldTest;
