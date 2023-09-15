import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function TopBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent" className='top-bar'>
                <Toolbar variant="dense">
                    <Typography sx={{ flexGrow: 1, fontSize: 14 }}>
                        <a href="tel:004812345678">+48 123 45 678</a> | <a href="mailto:support@ecommerce.com">support@ecommerce.com</a>
                    </Typography>
                    <Typography className='top-bar__slogan' sx={{ flexGrow: 1, fontWeight: 600, textTransform: 'capitalize' }}>
                        <Link to="/about">Amazing Shopping platform for everyone!</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box >
    );
}
