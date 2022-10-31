import React, { useEffect } from 'react';

import Header from '../../utils/Header';
import Footer from '../../utils/Footer';
import { companyNameOrdered } from '../../utils/ConstantList'

export default function Report() {

	useEffect(() => { document.title = "Lumachain"; });

	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			<Header />
			<main className="grow">

				<section className="relative">
					<div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
						<div className="pt-32 pb-12 md:pt-40 md:pb-20">

							<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
								<h1 className="h1 font-red-hat-display mb-4">Report Issue</h1>
							</div>

							<form className="max-w-xl mx-auto">

								<div className="flex flex-wrap -mx-3 mb-5">
									<div className="w-full px-3">
										<div className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-3">Company Name</div>
										<select id="company" className="form-select w-full" required>
											<option>Select Company</option>
											{companyNameOrdered.map((each, _) => (
												<option key={_}>{each.name}</option>
											))}
										</select>
									</div>
								</div>

								<div className="flex flex-wrap -mx-3 mb-5">
									<div className="w-full px-3">
										<label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="product">Product Id <span className="text-red-600">*</span></label>
										<input id="product" type="text" className="form-input w-full" placeholder="Enter product ID" required />
									</div>
								</div>

								<div className="flex flex-wrap -mx-3 mb-5">
									<div className="w-full px-3">
										<label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="module">Module Id <span className="text-red-600">*</span></label>
										<input id="module" type="text" className="form-input w-full" placeholder="Enter module ID" required />
									</div>
								</div>

								<div className="flex flex-wrap -mx-3 mb-5">
									<div className="w-full px-3">
										<label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="time">Time <span className="text-red-600">*</span></label>
										<input id="time" type="date" className="form-input w-full" placeholder="Select Time" required />
									</div>
								</div>

								<div className="flex flex-wrap -mx-3 mb-5">
									<div className="w-full px-3">
										<div className="flex justify-between items-center mb-1">
											<label className="block text-gray-800 dark:text-gray-300 text-sm font-medium" htmlFor="detail">Details</label>
											<span className="text-sm text-gray-500">Optional</span>
										</div>
										<textarea id="detail" rows="8" className="form-textarea w-full" placeholder="What's the issue?"></textarea>
									</div>
								</div>

								<div className="flex flex-wrap -mx-3 mt-6">
									<div className="w-full px-3">
										<button className="btn text-white bg-teal-500 hover:bg-teal-400 w-full flex items-center">
											<span>Submit</span>
											<svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
												<path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
											</svg>
										</button>
									</div>
								</div>

							</form>
						</div>
					</div>
				</section>

			</main>

			{/*  Site footer */}
			<Footer />

		</div>
	);
}