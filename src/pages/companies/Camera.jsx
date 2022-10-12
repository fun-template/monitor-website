import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Import important components
import Header from '../../utils/Header';
import Footer from '../../utils/Footer';
// Import sections
import CameraCheck from './camera-section/CameraCheck';

export default function Company() {

    const location = useLocation();
    const comp = location.pathname.split("/").pop()

    useEffect(() => { document.title = `${comp} - Lumachain CosmosDB`; });

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="grow">
                <CameraCheck comName={comp} />
            </main>
            <Footer />
        </div>
    );
}