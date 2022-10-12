import React from 'react';

export default function Official() {
	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-32 pb-10 md:pt-20 md:pb-16">
					<div className="py-12 md:py-20">

						<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
							<h2 className="h2 font-red-hat-display">Official Monitoring</h2>
						</div>

						<div className="max-w-xs mx-auto sm:max-w-none md:max-w-xl lg:max-w-none grid sm:grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-2" data-aos-id-featbl>

							<a className="flex flex-col p-5 group text-white bg-gradient-to-tr from-teal-600 to-teal-500 dark:to-teal-600 shadow-2xl" href="/Official-Website" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]">
								<div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mt-4 mx-auto">Lumachain.io</div>
								<svg className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path className="fill-current" d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z" />
								</svg>
							</a>

							<a className="flex flex-col p-5 group text-white bg-gradient-to-tr from-purple-600 to-purple-500 dark:to-purple-600 shadow-2xl" href="/Pipeline-ETL" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]" data-aos-delay="100">
								<div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mt-4 mx-auto">Pipeline ETL</div>
								<svg className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path className="fill-current" d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z" />
								</svg>
							</a>

						</div>
					</div>
				</div>
			</div>
		</section>
	);
}