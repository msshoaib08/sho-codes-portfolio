import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';
// import { profile } from 'console';

const Footer = () => {
	return (
		<footer className="w-full pt-20 pb-10" id="contact">
			{/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
				<img
					src="/footer-grid.svg"
					alt="grid"
					className="w-full h-full opacity-50"
				/>
			</div> */}

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

			<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
				<p className="md:text-base text-sm md:font-normal text-white-200 select-none">
					Copyright &copy; 2024 <span className="font-bold">Shocodes</span>
				</p>

				<div className="flex items-center md:gap-3 gap-6">
					{socialMedia.map((profile) => (
						<a
							href={profile.link}
							key={profile.id}
							target="_blank"
							className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border-black-300"
						>
							<img src={profile.img} alt="profile-img" width={20} height={20} />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
