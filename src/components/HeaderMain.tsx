import Image from "next/image";
import Link from "next/link";
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
const HeaderMain = () => {
	return (
		<div className="border-b border-gray-200 py-6">
			<div className="container sm:flex justify-between items-center">
				<div className="logo text-center">
					<Link href="#">
						<Image
							className="w-[40%] h-[100px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
							src="/logo.png"
							alt="banner"
							width={200}
							height={200}
						/>
					</Link>
				</div>
				<div className="w-full sm:w-[300px] md:w-[70%] relative">
					<input
						className="border-gray-200 border p-2 px-4 rounded-md w-full"
						placeholder="Enter any product name..."
					/>
					<BiSearchAlt
						className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
						size={20}
					/>
				</div>
				<div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
					<BiUser className="cursor-pointer" />
					<div className="relative">
						<FiHeart className="cursor-pointer" />
						<div className="bg-red-600 rounded-full absolute top-[-5px] right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">
							0
						</div>
					</div>
					<div className="relative">
						<HiOutlineShoppingBag className="cursor-pointer" />
						<div className="bg-red-600 rounded-full absolute top-[-5px] right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">
							2
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderMain;
