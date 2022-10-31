import React, { useState } from 'react'

import photo from '../../../assets/Lumachain-icon-AITraining.jpg'

export default function CameraCheck({ comName }) {

    const [product, setProduct] = useState('0');

    return (
        <div>
            <section className="relative">
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-30 md:pb-16">
                        <div className="max-w-3xl">
                            <h1 className="text-center md:text-left h1 text-4xl font-red-hat-display mb-4">{comName}</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pb-12 md:pb-20">
                        <div className="lg:flex lg:justify-between">
                            <aside className="relative mt-6 lg:mt-0 lg:w-64 lg:mr-16 lg:shrink-0">
                                <div className="mb-8">
                                    <h4 className="h4 font-red-hat-display mb-5">Connection Device</h4>
                                    <ul className="-my-3">
                                        <button className="flex py-3 border-b border-gray-200 dark:border-gray-800 hover:underline" onClick={() => setProduct('0')}>
                                            <article>
                                                <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                                                    View All
                                                </h3>
                                            </article>
                                        </button>

                                        <button className="flex py-3 border-b border-gray-200 dark:border-gray-800 hover:underline" onClick={() => setProduct('1')}>
                                            <article>
                                                <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                                                    bf3fde
                                                </h3>
                                                <div className="text-sm text-gray-500">
                                                    192.0.0.0
                                                </div>
                                            </article>
                                        </button>

                                        <button className="flex py-3 border-b border-gray-200 dark:border-gray-800 hover:underline" onClick={() => setProduct('2')}>
                                            <article>
                                                <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                                                    bf3fde
                                                </h3>
                                                <div className="text-sm text-gray-500">
                                                    192.0.0.0
                                                </div>
                                            </article>
                                        </button>

                                        <button className="flex py-3 border-b border-gray-200 dark:border-gray-800 hover:underline" onClick={() => setProduct('3')}>
                                            <article>
                                                <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                                                    bf3fde
                                                </h3>
                                                <div className="text-sm text-gray-500">
                                                    192.0.0.0
                                                </div>
                                            </article>
                                        </button>

                                    </ul>
                                </div>
                            </aside>

                            <div className="lg:grow">
                                <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-x-6 md:gap-y-8 items-start">

                                    <div className={['1', '0'].includes(product) ? undefined : 'hidden'}>
                                        <article className="text-teal-400 dark:text-teal-700 flex flex-col h-full">
                                            <header>
                                                <figure className="relative h-0 pb-9/16">
                                                    <img className="absolute inset-0 w-full h-full object-cover" src={photo} width="352" height="198" alt="News 01" />
                                                </figure>
                                            </header>
                                            <p className="text-gray-600 dark:text-gray-400 grow mx-auto">2020/02/25 23:30:20</p>
                                        </article>
                                    </div>

                                    <div className={['2', '0'].includes(product) ? undefined : 'hidden'}>
                                        <article className="text-teal-400 dark:text-teal-700 flex flex-col h-full">
                                            <header>
                                                <figure className="relative h-0 pb-9/16">
                                                    <img className="absolute inset-0 w-full h-full object-cover" src={photo} width="352" height="198" alt="News 01" />
                                                </figure>
                                            </header>
                                            <p className="text-gray-600 dark:text-gray-400 grow mx-auto">2020/02/25 23:30:20</p>
                                        </article>
                                    </div>

                                    <div className={['2', '0'].includes(product) ? undefined : 'hidden'}>
                                        <article className="text-teal-400 dark:text-teal-700 flex flex-col h-full">
                                            <header>
                                                <figure className="relative h-0 pb-9/16">
                                                    <img className="absolute inset-0 w-full h-full object-cover" src={photo} width="352" height="198" alt="News 01" />
                                                </figure>
                                            </header>
                                            <p className="text-gray-600 dark:text-gray-400 grow mx-auto">2020/02/25 23:30:20</p>
                                        </article>
                                    </div>

                                    <div className={['3', '0'].includes(product) ? undefined : 'hidden'}>
                                        <article className="text-teal-400 dark:text-teal-700 flex flex-col h-full">
                                            <header>
                                                <figure className="relative h-0 pb-9/16">
                                                    <img className="absolute inset-0 w-full h-full object-cover" src={photo} width="352" height="198" alt="News 01" />
                                                </figure>
                                            </header>
                                            <p className="text-gray-600 dark:text-gray-400 grow mx-auto">2020/02/25 23:30:20</p>
                                        </article>
                                    </div>

                                    <div className={['3', '0'].includes(product) ? undefined : 'hidden'}>
                                        <article className="text-teal-400 dark:text-teal-700 flex flex-col h-full">
                                            <header>
                                                <figure className="relative h-0 pb-9/16">
                                                    <img className="absolute inset-0 w-full h-full object-cover" src={photo} width="352" height="198" alt="News 01" />
                                                </figure>
                                            </header>
                                            <p className="text-gray-600 dark:text-gray-400 grow mx-auto">2020/02/25 23:30:20</p>
                                        </article>
                                    </div>

                                    <div className={['3', '0'].includes(product) ? undefined : 'hidden'}>
                                        <article className="text-teal-400 dark:text-teal-700 flex flex-col h-full">
                                            <header>
                                                <figure className="relative h-0 pb-9/16">
                                                    <img className="absolute inset-0 w-full h-full object-cover" src={photo} width="352" height="198" alt="News 01" />
                                                </figure>
                                            </header>
                                            <p className="text-gray-600 dark:text-gray-400 grow mx-auto">2020/02/25 23:30:20</p>
                                        </article>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
