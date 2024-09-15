import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ArticleListWithImages = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/articles/titles-images')
            .then(response => {
                setArticles(response.data);
            })
            .catch(error => {
                console.error('Có lỗi xảy ra khi lấy dữ liệu:', error);
            });
    }, []);

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
            <Box textAlign="center" sx={{ marginTop: '20px' }}>
                <Button variant="outlined">Xem thêm</Button>
            </Box>
        </Box>
    );
};

export default ArticleListWithImages;
