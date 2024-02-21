import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet-async';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button } from '@mui/material';

import "./Main.css"

const Main = () => {
    return (
        <>
            <Helmet>
                <title>تمرین کاموننت‌های آماده Mui</title>
            </Helmet>
            <Box id="input" sx={{color:"#fff"}} >
                <Grid container spacing={2} >
                    <Grid xs={12} md={6} >
                        <h3>کامپوننت‌های Input : </h3>
                        <Box component="ul">
                            <li>
                                <Box marginBottom={1}>
                                    <Button component={Link} to="/input/autocomplete" variant="contained" color="primary"  > Autocopmplete </Button>
                                </Box>
                            </li>
                            <li>
                                <Box marginBottom={1}>
                                    <Button component={Link} to="/input/button" variant="contained" color="secondary"  > Button & Button Group </Button>
                                </Box>
                            </li>
                            <li>
                                <Box marginBottom={1}>
                                    <Button component={Link} to="/input/textfield" variant="contained" color="success"  > TextField </Button>
                                </Box>
                            </li>
                            <li>
                                <Box marginBottom={1}>
                                    <Button component={Link} to="" variant="contained" color="warning"  > Floating Action Button </Button>
                                </Box>
                            </li>
                            <li>
                                <Box marginBottom={1}>
                                    <Button component={Link} to="" variant="contained" color="warning"  > Floating Action Button </Button>
                                </Box>
                            </li>
                        </Box>

                    </Grid>
                    <Grid xs={12} md={6} >
                        <h3>کامپوننت‌های Data Display : </h3>
                        <Box component="ul">
                            <li>
                                <Box marginBottom={1}>
                                    <Button  component={Link} to="" variant="contained" color="primary"  > Avatar </Button>
                                </Box>
                            </li>
                            <li>
                                <Box marginBottom={1}>
                                    <Button component={Link} to="" variant="contained" color="secondary"  > Badge </Button>
                                </Box>
                            </li>
                            <li>
                                <Box marginBottom={1}>
                                    <Button component={Link} to="" variant="contained" color="success"  > Chip </Button>
                                </Box>
                            </li>
                            <li>
                                <Box marginBottom={1}>
                                    <Button component={Link} to="" variant="contained" color="warning"  > Divider </Button>
                                </Box>
                            </li>
                            <li>
                                <Box marginBottom={1}>
                                    <Button component={Link} to="" variant="contained" color="info"  > List </Button>
                                </Box>
                            </li>
                            <li>
                                <Box marginBottom={1}>
                                    <Button component={Link} to="" variant="contained" color="error"  > Table </Button>
                                </Box>
                            </li>
                            <li>
                                <Box marginBottom={1}>
                                    <Button component={Link} to="" variant="contained" color="primary"  > Tooltip </Button>
                                </Box>
                            </li>
                            <li>

                                <Box marginBottom={1}>
                                    <Button component={Link} to="" variant="contained" color="secondary"  > Typogeraphy </Button>
                                </Box>
                            </li>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Main;
