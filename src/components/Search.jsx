const Search = ({ inputVal, handleInputVal, handleUsername }) => {
	return (
		<section className="search">
			<div>
				<img
					src="/assets/icon-search.svg"
					alt="icon-search"
				/>
				<input
					type="text"
					placeholder="Enter the user name"
					value={inputVal}
					onChange={event => {
						handleInputVal();
					}}
				/>
				<button onClick={handleUsername}>Search</button>
			</div>
		</section>
	);
};

export default Search;
