import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import DropdownSmall from './DropdownSmall';
import DropdownCamera from './DropdownCamera';
import Transition from './Transition';
import Logo from '../assets/Lumachain.jpg';
import { companyNameOrdered, allGrouped, camera } from './ConstantList';

export default function Header() {

	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const trigger = useRef(null);
	const mobileNav = useRef(null);

	// close the mobile menu on click outside
	useEffect(() => {
		const clickHandler = ({ target }) => {
			if (!mobileNav.current || !trigger.current) return;
			if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
			setMobileNavOpen(false);
		};
		document.addEventListener('click', clickHandler);
		return () => document.removeEventListener('click', clickHandler);
	});

	// close the mobile menu if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }) => {
			if (!mobileNavOpen || keyCode !== 27) return;
			setMobileNavOpen(false);
		};
		document.addEventListener('keydown', keyHandler);
		return () => document.removeEventListener('keydown', keyHandler);
	});

	// Handle light modes
	const [darkMode, setDarkMode] = useState(() => {
		const dark = localStorage.getItem('dark-mode');
		if (dark === null) {
			return true;
		} else {
			return dark === 'true';
		}
	});

	useEffect(() => {
		localStorage.setItem('dark-mode', darkMode)
		if (darkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [darkMode]);

	return (
		<header className="absolute w-full z-30">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="flex items-center justify-between h-20">
					<div className="shrink-0 mr-5">
						<Link to="/" className="block" aria-label="Lumachain">
							<img
								src={Logo}
								alt="Lumachain"
								style={{
									'overflow': 'hidden',
									'borderRadius': '50%'
								}}
								className="w-16 h-16" />
						</Link>
					</div>

					<nav className="hidden md:flex md:grow">
						<ul className="flex grow flex-wrap items-center font-medium">
							<Dropdown title="Companies">
								{companyNameOrdered.map((com, _) => (
									<li key={_}>
										<Link
											to={`/comp/${com.name}`}
											className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight"
										>
											{com.name}
										</Link>
									</li>
								))}
							</Dropdown>
							<DropdownSmall title="Official Website">
								<li>
									<Link
										to="/Official-Website"
										className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-400 dark:hover:text-teal-400 flex py-2 px-4 leading-tight"
									>
										Lumachain.io
									</Link>
								</li>
								<li>
									<Link
										to="/Pipeline-ETL"
										className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight"
									>
										Pipeline ETL
									</Link>
								</li>
							</DropdownSmall>
							<DropdownCamera title="Camera">
								{camera.map((cam, _) => (
									<li key={_}>
										<Link
											to={`/cam/${cam.name}`}
											className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight"
										>
											{cam.name}
										</Link>
									</li>
								))}
							</DropdownCamera>
							<li>
								<Link
									to="/report"
									className="text-md text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight"
								>
									Report
								</Link>
							</li>
						</ul>

						<div className="form-switch flex flex-col justify-center ml-3">
							<input
								type="checkbox"
								name="light-switch"
								id="light-switch-desktop"
								className="light-switch sr-only"
								checked={darkMode}
								onChange={() => setDarkMode(!darkMode)}
							/>
							<label className="relative" htmlFor="light-switch-desktop">
								<span
									className="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
									aria-hidden="true"
								></span>
								<svg className="absolute inset-0" width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
									<g className="fill-current text-white" fillRule="nonzero" opacity=".88">
										<path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z" />
										<circle cx="32" cy="12" r="3" />
										<circle fillOpacity=".4" cx="12" cy="12" r="6" />
										<circle fillOpacity=".88" cx="12" cy="12" r="3" />
									</g>
								</svg>
								<span className="sr-only">Switch to light / dark version</span>
							</label>
						</div>

						<ul className="flex justify-end flex-wrap items-center">
							<li>
								<button className="btn-sm text-white bg-teal-500 hover:bg-teal-400 ml-6">
									Sign Out
								</button>
							</li>
						</ul>
					</nav>

					<div className="inline-flex md:hidden">
						<div className="form-switch flex flex-col justify-center mr-6 -mt-0.5">
							<input
								type="checkbox"
								name="light-switch"
								id="light-switch-mobile"
								className="light-switch sr-only"
								checked={darkMode}
								onChange={() => setDarkMode(!darkMode)}
							/>
							<label className="relative" htmlFor="light-switch-mobile">
								<span
									className="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
									aria-hidden="true"
								></span>
								<svg className="absolute inset-0" width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
									<g className="fill-current text-white" fillRule="nonzero" opacity=".88">
										<path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z" />
										<circle cx="32" cy="12" r="3" />
										<circle fillOpacity=".4" cx="12" cy="12" r="6" />
										<circle fillOpacity=".88" cx="12" cy="12" r="3" />
									</g>
								</svg>
								<span className="sr-only">Switch to light / dark version</span>
							</label>
						</div>

						<button
							ref={trigger}
							className={`hamburger ${mobileNavOpen && 'active'}`}
							aria-controls="mobile-nav"
							aria-expanded={mobileNavOpen}
							onClick={() => setMobileNavOpen(!mobileNavOpen)}
						>
							<span className="sr-only">Menu</span>
							<svg
								className="w-6 h-6 fill-current text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-150 ease-in-out"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect y="4" width="24" height="2" rx="1" />
								<rect y="11" width="24" height="2" rx="1" />
								<rect y="18" width="24" height="2" rx="1" />
							</svg>
						</button>

						<Transition
							show={mobileNavOpen}
							tag="ul"
							className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg"
							enter="transition ease-out duration-200 transform"
							enterStart="opacity-0 -translate-x-full"
							enterEnd="opacity-100 translate-x-0"
							leave="transition ease-out duration-200"
							leaveStart="opacity-100"
							leaveEnd="opacity-0"
						>
							<nav
								id="mobile-nav"
								ref={mobileNav}
								className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg no-scrollbar"
							>
								<div className="py-6 pr-4 pl-20">
									<Link to="/" className="block" aria-label="Lumachain">
										<img
											src={Logo}
											alt="Lumachain"
											style={{
												'overflow': 'hidden',
												'borderRadius': '50%'
											}}
											className="w-16 h-16" />
									</Link>
									<ul>
										<li className="py-2 my-2 border-t border-b border-gray-200 dark:border-gray-800">
											<span className="flex text-gray-600 dark:text-gray-400 py-2">Official</span>
											<ul className="pl-4">
												<li>
													<Link
														to="/Official-Website"
														className="text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2"
													>
														Lumachain.io
													</Link>
												</li>
												<li>
													<Link
														to="/Pipeline-ETL"
														className="text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2"
													>
														Pipeline ETL
													</Link>
												</li>
												<li>
													<Link
														to="/report"
														className="text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2"
													>
														Report
													</Link>
												</li>
											</ul>
										</li>
										{allGrouped.map((each, _) => (
											<li key={_} className="py-2 my-2 border-b border-gray-200 dark:border-gray-800">
												<span className="flex text-gray-600 dark:text-gray-400 py-2">{each.start} - List</span>
												<ul className="pl-4 mb-2">
													{each.each.map((comp, idx) => (
														<li key={idx}>
															<Link
																to={`${comp.path}`}
																className="text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2"
															>
																{comp.name}
															</Link>
														</li>
													))}
												</ul>
											</li>
										))}
										<li>
											<button className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out">
												Sign Out
											</button>
										</li>
									</ul>
								</div>
							</nav>
						</Transition>
					</div>
				</div>
			</div>
		</header>
	);
}