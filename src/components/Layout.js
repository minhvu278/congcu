import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <Box display="flex" minHeight="100vh">
            <Banner />
            <Box display="flex" flexDirection="column" flexGrow={1}>
                <Box sx={{ flexGrow: 1, padding: 0 }}>
                    <Header />
                    <Box sx={{ flexGrow: 1, padding: 0 }}>
                        <Outlet />
                    </Box>
                    <Footer />
                </Box>
            </Box>
            <Banner />
        </Box>
    );
};

export default Layout;
