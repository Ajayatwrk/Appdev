// src/components/NewsCardList.js
import React from 'react';
import NewsCard from './NewsCard';
import Header from './Header'; // Import the Header component
import './NewsCardList.css';

const NewsCardList = () => {
    const newsData = [
        {
            id: 1,
            image :"/github_octaverse.png",
            title: 'GitHub 2024 Octoverse Report',
            date: '8 November, 2024',
            source: 'GitHub',
            description: 'Python now leads in popularity, driven by AI adoption...'
        },
        {
            id: 2,
            image: 'google_privacy.png',
            title: 'Google\'s Differential Privacy Tools',
            date: '7 November, 2024',
            source: 'Google Blogs',
            description: 'Google advances privacy in products like Google Home...'
        },
        {
            id: 3,
            image: 'github.png',
            title: 'GitHub Universe Awards 2024',
            date: '7 November, 2024',
            source: 'GitHub',
            description: 'Celebrating outstanding contributions in open source...'
        },
        {
            id: 4,
            image: 'gemini.png',
            title: 'Google\'s Gemini API',
            date: '6 November, 2024',
            source: 'Google Blog',
            description: 'Gemini API introduces advanced AI deployments...'
        }
    ];

    return (
        <div className="news-card-list">
            <Header /> {/* Add the Header component at the top */}
            <div className="news-cards-container">
                {newsData.map((news) => (
                    <NewsCard key={news.id} {...news} />
                ))}
            </div>
        </div>
    );
};

export default NewsCardList;
