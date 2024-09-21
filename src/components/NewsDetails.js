import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, CardMedia, Container } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_CONG_CU_API_URL;

const fetchNews = async (slug) => {
    const { data } = await axios.get(`${apiUrl}/news/${slug}`);
    return data;
};

const NewsDetails = () => {
    const { slug } = useParams();

    const { data: news, isLoading, isError } = useQuery({
        queryKey: ['news', slug],
        queryFn: () => fetchNews(slug),
        enabled: !!slug,
    });

    if (isLoading) {
        return <Typography variant="h4">Đang tải...</Typography>;
    }

    if (isError || !news) {
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
