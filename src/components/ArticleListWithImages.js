import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ArticleListWithImages = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const articlesPerPage = 6;

    useEffect(() => {
        loadArticles(currentPage);
    }, [currentPage]);

    const loadArticles = (page) => {
        axios.get(`http://localhost:8000/api/articles/titles-images?page=${page}&limit=${articlesPerPage}`)
            .then(response => {
                const newArticles = response.data.data;
                setArticles(prevArticles => [...prevArticles, ...newArticles]);
                if (response.data.current_page >= response.data.last_page) {
                    setHasMore(false);
                }
            })
            .catch(error => {
                console.error('Có lỗi xảy ra khi lấy dữ liệu:', error);
            });
    };

    const loadMoreArticles = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    return (
        <Box sx={{ marginTop: '20px' }}>
            <Typography variant="h6" gutterBottom>
                Cũ vẫn chất
            </Typography>
            <List>
                <Grid container spacing={2}>
                    {articles.map((article, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <ListItem alignItems="flex-start" button component={Link} to={`/article/${article.slug}`}>
                                <ListItemAvatar>
                                    <Avatar alt={article.title} src={article.image || 'https://via.placeholder.com/100'} />
                                </ListItemAvatar>
                                <ListItemText primary={article.title} />
                            </ListItem>
                        </Grid>
                    ))}
                </Grid>
            </List>

            {hasMore && (
                <Box textAlign="center" sx={{ marginTop: '20px' }}>
                    <Button variant="outlined" onClick={loadMoreArticles}>
                        Xem thêm
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default ArticleListWithImages;
