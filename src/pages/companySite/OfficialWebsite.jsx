import React, { useEffect } from 'react';
// Import components
import Header from '../../utils/Header';
import Footer from '../../utils/Footer';
// Import sections
import WebsiteCheck from './compSite-section/WebsiteCheck';

export default function OfficialWebsite() {

    useEffect(() => { document.title = "Lumachain.io - Lumachain CosmosDB"; });

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="grow">
                <WebsiteCheck />
            </main>
            <Footer />

        </div>
    );
}