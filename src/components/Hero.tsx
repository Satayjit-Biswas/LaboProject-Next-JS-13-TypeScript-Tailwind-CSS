"use client";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
	function SampleNextArrow(props: {
		className: any;
		style: any;
		onClick: any;
	}) {
		const { className, style, onClick } = props;
		return (
			<div
				className="absolute top-[50%] translate-y-[-50%] right-3"
				onClick={onClick}
			>
				<div className="text-accent opacity-[0.4] transition duration:300 hover:opacity-100 text-[36px] font-bold">
					<AiOutlineRight className="cursor-pointer" />
				</div>
			</div>
		);
	}

	function SamplePrevArrow(props: {
		className: any;
		style: any;
		onClick: any;
	}) {
		const { className, style, onClick } = props;
		return (
			<div
				className="absolute top-[50%] translate-y-[-50%] left-3 z-10"
				onClick={onClick}
			>
				<div className="text-accent opacity-[0.4] transition duration:300 hover:opacity-100 text-[36px] font-bold">
					<AiOutlineLeft className="cursor-pointer" />
				</div>
			</div>
		);
	}
	var settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: false,
		arrows: true,
		nextArrow: (
			<SampleNextArrow
				className={undefined}
				style={undefined}
				onClick={undefined}
			/>
		),
		prevArrow: (
			<SamplePrevArrow
				className={undefined}
				style={undefined}
				onClick={undefined}
			/>
		),
	};

	const slideData = [
		{
			id: 0,
			img: "/banner-1.jpg",
			title: "Trending Item",
			mainTitle: "WOMEN'S LATEST FASHION SALE",
			price: "$20",
		},
		{
			id: 1,
			img: "/banner-2.jpg",
			title: "Trending Accessories",
			mainTitle: "MODERN SUNGLASSES",
			price: "$15",
		},
		{
			id: 2,
			img: "/banner-3.jpg",
			title: "Sale Offer",
			mainTitle: "NEW FASHION SUMMER SALE",
			price: "$30",
		},
	];

	return (
		<div>
			<div className="container pt-6 mb-8 lg:pt-0">
				<Slider {...settings} className="max-h-[600px]">
					{slideData.map((item) => (
						<Slide
							key={item.id}
							img={item.img}
							title={item.title}
							mainTitle={item.mainTitle}
							price={item.price}
						/>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Hero;
