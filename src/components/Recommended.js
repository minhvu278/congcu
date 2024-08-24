import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const recommendedItems = [
    {
        title: 'Epic Games Store có đáng cài đặt không?',
        image: 'https://via.placeholder.com/50',
        link: '/recommended1',
    },
    {
        title: 'Tính năng ẩn này của Google Docs giúp Find & Replace mạnh mẽ hơn nhiều',
        image: 'https://via.placeholder.com/50',
        link: '/recommended2',
    },
    {
        title: 'Cách đo khoảng cách trên Google Maps',
        image: 'https://via.placeholder.com/50',
        link: '/recommended3',
    },
    {
        title: 'Anti-Ghosting là gì? Tại sao nó lại cần thiết trên bàn phím chơi game?',
        image: 'https://via.placeholder.com/50',
        link: '/recommended4',
    },
    {
        title: 'Zalo Mini App là gì? Cách đăng ký Zalo Mini App',
        image: 'https://via.placeholder.com/50',
        link: '/recommended5',
    },
];

const Recommended = () => {
    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Được đề cử
            </Typography>
            <List>
                {recommendedItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <ListItem alignItems="flex-start" button component={Link} to={item.link}>
                            <ListItemAvatar>
                                <Avatar alt={item.title} src={item.image} />
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
