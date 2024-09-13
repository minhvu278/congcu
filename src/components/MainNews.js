import React, { useState, useEffect } from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MainNews = () => {
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/news')
            .then(response => {
                setNewsItems(response.data);
            })
            .catch(error => {
                console.error('Có lỗi xảy ra khi lấy dữ liệu:', error);
            });
    }, []);

    return (
        <Grid container spacing={2}>
            {newsItems.map((item, index) => (
                <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
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
    );
};

export default MainNews;
