import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import AOS from 'aos';
import './css/style.css';
import 'aos/dist/aos.css';
// Import Basic Pages
import Home from './pages/home/Home';
import Terms from './pages/rules/Terms';
import Report from './pages/report/Report';
import Privacy from './pages/rules/Privacy';
import PageNotFound from './pages/PageNotFound';
// Import Company Sites
import PipelineETL from './pages/companySite/PipelineETL';
import OfficialWebsite from './pages/companySite/OfficialWebsite';
// Import Other Companies Landing Page
import Company from './pages/companies/Company';
import Camera from './pages/companies/Camera';

export default function App() {

	const location = useLocation();

	useEffect(() => {
		AOS.init({
			once: true,
			disable: 'phone',
			duration: 750,
			easing: 'ease-out-quart',
		});
	});

	useEffect(() => {
		document.querySelector('html').style.scrollBehavior = 'auto'
		window.scroll({ top: 0 })
		document.querySelector('html').style.scrollBehavior = ''
	}, [location.pathname]); // triggered on route change

	return (
		<>
			<Routes>
				<Route path="/" >
					<Route index element={<Home />} />

					{/* Official Websites */}
					<Route path="Official-Website" element={<OfficialWebsite />} />
					<Route path="Pipeline-ETL" element={<PipelineETL />} />

					<Route path="comp">
						<Route path=":companyName" element={<Company />} />
					</Route>

					<Route path="cam">
						<Route path=":camera" element={<Camera />} />
					</Route>

					<Route path="report" element={<Report />} />
					<Route path="terms" element={<Terms />} />
					<Route path="privacy" element={<Privacy />} />
				</Route>

				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</>
	);
}