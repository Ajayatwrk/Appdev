// src/components/HighlightsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Highlights1 from './Highlights1';
import Highlights2 from './Highlights2';
import Highlights3 from './Highlights3';
import Highlights4 from './Highlights4';

const HighlightsPage = () => {
    const { id } = useParams(); // Get the person ID from the URL

    const renderHighlights = () => {
        switch (id) {
            case '1':
                return <Highlights1 />;
            case '2':
                return <Highlights2 />;
            case '3':
                return <Highlights3 />;
            case '4':
                return <Highlights4 />;
            default:
                return <div>Highlights not found</div>;
        }
    };

    return (
        <div className="highlights-page">
            {renderHighlights()}
        </div>
    );
};

export default HighlightsPage;
