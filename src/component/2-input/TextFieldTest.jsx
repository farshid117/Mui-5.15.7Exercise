import { Box, Button, Card, CardContent, MenuItem, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const TextFieldTest = () => {
    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];
    return (
        <>
            {/* //todo: Basic TextField */}
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

            {/* //todo: Form Props */}
            <Typography variant="h4" color="initial" sx={{ direction: "rtl", fontWeight: "bold", textAlign: "right" }}>4-2: Form Props</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                <Card sx={{ maxWidth: 500, }}>

                    <CardContent sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
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

            {/* //todo: Multiline Prop */}
            <Typography variant="h4" color="initial" sx={{ direction: "rtl", fontWeight: "bold", textAlign: "right" }}>4-2: Form Props</Typography>
            <Box className="card p-4  w-75 m-auto my-4 align-items-center" >
                <Box className="card-body" >
                    <Box
                    
                        component="form"
                        sx={{
                            direction:"rtl",
                            '& > :not(style)': { m: 1, width: 250 },
                            
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            multiline
                            label="multiline"
                            maxRows={4}
                            helperText="maxRows={4}"

                        />
                        <TextField
                            multiline
                            label="multiline PlH"
                            placeholder="placeholder"
                            helperText="rows=unlimit😅"
                        />
                        <TextField
                            multiline
                            label="multiline defaultValue"
                            defaultValue="defaultValue"
                            rows={4}
                            helperText="rows={4}"
                        />
                    </Box>

                </Box>
            </Box>
            {/* //todo: Select Prop */}
            <Typography variant="h4" color="initial" sx={{ direction: "rtl", fontWeight: "bold", textAlign: "right" }}>4-3: select</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box className="card p-4 ">
                    <Box className="crad-body">
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: 350 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                select
                                label="انتخاب کنید"
                                defaultValue="EUR"
                                helperText="لطفا واحد پول خود را انتخاب کنید"
                            >
                                {currencies.map((currency) => (
                                    <MenuItem key={currency.value} value={currency.value}>
                                        {currency.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                select
                                label="Native select"
                                defaultValue="EUR"
                                SelectProps={{
                                    native: true,
                                }}
                                helperText="Please select your currency"
                            >
                                {currencies.map((currency) => (
                                    <option key={currency.value} value={currency.value}>
                                        {currency.label}
                                    </option>
                                ))}
                            </TextField>
                        </Box>
                    </Box>
                </Box>
            </Box>


            <Box sx={{ textAlign: "center", mt: 2 }}>
                <Button component={Link} to="/" variant='contained' color="success" >بازگشت به لیست</Button>
            </Box>
        </>
    );
}

export default TextFieldTest;
