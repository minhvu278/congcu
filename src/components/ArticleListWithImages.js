import React from 'react';
import { Box, Typography, Grid, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_CONG_CU_API_URL;

const fetchArticles = async ({ pageParam = 1 }) => {
    const { data } = await axios.get(`${apiUrl}/articles/titles-images?page=${pageParam}&limit=6`);
    return data;
};

const ArticleListWithImages = () => {
    const {
        data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['articles', 'titles-images'],
        queryFn: fetchArticles,
        getNextPageParam: (lastPage) => {
            if (lastPage.current_page < lastPage.last_page) {
                return lastPage.current_page + 1;
            }
            return undefined;
        },
    });

    if (isLoading) {
        return <Typography>Loading...</Typography>;
    }

    if (isError) {
        return <Typography>Có lỗi xảy ra khi lấy dữ liệu.</Typography>;
    }

    return (
        <Box sx={{ marginTop: '20px' }}>
            <Typography variant="h6" gutterBottom>
                Cũ vẫn chất
            </Typography>
            <List>
                <Grid container spacing={2}>
                    {data.pages.map((page) =>
                        page.data.map((article, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <ListItem alignItems="flex-start" button component={Link} to={`/article/${article.slug}`}>
                                    <ListItemAvatar>
                                        <Avatar alt={article.title} src={article.image || 'https://via.placeholder.com/100'} />
                                    </ListItemAvatar>
                                    <ListItemText primary={article.title} />
                                </ListItem>
                            </Grid>
                        ))
                    )}
                </Grid>
            </List>

            {hasNextPage && (
                <Box textAlign="center" sx={{ marginTop: '20px' }}>
                    <Button variant="outlined" onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
                        {isFetchingNextPage ? 'Đang tải...' : 'Xem thêm'}
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default ArticleListWithImages;
