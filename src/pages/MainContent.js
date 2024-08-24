import React from 'react';
import { Box, Grid, Container, Typography, Card, CardMedia, CardContent } from '@mui/material';
import MainNews from "../components/MainNews";
import ArticleWithAuthor from "../components/ArticleWithAuthor";
import Recommended from "../components/Recommended";
import ArticleListWithImages from "../components/ArticleListWithImages";

const MainContent = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Box sx={{ marginTop: '20px' }}>
                        <MainNews />
                    </Box>

                    {/* Article with Author */}
                    <Box sx={{ marginTop: '20px' }}>
                        <ArticleWithAuthor />
                    </Box>

                    {/* Article List with Images */}
                    <Box sx={{ marginTop: '20px' }}>
                        <ArticleListWithImages />
                    </Box>
                </Grid>

                {/* Recommended Section */}
                <Grid item xs={12} md={4}>
                    <Box sx={{ marginTop: '20px' }}>
                        <Recommended />
                    </Box>

                    {/* Placeholder for an ad or promotional section */}
                    <Card sx={{ marginTop: '20px' }}>
                        <CardMedia
                            component="img"
                            image="https://via.placeholder.com/300x250.png?text=Ad+Placeholder"
                            alt="Ad Placeholder"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Đây là phần quảng cáo hoặc thông tin nổi bật
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MainContent;
