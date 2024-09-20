import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, CardMedia, Container } from '@mui/material';
import axios from 'axios';
import {useParams} from "react-router-dom";

const apiUrl = process.env.REACT_APP_CONG_CU_API_URL;

const ArticleDetails = () => {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            axios.get(`${apiUrl}/articles/${slug}`)
                .then(response => {
                    setArticle(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Có lỗi xảy ra khi lấy dữ liệu:', error);
                    setLoading(false);
                });
        }
    }, [slug]);

    if (loading) {
        return <Typography variant="h4">Đang tải...</Typography>;
    }

    if (!article) {
        return <Typography variant="h4">Bài viết không tồn tại</Typography>;
    }

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h3" gutterBottom>{article.title}</Typography>
            <CardMedia
                component="img"
                height="400"
                image={article.image || 'https://via.placeholder.com/600x400'}
                alt={article.title}
            />

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Avatar sx={{ mr: 2 }}>{article.user?.name.charAt(0) || 'A'}</Avatar>
                <Typography variant="body1" color="text.secondary">{article.user?.name || 'Unknown'}</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ ml: 2 }}>
                    {new Date(article.created_at).toLocaleString()}
                </Typography>
            </Box>

            <Typography variant="body1" sx={{ mt: 4 }} dangerouslySetInnerHTML={{ __html: article.content }} />
        </Container>
    );
};

export default ArticleDetails;
