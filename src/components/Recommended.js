import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recommended = () => {
    const [recommendedItems, setRecommendedItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/articles/featured')
            .then(response => {
                setRecommendedItems(response.data);
            })
            .catch(error => {
                console.error('Có lỗi xảy ra khi lấy dữ liệu:', error);
            });
    }, []);

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Được đề cử
            </Typography>
            <List>
                {recommendedItems.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <ListItem alignItems="flex-start" button component={Link} to={`/articles/${item.slug}`}>
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
