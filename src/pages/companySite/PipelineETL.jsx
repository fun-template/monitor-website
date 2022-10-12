import React, { useEffect } from 'react';
// Import components
import Header from '../../utils/Header';
import Footer from '../../utils/Footer';
// Import sections
import PipelineCheck from './compSite-section/PipelineCheck';

export default function PipelineETL() {

    useEffect(() => { document.title = "Pipeline ETL - Lumachain CosmosDB"; });

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="grow">
                <PipelineCheck />
            </main>
            <Footer />

        </div>
    );
}