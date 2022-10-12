import React, { useState } from 'react'

export default function PipelineCheck() {

    const [product, setProduct] = useState('0');

    return (
        <div>
            <section className="relative">
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-30 md:pb-16">
                        <div className="max-w-3xl">
                            <h1 className="text-center md:text-left h1 text-4xl font-red-hat-display mb-4">Pipeline ETL</h1>
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
                                    <h4 className="h4 font-red-hat-display mb-5">Product</h4>

                                    <ul className="-my-3">

                                        <button className="flex py-3 border-b border-gray-200 dark:border-gray-800 hover:underline" onClick={() => setProduct('0')}>
                                            <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                                                View All
                                            </h3>
                                        </button>

                                        <button className="flex py-3 border-b border-gray-200 dark:border-gray-800 hover:underline" onClick={() => setProduct('1')}>
                                            <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                                                chicken-lesion-aggregation
                                            </h3>
                                        </button>

                                        <button className="flex py-3 border-b border-gray-200 dark:border-gray-800 hover:underline" onClick={() => setProduct('2')}>

                                            <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                                                chicken-archive
                                            </h3>
                                        </button>

                                        <button className="flex py-3 border-b border-gray-200 dark:border-gray-800 hover:underline" onClick={() => setProduct('3')}>
                                            <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                                                chicken-yield
                                            </h3>
                                        </button>

                                    </ul>
                                </div>
                            </aside>

                            <div className="lg:grow">
                                <div className="grid grid-cols-1 gap-1 sm:grid-cols-5 mb-4">
                                    <h3 className="h4 font-red-hat-display">Partition</h3>
                                    <h3 className="h4 font-red-hat-display">AiProduct</h3>
                                    <h3 className="h4 font-red-hat-display">Pipeline</h3>
                                    <h3 className="h4 font-red-hat-display">StartTime</h3>
                                    <h3 className="h4 font-red-hat-display">EndTime</h3>
                                </div>
                                <div className="grid grid-cols-1 gap-12 sm:grid-cols-1 sm:gap-x-6 md:gap-y-8 items-start">

                                    <div className={['1', '0'].includes(product) ? undefined : 'hidden'}>
                                        <article className="bg-gray-500 dark:bg-gray-400 text-teal-400 dark:text-teal-700 flex flex-col h-full">
                                            <header>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    prod-turosi-thomastown-linux
                                                </h3>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    56775a54-5671-42c7-9d71-a3b10732e5e4
                                                </h3>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    56775a54-5671-42c7-9d71-a3b10732e5e4
                                                </h3>
                                            </header>
                                            <footer className="flex items-center">
                                                <div className="grid grid-col-1 text-md">
                                                    <p className="text-lg">10/22/2020 00:30:00</p>
                                                    <p className="text-lg">10/22/2020 01:00:00</p>
                                                </div>
                                            </footer>
                                        </article>
                                    </div>

                                    <div className={['1', '0'].includes(product) ? undefined : 'hidden'}>
                                        <article className="bg-gray-500 dark:bg-gray-400 text-red-300 dark:text-red-700 flex flex-col h-full">
                                            <header>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    prod-turosi-thomastown-linux
                                                </h3>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    56775a54-5671-42c7-9d71-a3b10732e5e4
                                                </h3>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    56775a54-5671-42c7-9d71-a3b10732e5e4
                                                </h3>
                                            </header>
                                            <footer className="flex items-center">
                                                <div className="grid grid-col-1 text-md">
                                                    <p className="text-lg">10/22/2020 00:30:00</p>
                                                    <p className="text-lg">10/22/2020 01:00:00</p>
                                                </div>
                                            </footer>
                                        </article>
                                    </div>

                                    <div className={['1', '0'].includes(product) ? undefined : 'hidden'}>
                                        <article className="bg-gray-500 dark:bg-gray-400 text-teal-300 dark:text-teal-700 flex flex-col h-full">
                                            <header>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    prod-turosi-thomastown-linux
                                                </h3>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    56775a54-5671-42c7-9d71-a3b10732e5e4
                                                </h3>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    56775a54-5671-42c7-9d71-a3b10732e5e4
                                                </h3>
                                            </header>
                                            <footer className="flex items-center">
                                                <div className="grid grid-col-1 text-md">
                                                    <p className="text-lg">10/22/2020 00:30:00</p>
                                                    <p className="text-lg">10/22/2020 01:00:00</p>
                                                </div>
                                            </footer>
                                        </article>
                                    </div>

                                    <div className={['2', '0'].includes(product) ? undefined : 'hidden'}>
                                        <article className="bg-gray-500 dark:bg-gray-400 text-teal-300 dark:text-teal-700 flex flex-col h-full">
                                            <header>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    prod-turosi-thomastown-linux
                                                </h3>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    56775a54-5671-42c7-9d71-a3b10732e5e4
                                                </h3>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    56775a54-5671-42c7-9d71-a3b10732e5e4
                                                </h3>
                                            </header>
                                            <footer className="flex items-center">
                                                <div className="grid grid-col-1 text-md">
                                                    <p className="text-lg">10/22/2020 00:30:00</p>
                                                    <p className="text-lg">10/22/2020 01:00:00</p>
                                                </div>
                                            </footer>
                                        </article>
                                    </div>

                                    <div className={['3', '0'].includes(product) ? undefined : 'hidden'}>
                                        <article className="bg-gray-500 dark:bg-gray-400 text-teal-300 dark:text-teal-700 flex flex-col h-full">
                                            <header>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    prod-turosi-thomastown-linux
                                                </h3>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    56775a54-5671-42c7-9d71-a3b10732e5e4
                                                </h3>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    56775a54-5671-42c7-9d71-a3b10732e5e4
                                                </h3>
                                            </header>
                                            <footer className="flex items-center">
                                                <div className="grid grid-col-1 text-md">
                                                    <p className="text-lg">10/22/2020 00:30:00</p>
                                                    <p className="text-lg">10/22/2020 01:00:00</p>
                                                </div>
                                            </footer>
                                        </article>
                                    </div>

                                    <div className={['3', '0'].includes(product) ? undefined : 'hidden'}>
                                        <article className="bg-gray-500 dark:bg-gray-400 text-teal-300 dark:text-teal-700 flex flex-col h-full">
                                            <header>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    prod-turosi-thomastown-linux
                                                </h3>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    56775a54-5671-42c7-9d71-a3b10732e5e4
                                                </h3>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    56775a54-5671-42c7-9d71-a3b10732e5e4
                                                </h3>
                                            </header>
                                            <footer className="flex items-center">
                                                <div className="grid grid-col-1 text-md">
                                                    <p className="text-lg">10/22/2020 00:30:00</p>
                                                    <p className="text-lg">10/22/2020 01:00:00</p>
                                                </div>
                                            </footer>
                                        </article>
                                    </div>

                                    <div className={['3', '0'].includes(product) ? undefined : 'hidden'}>
                                        <article className="bg-gray-500 dark:bg-gray-400 text-teal-300 dark:text-teal-700 flex flex-col h-full">
                                            <header>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    prod-turosi-thomastown-linux
                                                </h3>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    56775a54-5671-42c7-9d71-a3b10732e5e4
                                                </h3>
                                                <h3 className="text-2xl font-red-hat-display mb-2">
                                                    56775a54-5671-42c7-9d71-a3b10732e5e4
                                                </h3>
                                            </header>
                                            <footer className="flex items-center">
                                                <div className="grid grid-col-1 text-md">
                                                    <p className="text-lg">10/22/2020 00:30:00</p>
                                                    <p className="text-lg">10/22/2020 01:00:00</p>
                                                </div>
                                            </footer>
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
