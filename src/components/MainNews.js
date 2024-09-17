import React, { useState, useEffect } from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, CardActionArea, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MainNews = () => {
    const [newsItems, setNewsItems] = useState([]); // Chứa tất cả các bài viết
    const [visibleNews, setVisibleNews] = useState([]); // Chứa các bài viết hiển thị
    const [currentPage, setCurrentPage] = useState(1); // Quản lý số trang hiện tại
    const itemsPerPage = 6; // Số lượng bài viết hiển thị mỗi lần

    useEffect(() => {
        axios.get('http://localhost:8000/api/news')
            .then(response => {
                setNewsItems(response.data); // Lưu tất cả bài viết vào state
                setVisibleNews(response.data.slice(0, itemsPerPage)); // Hiển thị 6 bài đầu tiên
            })
            .catch(error => {
                console.error('Có lỗi xảy ra khi lấy dữ liệu:', error);
            });
    }, []);

    // Hàm xử lý khi bấm "Xem thêm"
    const loadMore = () => {
        const nextPage = currentPage + 1;
        const startIndex = currentPage * itemsPerPage;
        const newVisibleItems = newsItems.slice(startIndex, startIndex + itemsPerPage);

        setVisibleNews([...visibleNews, ...newVisibleItems]); // Cập nhật bài viết hiển thị
        setCurrentPage(nextPage); // Cập nhật số trang
    };

    return (
        <Box>
            <Grid container spacing={2}>
                {visibleNews.map((item, index) => (
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

            {/* Nút "Xem thêm" */}
            {visibleNews.length < newsItems.length && (
                <Box textAlign="center" mt={4}>
                    <Button variant="contained" onClick={loadMore}>
                        Xem thêm
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default MainNews;
