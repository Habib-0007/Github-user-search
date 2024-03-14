const Header = ({ lightmode, changeMode }) => {
	return (
		<header>
			<h1>devfinder</h1>
			<button onClick={changeMode}>
				{lightmode ? (
					<strong>
						DARK
						<img
							src="/assets/icon-moon.svg"
							alt="icon-moon"
						/>
					</strong>
				) : (
					<strong>
						LIGHT
						<img
							src="/assets/icon-sun.svg"
							alt="icon-sun"
						/>
					</strong>
				)}
			</button>
		</header>
	);
};

export default Header;
