import React from 'react';
// Import components
import Header from '../../utils/Header';
import Footer from '../../utils/Footer';
// Import sections
import PrivacyContent from './rule-section/PrivacyContent';

export default function Privacy() {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			<Header />
			<main className="grow">
				<PrivacyContent />
			</main>
			<Footer />
		</div>
	);
}