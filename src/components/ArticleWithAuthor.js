import React from 'react';
import { Box, Typography, Grid, Avatar, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';

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

// Custom styles for title
const TitleTypography = styled(Typography)(({ theme }) => ({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: 2,
    textOverflow: 'ellipsis',
}));

// Custom styles for description
const DescriptionTypography = styled(Typography)(({ theme }) => ({
    mt: 1,
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));

const ArticleWithAuthor = () => {
    return (
        <Grid container spacing={2}>
            {articles.map((article, index) => (
                <Grid item xs={12} key={index}>
                    <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: { xs: 100, sm: 160 }, height: 'auto' }} // Responsive image width and height
                            image={article.image}
                            alt={article.title}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <TitleTypography component="div" variant="h6">
                                    {article.title}
                                </TitleTypography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: { xs: 'flex-start', sm: 'center' }, // Align items responsive
                                        mt: 1,
                                        justifyContent: 'space-between', // Giãn cách giữa author và time
                                        width: '100%', // Đảm bảo full width để space-between hoạt động
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar sx={{ width: 24, height: 24, mr: 1 }}>{article.author.charAt(0)}</Avatar>
                                        <Typography variant="body2" color="text.secondary" component="div">
                                            {article.author}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        component="div"
                                        sx={{ mt: { xs: 0.5, sm: 0 }, textAlign: { xs: 'left', sm: 'right' } }} // Responsive margin
                                    >
                                        {article.time}
                                    </Typography>
                                </Box>
                                <DescriptionTypography variant="body2" color="text.secondary">
                                    {article.description}
                                </DescriptionTypography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ArticleWithAuthor;
