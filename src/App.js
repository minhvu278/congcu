import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from './components/Layout';
import MainContent from './pages/MainContent';
import Technology from "./pages/Technology";

// Tạo theme với màu chủ đạo là xanh lá cây
const theme = createTheme({
    palette: {
        primary: {
            main: '#4CAF50', // Màu xanh lá cây chủ đạo
            dark: '#388E3C', // Màu xanh lá cây đậm hơn
            light: '#C8E6C9', // Màu xanh lá cây nhạt hơn
        },
        secondary: {
            main: '#8BC34A', // Màu phụ (có thể là một tông xanh lá cây nhạt khác)
        },
        background: {
            default: '#F1F8E9', // Màu nền nhạt
        },
        text: {
            primary: '#1B5E20', // Màu văn bản chính (màu xanh lá cây đậm)
            secondary: '#4E342E', // Màu văn bản phụ (màu nâu đậm hoặc đen)
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif', // Chọn font phù hợp cho toàn bộ trang web
        h1: {
            fontSize: '2rem',
            fontWeight: 700,
            color: '#1B5E20', // Màu xanh lá cây đậm
        },
        h2: {
            fontSize: '1.75rem',
            fontWeight: 600,
            color: '#1B5E20', // Màu xanh lá cây đậm
        },
        body1: {
            fontSize: '1rem',
            color: '#4E342E', // Màu nâu đậm cho nội dung văn bản
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<MainContent />} />
                        <Route path="technology" element={<Technology />} />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
