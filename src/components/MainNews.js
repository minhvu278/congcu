import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Typography, Grid, Card, CardMedia, CardContent, CardActionArea, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_CONG_CU_API_URL;

const fetchNews = async ({ pageParam = 1 }) => {
    const { data } = await axios.get(`${apiUrl}/news?page=${pageParam}`);
    return data;
};

const MainNews = () => {
    const {
        data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['news'],
        queryFn: fetchNews,
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
        <Box>
            <Grid container spacing={2}>
                {data?.pages?.map((page) =>
                    page.data.map((item) => (
                        <Grid item xs={12} sm={6} md={6} lg={6} key={item.id}>
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
                                                minHeight: '3.2em',
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                )}
            </Grid>

            {hasNextPage && (
                <Box textAlign="center" mt={4}>
                    <Button
                        variant="contained"
                        onClick={() => fetchNextPage()}
                        disabled={isFetchingNextPage}
                    >
                        {isFetchingNextPage ? 'Đang tải...' : 'Xem thêm'}
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default MainNews;
