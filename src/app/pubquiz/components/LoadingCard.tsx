interface LoadingCardProps {
	title: string;
}

export const LoadingCard = ({ title }: LoadingCardProps) => {
	return (
		<div className="px-4 sm:px-0">
			<div className="mt-8 sm:mt-16 md:mt-32 bg-[#fcfbfb] max-w-4xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl">
				<h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-4 sm:mb-6">
					{title}
				</h1>
				<div className="flex justify-center items-center h-64 text-gray-600">
					Loading...
				</div>
			</div>
		</div>
	);
};
