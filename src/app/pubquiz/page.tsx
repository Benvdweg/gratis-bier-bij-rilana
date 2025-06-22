export default function PubquizPage() {
	return (
		<div className="mt-32 bg-[#fcfbfb] w-200 mx-auto p-8 rounded-xl">
			<h1 className="text-black  font-bold text-4xl text-center">
				🏆 Hall of Champions
			</h1>
			<div className="text-gray-800 text-2xl mb-6">
				<div className="flex flex-row bg-gray-200 shadow-xl mt-8 rounded-xl py-3">
					<div className="my-auto text-3xl ml-3">🥇</div>
					<div className="ml-3">
						<p className="font-bold">Ben</p>
						<p>Tsjechië Editie</p>
						<p>AI Editie</p>
					</div>
				</div>
				<div className="flex flex-row bg-gray-200 shadow-xl mt-8 rounded-xl py-3">
					<div className="my-auto text-3xl ml-3">🥇</div>
					<div className="ml-3">
						<p className="font-bold">Tijmen</p>
						<p>Tenzin Editie</p>
					</div>
				</div>
				<div className="flex flex-row bg-gray-200 shadow-xl mt-8 rounded-xl py-3">
					<div className="my-auto text-3xl ml-3">🥇</div>
					<div className="ml-3">
						<p className="font-bold">Nick</p>
						<p>Kempervennen Editie</p>
					</div>
				</div>
			</div>
		</div>
	);
}
