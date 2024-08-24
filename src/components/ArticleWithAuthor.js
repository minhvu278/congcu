import React from 'react';
import { Box, Typography, Grid, Avatar, Card, CardMedia, CardContent } from '@mui/material';

const articles = [
    {
        title: 'Stt hay cho ngày cuối tuần',
        image: 'https://via.placeholder.com/600x400',
        author: 'PP',
        time: '7 giờ',
        description: 'Lời chúc cuối tuần hài hước sau đây sẽ giúp bạn và bạn bè xả stress...',
    },
    {
        title: 'Hướng dẫn viết ghi chú địa điểm trên Apple Maps',
        image: 'https://via.placeholder.com/600x400',
        author: 'Nguyễn Trang',
        time: '7 giờ',
        description: 'Ứng dụng Apple Maps trên iOS 18 đã được cập nhật một số tính năng...',
    },
    {
        title: 'Samsung Galaxy Ring không thể sửa chữa được, "hỏng là vứt"',
        image: 'https://via.placeholder.com/600x400',
        author: 'Phạm Hải',
        time: '8 giờ',
        description: 'Có vẻ như đây là một xu hướng mới nổi trong thế giới công nghệ...',
    },
    {
        title: 'Cách thêm nhạc vào trang cá nhân Instagram',
        image: 'https://via.placeholder.com/600x400',
        author: 'Nguyễn Trang',
        time: '8 giờ',
        description: 'Instagram đang triển khai tính năng mới cho phép bạn thêm nhạc...',
    },
];

const ArticleWithAuthor = () => {
    return (
        <Grid container spacing={2}>
            {articles.map((article, index) => (
                <Grid item xs={12} key={index}>
                    <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 160 }}
                            image={article.image}
                            alt={article.title}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h6">
                                    {article.title}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                    <Avatar sx={{ width: 24, height: 24, mr: 1 }}>{article.author.charAt(0)}</Avatar>
                                    <Typography variant="body2" color="text.secondary" component="div">
                                        {article.author}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" component="div" sx={{ ml: 2 }}>
                                        {article.time}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary" component="div" sx={{ mt: 1 }}>
                                    {article.description}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ArticleWithAuthor;
