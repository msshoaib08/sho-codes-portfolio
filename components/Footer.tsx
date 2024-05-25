import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="w-full pt-20 pb-10" id="contact">
			<div className="w-full absolute left-0 -bottom-72 min-h-96">
				<img
					src="/footer-grid.svg"
					alt="grid"
					className="w-full h-full opacity-50"
				/>
			</div>

			<div className="flex flex-col items-center">
				<h1 className="heading lg:max-w-[50vw]">
					Let's chat over <span className="text-purple">coffee</span> and brew{' '}
					<span className="text-purple">ideas</span> together!
				</h1>
				<p className="text-white-200 md:mt-10 my-5 text-center">
					Ready to elevate your digital presence? Let's discuss your goals over
					coffee — my treat! Connect today and let's craft something
					extraordinary!!
				</p>
				<a href="mailto: ms.shoaib23@gmail.com">
					<MagicButton
						title="Buy me a coffee"
						icon={<FaLocationArrow />}
						position="right"
					/>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
