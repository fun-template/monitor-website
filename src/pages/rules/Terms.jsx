import React from 'react';
// Import components
import Header from '../../utils/Header';
import Footer from '../../utils/Footer';
// Import sections
import TermContent from './rule-section/TermContent';

export default function Terms() {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			<Header />
			<main className="grow">
				<TermContent />
			</main>
			<Footer />
		</div>
	);
}