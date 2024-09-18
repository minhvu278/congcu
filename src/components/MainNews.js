import React, { useState, useEffect } from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, CardActionArea, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MainNews = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        loadNews(currentPage);
    }, [currentPage]);

    const loadNews = (page) => {
        axios.get(`http://localhost:8000/api/news?page=${page}`)
            .then(response => {
                const newNews = response.data.data; // Lấy dữ liệu từ API
                setNewsItems(prevNewsItems => [...prevNewsItems, ...newNews]);
                if (response.data.current_page >= response.data.last_page) {
                    setHasMore(false);
                }
            })
            .catch(error => {
                console.error('Có lỗi xảy ra khi lấy dữ liệu:', error);
            });
    };

    const loadMoreNews = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    return (
        <Box>
            <Grid container spacing={2}>
                {newsItems.map((item) => (
                    <Grid item xs={12} sm={6} md={6} lg={6} key={item.id}>
                        <Card>
                            <CardActionArea component={Link} to={`/news/${item.slug}`}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.image || 'https://via.placeholder.com/600x400'}
                                    alt={item.title}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        sx={{
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            WebkitLineClamp: 2,
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {hasMore && (
                <Box textAlign="center" mt={4}>
                    <Button variant="contained" onClick={loadMoreNews}>
                        Xem thêm
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default MainNews;
