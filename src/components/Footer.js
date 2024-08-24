import { Box, Typography, Grid, Link } from '@mui/material';
import { Container } from '@mui/system';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#1B5E20', color: 'white', marginTop: '40px' }}>
            <Container maxWidth="xl" sx={{ p: 0 }}>
                <Grid container spacing={4} sx={{ py: 4 }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>About Us</Typography>
                        <Typography variant="body2">
                            minhvu278.com provides technology news, tutorials, and more.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>Quick Links</Typography>
                        <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
                            Home
                        </Link>
                        <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
                            Categories
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>Contact Us</Typography>
                        <Typography variant="body2">Email: info@minhvu278.com</Typography>
                    </Grid>
                </Grid>
                <Box textAlign="center" borderTop="1px solid #2E7D32" py={2}> {/* Đường viền trên màu xanh lá cây đậm */}
                    <Typography variant="body2">&copy; 2024 MinhVu278. All rights reserved.</Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
