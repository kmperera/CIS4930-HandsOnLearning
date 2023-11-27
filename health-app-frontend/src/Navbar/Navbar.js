import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/joy/Typography';
import { useTheme, useMediaQuery } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



export default function Navbar() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 760);


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setIsMobileMenuOpen(true);
    };

    const handleMenuClose = () => {
        setIsMobileMenuOpen(false);
        setAnchorEl(null);
    };


    const menuItems = [
        { label: "Home", link: "/home" },
        { label: "Exercises", link: "/exercises" },
        { label: "Stay Connected", link: "/stayconnected" },
        { label: "Equipment & Applications", link: "/useful" },
        { label: "Evaluation", link: "/evaluations" },
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 760);
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <AppBar position="static">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2, backgroundColor: 'grey', fontFamily: 'Inter, sans-serif', }}>
                <Typography level="h5" component="div" sx={{ flexGrow: 1 }}>
                    NeuroNurture
                </Typography>
                {isMobile ? (
                    <>
                        <IconButton color='inherit' onClick={handleMenuOpen}>
                            <MenuIcon sx={{ color: 'white' }} />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={isMobileMenuOpen}
                            onClose={handleMenuClose}
                        >
                            {menuItems.map((item) => (
                                <MenuItem key={item.label} onClick={handleMenuClose}>
                                    <a href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>{item.label}</a>
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <a href="/home" style={linkStyle}>Home</a>
                        <a href="/exercises" style={linkStyle}>Exercises</a>
                        <a href="/stayconnected" style={linkStyle}>Stay Connected</a>
                        <a href="/useful" style={linkStyle}>Equipment & Applications</a>
                        <a href="/evaluations" style={linkStyle}>Evaluation</a>style={{ textDecoration: 'none', color: 'inherit' }}
                    </Box>
                )}
            </Box>
        </AppBar>
    )
}

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginRight: '20px', // Spacing between each link
    fontFamily: 'Inter, sans-serif', // Setting the font to Inter

    '&:hover': {
        color: 'grey' // Color on hover
    }
};
