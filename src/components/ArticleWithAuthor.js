import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Avatar, Card, CardMedia, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TitleTypography = styled(Typography)(({ theme }) => ({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: 2,
    textOverflow: 'ellipsis',
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
    mt: 1,
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));

const ArticleWithAuthor = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalArticles, setTotalArticles] = useState(0);
    const articlesPerPage = 6;

    useEffect(() => {
        loadArticles(currentPage);
    }, [currentPage]);

    const loadArticles = (page) => {
        axios.get(`http://localhost:8000/api/articles?page=${page}&limit=${articlesPerPage}`)
            .then(response => {
                const { articles: newArticles, total } = response.data;
                setArticles(prevArticles => [...prevArticles, ...newArticles]);
                setTotalArticles(total);
            })
            .catch(error => {
                console.error('Có lỗi xảy ra khi lấy dữ liệu:', error);
            });
    };

    const loadMoreArticles = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    return (
        <Box>
            <Grid container spacing={2}>
                {articles.map((article, index) => (
                    <Grid item xs={12} key={index}>
                        <Card sx={{ display: 'flex' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: { xs: 100, sm: 160 }, height: 'auto' }}
                                image={article.image || 'https://via.placeholder.com/600x400'}
                                alt={article.title}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <TitleTypography component={Link} to={`/article/${article.slug}`} variant="h6">
                                        {article.title}
                                    </TitleTypography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: { xs: 'flex-start', sm: 'center' },
                                            mt: 1,
                                            justifyContent: 'space-between',
                                            width: '100%',
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar sx={{ width: 24, height: 24, mr: 1 }}>
                                                {article.user?.name?.charAt(0) || 'A'}
                                            </Avatar>
                                            <Typography variant="body2" color="text.secondary" component="div">
                                                {article.user?.name || 'Unknown'}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            component="div"
                                            sx={{ mt: { xs: 0.5, sm: 0 }, textAlign: { xs: 'left', sm: 'right' } }}
                                        >
                                            {new Date(article.created_at).toLocaleString()}
                                        </Typography>
                                    </Box>
                                    <DescriptionTypography variant="body2" color="text.secondary">
                                        {article.excerpt}
                                    </DescriptionTypography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Nút "Xem thêm" */}
            {articles.length < totalArticles && (
                <Box textAlign="center" mt={4}>
                    <Button variant="contained" onClick={loadMoreArticles}>
                        Xem thêm
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default ArticleWithAuthor;
