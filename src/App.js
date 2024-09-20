import React from 'react';
import { Route, Routes} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Layout from './components/Layout';
import MainContent from './pages/MainContent';
import Technology from "./pages/Technology";
import ArticleDetails from "./components/ArticleDetails";
import NewsDetails from "./components/NewsDetails";
import Window from "./pages/Window";
import LearnIT from "./pages/LearnIT";
import Download from "./pages/Download";
import Extension from "./pages/Extension";
import Science from "./pages/Science";
import Application from "./pages/Application";
import NotFound from './pages/NotFound';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4CAF50',
            dark: '#388E3C',
            light: '#C8E6C9',
        },
        secondary: {
            main: '#8BC34A',
        },
        background: {
            default: '#F1F8E9',
        },
        text: {
            primary: '#1B5E20',
            secondary: '#4E342E',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
        h1: {
            fontSize: '2rem',
            fontWeight: 700,
            color: '#1B5E20',
        },
        h2: {
            fontSize: '1.75rem',
            fontWeight: 600,
            color: '#1B5E20',
        },
        body1: {
            fontSize: '1rem',
            color: '#4E342E',
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<MainContent/>}/>
                    <Route path="technology" element={<Technology/>}/>
                    <Route path="window" element={<Window/>}/>
                    <Route path="learnit" element={<LearnIT/>}/>
                    <Route path="download" element={<Download/>}/>
                    <Route path="extension" element={<Extension/>}/>
                    <Route path="science" element={<Science/>}/>
                    <Route path="application" element={<Application/>}/>
                    <Route path="article/:slug" element={<ArticleDetails/>}/>
                    <Route path="news/:slug" element={<NewsDetails/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </ThemeProvider>
    );
};

export default App;
