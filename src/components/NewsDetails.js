import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, CardMedia, Container } from '@mui/material';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_CONG_CU_API_URL;

const NewsDetails = () => {
    const { slug } = useParams();
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${apiUrl}/news/${slug}`)
            .then(response => {
                setNews(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Có lỗi xảy ra khi lấy dữ liệu:', error);
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return <Typography variant="h4">Đang tải...</Typography>;
    }

    if (!news) {
        return <Typography variant="h4">Tin tức không tồn tại</Typography>;
    }

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h3" gutterBottom>{news.title}</Typography>
            <CardMedia
                component="img"
                height="400"
                image={news.image || 'https://via.placeholder.com/600x400'}
                alt={news.title}
            />
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                {new Date(news.created_at).toLocaleString()}
            </Typography>

            <Typography variant="body1" sx={{ mt: 4 }}>
                {news.content}
            </Typography>
        </Container>
    );
};

export default NewsDetails;
