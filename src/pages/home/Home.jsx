import React, { useEffect } from 'react';
// Import components
import Header from '../../utils/Header';
import Footer from '../../utils/Footer';
// Import sections
import Cameras from './home-section/Cameras';
import Official from './home-section/Official';
import Companies from './home-section/Companies';

export default function Home() {

	useEffect(() => { document.title = "Home - Lumachain CosmosDB"; });

	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			<Header />
			<main className="grow">
				<Official />
				<Companies />
				<Cameras />
			</main>
			<Footer />

		</div>
	);
}