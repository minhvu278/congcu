import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_CONG_CU_API_URL;

const fetchRecommendedItems = async () => {
    const { data } = await axios.get(`${apiUrl}/articles/featured`);
    return data;
};

const Recommended = () => {
    const { data: recommendedItems, isLoading, isError } = useQuery({
        queryKey: ['recommendedItems'],
        queryFn: fetchRecommendedItems,
    });

    if (isLoading) {
        return <Typography>Loading...</Typography>;
    }

    if (isError) {
        return <Typography>Có lỗi xảy ra khi lấy dữ liệu.</Typography>;
    }

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Được đề cử
            </Typography>
            <List>
                {recommendedItems.map((item, index) => (
                    <React.Fragment key={item.id || index}>
                        <ListItem alignItems="flex-start" button component={Link} to={`/article/${item.slug}`}>
                            <ListItemAvatar>
                                <Avatar alt={item.title} src={item.image || 'https://via.placeholder.com/50'} />
                            </ListItemAvatar>
                            <ListItemText primary={item.title} />
                        </ListItem>
                        {index < recommendedItems.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );
};

export default Recommended;
