import React from 'react';
import { Box, Typography, Grid, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

const articles = [
    {
        title: 'Cách thêm ngoại lệ trong Windows Defender trên Windows 10',
        image: 'https://via.placeholder.com/100',
    },
    {
        title: 'Giờ UTC là gì? Cách chuyển giờ UTC sang giờ Việt Nam',
        image: 'https://via.placeholder.com/100',
    },
    {
        title: 'Cách thêm điểm dừng tab trong Google Docs',
        image: 'https://via.placeholder.com/100',
    },
    {
        title: 'Hướng dẫn đặt xe trên Be, gọi xe ôm trên ứng dụng Be',
        image: 'https://via.placeholder.com/100',
    },
    {
        title: '12 bài văn về thầy cô hay và ý nghĩa nhất',
        image: 'https://via.placeholder.com/100',
    },
    {
        title: '10 ứng dụng chỉnh sửa video dễ dàng trên Android',
        image: 'https://via.placeholder.com/100',
    },
    {
        title: 'Code Fishing Simulator, code cơn sốt câu cá và cách nhập',
        image: 'https://via.placeholder.com/100',
    },
    {
        title: 'Sửa lỗi không mở được Windows Security trên Windows 11',
        image: 'https://via.placeholder.com/100',
    },
    {
        title: 'Phân biệt 12 loại khoai phổ biến tại Việt Nam',
        image: 'https://via.placeholder.com/100',
    },
    {
        title: 'Code Bản Năng Vô Cực 3D mới nhất và cách nhập code',
        image: 'https://via.placeholder.com/100',
    },
];

const ArticleListWithImages = () => {
    return (
        <Box sx={{ marginTop: '20px' }}>
            <Typography variant="h6" gutterBottom>
                Cũ vẫn chất
            </Typography>
            <List>
                <Grid container spacing={2}>
                    {articles.map((article, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt={article.title} src={article.image} />
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
