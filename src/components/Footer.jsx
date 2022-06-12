import React from "react";
import {
	FaFacebookSquare,
	FaGithubSquare,
	FaTiktok,
	FaTwitterSquare,
	FaYoutubeSquare,
} from "react-icons/fa";

function Footer() {
	return (
		<div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
			<div>
				<h1 className="w-full text-3xl font-bold text-[#971FFD]">
					Arro Social
				</h1>
				<p className="py-4">
					Our mission is to give you back control and rightful ownership of your
					social media content as well as the opportunity to earn money while
					doing so.
				</p>
				<div className="flex justify-between md:w-[75%] my-6">
					<FaFacebookSquare size={30} />
					<FaTiktok size={30} />
					<FaTwitterSquare size={30} />
					<FaGithubSquare size={30} />
					<FaYoutubeSquare size={30} />
				</div>
			</div>
			<div className="lg:col-span-2 flex justify-between mx-3">
				<div className="hidden lg:col-span-1"></div>
				<div className="lg:col-span-1">
					<h6 className="font-medium text-gray-4">Company</h6>
					<ul>
						<li className="py-2 text-sm">About</li>
						<li className="py-2 text-sm">Blog</li>
						<li className="py-2 text-sm">Press</li>
						<li className="py-2 text-sm">Careers</li>
					</ul>
				</div>

				<div className="hidden lg:col-span-1"></div>
				<div className="lg:col-span-1">
					<h6 className="font-medium text-gray-4">Legal</h6>
					<ul>
						<li className="py-2 text-sm">Claim</li>
						<li className="py-2 text-sm">Policy</li>
						<li className="py-2 text-sm">Terms</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
