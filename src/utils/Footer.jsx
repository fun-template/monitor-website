import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Lumachain.jpg'
import { companyNameOrdered, camera } from './ConstantList';

export default function Footer() {
    return (
        <footer className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 -mt-px">

                    <div className="grid md:grid-cols-12 gap-8 lg:gap-10 mb-8 md:mb-12">

                        <div className="md:col-span-2 lg:col-span-3">
                            <Link className="inline-block" to="/" aria-label="Lumachain">
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

                        <div className="md:col-span-10 lg:col-span-9 grid grid-cols-1 md:grid-cols-5 gap-8">

                            <div className="text-sm">
                                <h6 className="font-medium uppercase mb-2">Company</h6>
                                {companyNameOrdered.slice(0, 4).map((com, _) => (
                                    <ul key={_} >
                                        <li className="mb-1">
                                            <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to={`/comp/${com.name}`}>{com.name}</Link>
                                        </li>
                                    </ul>

                                ))}
                            </div>

                            <div className="text-sm">
                                <h6 className="font-medium uppercase mb-2">Company</h6>
                                {companyNameOrdered.slice(4, 9).map((com, _) => (
                                    <ul key={_} >
                                        <li className="mb-1">
                                            <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to={`/comp/${com.name}`}>{com.name}</Link>
                                        </li>
                                    </ul>

                                ))}
                            </div>

                            <div className="text-sm">
                                <h6 className="font-medium uppercase mb-2">Camera</h6>
                                {camera.slice(0, 4).map((com, _) => (
                                    <ul key={_} >
                                        <li className="mb-1">
                                            <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to={`/cam/${com.name}`}>{com.name}</Link>
                                        </li>
                                    </ul>

                                ))}
                            </div>

                            <div className="text-sm">
                                <h6 className="font-medium uppercase mb-2">Camera</h6>
                                {camera.slice(4, 9).map((com, _) => (
                                    <ul key={_} >
                                        <li className="mb-1">
                                            <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to={`/cam/${com.name}`}>{com.name}</Link>
                                        </li>
                                    </ul>

                                ))}
                            </div>

                            <div className="text-sm">
                                <h6 className="font-medium uppercase mb-2">Official</h6>
                                <ul>
                                    <li className="mb-1">
                                        <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="/">Home</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="/Official-Website">Lumachain.io</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="/Pipeline-ETL">Pipeline ETL</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="/report">Report</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex md:items-center md:justify-between">

                        <div className="text-sm md:order-1 text-gray-700 mb-2 md:mb-0">
                            <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="/terms">Terms</Link> · <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="/privacy">Privacy Policy</Link>
                        </div>

                        <div className="text-gray-600 dark:text-gray-400 text-sm mr-4">&copy; Lumachain.io All rights reserved.</div>

                    </div>

                </div>
            </div>
        </footer >
    );
}