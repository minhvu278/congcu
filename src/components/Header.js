import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    InputBase,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, Notifications as NotificationsIcon, Menu as MenuIcon, Home as HomeIcon, Close as CloseIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    border: `1px solid ${alpha(theme.palette.common.black, 0.25)}`,
    padding: theme.spacing(0.5),
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF', // Màu trắng cho biểu tượng tìm kiếm
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    // color: 'inherit',
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    color: '#FFFFFF', // Màu trắng cho văn bản tìm kiếm
}));

const categories = [
    'Công nghệ', 'Ứng dụng', 'Hệ thống', 'Game - Trò chơi', 'iPhone', 'Android', 'Linux',
    'Nền tảng Web', 'Đồng hồ thông minh', 'Chụp ảnh - Quay phim', 'macOS', 'Phần cứng',
    'Thủ thuật SEO', 'Kiến thức cơ bản', 'Raspberry Pi', 'Dịch vụ ngân hàng',
];

const Header = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const theme = useTheme();
    const isTabletOrBelow = useMediaQuery(theme.breakpoints.down('md'));

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#388E3C', borderBottom: '1px solid #2E7D32' }}>
                <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo */}
                    <Box display="flex" alignItems="center">
                        <img src="/path/to/logo.png" alt="Logo" style={{ height: '40px', marginRight: '20px' }} />
                    </Box>

                    {/* Thanh tìm kiếm */}
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Tìm kiếm…"
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{ fontSize: '14px' }}
                        />
                    </Search>

                    {isTabletOrBelow ? (
                        <IconButton edge="end" color="inherit" onClick={handleOpenDialog}>
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box display="flex" alignItems="center">
                            <IconButton color="inherit">
                                <NotificationsIcon />
                            </IconButton>
                            <Button color="inherit" sx={{ fontSize: '14px', textTransform: 'none' }}>Đăng nhập</Button>
                        </Box>
                    )}
                </Toolbar>

                {!isTabletOrBelow && (
                    <Toolbar component="nav" variant="dense" sx={{ justifyContent: 'center', borderTop: '1px solid #2E7D32', minHeight: '48px' }}>
                        <Button component={Link} to="/" startIcon={<HomeIcon />} sx={{ fontSize: '14px', textTransform: 'none', color: '#FFFFFF' }}>Home</Button>
                        <Button component={Link} to="/technology" sx={{ fontSize: '14px', textTransform: 'none', color: '#FFFFFF' }}>Công nghệ</Button>
                        <Button sx={{ fontSize: '14px', textTransform: 'none', color: '#FFFFFF' }}>Windows</Button>
                        <Button sx={{ fontSize: '14px', textTransform: 'none', color: '#FFFFFF' }}>Học CNTT</Button>
                        <Button sx={{ fontSize: '14px', textTransform: 'none', color: '#FFFFFF' }}>Download</Button>
                        <Button sx={{ fontSize: '14px', textTransform: 'none', color: '#FFFFFF' }}>Tiện ích</Button>
                        <Button sx={{ fontSize: '14px', textTransform: 'none', color: '#FFFFFF' }}>Khoa học</Button>
                        <Button sx={{ fontSize: '14px', textTransform: 'none', color: '#FFFFFF' }}>Làng CN</Button>
                        <Button sx={{ fontSize: '14px', textTransform: 'none', color: '#FFFFFF' }}>Ứng dụng</Button>
                        <Box sx={{ flexGrow: 1 }} />
                        <Button
                            sx={{ fontSize: '14px', textTransform: 'none', display: 'flex', alignItems: 'center', color: '#FFFFFF' }}
                            onClick={handleOpenDialog}
                        >
                            Tất cả
                            <MenuIcon sx={{ marginLeft: '5px' }} />
                        </Button>
                    </Toolbar>
                )}
            </AppBar>

            {/* Popup Dialog */}
            <Dialog
                fullScreen={isTabletOrBelow}
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="full-screen-dialog-title"
            >
                <DialogTitle id="full-screen-dialog-title">
                    Menu Thể Loại
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleCloseDialog}
                        aria-label="close"
                        sx={{ position: 'absolute', right: 16, top: 16 }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <List>
                                {categories.slice(0, Math.ceil(categories.length / 3)).map((category, index) => (
                                    <ListItem button key={index}>
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={category} />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <List>
                                {categories.slice(Math.ceil(categories.length / 3), Math.ceil(categories.length * 2 / 3)).map((category, index) => (
                                    <ListItem button key={index}>
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={category} />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <List>
                                {categories.slice(Math.ceil(categories.length * 2 / 3), categories.length).map((category, index) => (
                                    <ListItem button key={index}>
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={category} />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Header;
