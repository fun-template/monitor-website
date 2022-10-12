import React from 'react';

import { companyNameOrdered } from '../../../utils/ConstantList';
import Company from '../../../assets/Lumachain-White.jpg'

export default function Companies() {
	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
						<h2 className="h2 font-red-hat-display mb-4">Companies</h2>
					</div>

					<div className="max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto" data-aos="fade-down">
						<div className="flex flex-wrap justify-center -m-5 lg:-my-7">

							{companyNameOrdered.map((com, _) => (
								<div key={_} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7">
									<a href={`/comp/${com.name}`}>
										<div className="flex flex-col items-center">
											<img className="rounded-full mb-2" src={Company} width="80" height="80" alt="Team member 10" />
											<h4 className="dark:text-gray-300 text-3xl font-medium">{com.name}</h4>
										</div>
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}