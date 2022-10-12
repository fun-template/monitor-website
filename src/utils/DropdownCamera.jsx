import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Transition from './Transition';

export default function DropdownCamera({
	children,
	title
}) {

	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<li
			className="relative"
			onMouseEnter={() => setDropdownOpen(true)}
			onMouseLeave={() => setDropdownOpen(false)}
			onFocus={() => setDropdownOpen(true)}
			onBlur={() => setDropdownOpen(false)}
		>
			<div
				className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
				aria-expanded={dropdownOpen}
				onClick={(e) => e.preventDefault()}
			>
				{title}
				<svg className="w-3 h-3 fill-current text-gray-400 cursor-pointer ml-1 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
				</svg>
			</div>
			<Transition
				show={dropdownOpen}
				tag="ul"
				className="origin-top-right absolute top-full left-0 w-80 bg-white dark:bg-gray-800 shadow-lg py-2 ml-4 rounded grid grid-cols-2 gap-2"
				enter="transition ease-out duration-200 transform"
				enterStart="opacity-0 -translate-y-2"
				enterEnd="opacity-100 translate-y-0"
				leave="transition ease-out duration-200"
				leaveStart="opacity-100"
				leaveEnd="opacity-0"
			>
				{children}
			</Transition>
		</li>
	);
}

DropdownCamera.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element.isRequired
	]),
	title: PropTypes.string.isRequired,
};
