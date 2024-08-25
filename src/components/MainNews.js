import React from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const newsItems = [
    {
        title: 'Tàu vũ trụ đầu tiên bay ngang qua Mặt trăng - Trái đất',
        image: 'https://via.placeholder.com/600x400',
        link: '/article1',
    },
    {
        title: 'Đây là cách dễ nhất để cài đặt lại Windows 11 và khắc phục sự cố!',
        image: 'https://via.placeholder.com/600x400',
        link: '/article2',
    },
    {
        title: '10 vụ tai nạn hàng không khủng khiếp nhất mọi thời đại',
        image: 'https://via.placeholder.com/600x400',
        link: '/article3',
    },
    {
        title: 'Người dùng EU sẽ được tự do lựa chọn ứng dụng mặc định trên iOS 18',
        image: 'https://via.placeholder.com/600x400',
        link: '/article4',
    },
];

const MainNews = () => {
    return (
        <Grid container spacing={2}>
            {newsItems.map((item, index) => (
                <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                    <Card>
                        <CardActionArea component={Link} to={item.link}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.image}
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
