const Details = ({ data, isLoading, error }) => {
	return (
		<section>
			{isLoading && <p>Loading...</p>}
			{data && (
				<section className="details">
					<div className="details-top">
						<img
							src={data.avatar_url}
							alt={data.name}
						/>
						<div>
							<h1>{data.name}</h1>
							<strong className="login">@{data.login}</strong>
							<p>
								{new Date(data.created_at).toLocaleDateString(
									"en-GB",
									{
										day: "numeric",
										month: "long",
										year: "numeric",
									}
								)}
							</p>
						</div>
					</div>
					<p className="bio">
						{data.bio != null
							? data.bio
							: "This profile has no bio"}
					</p>
					<div className="stats">
						<div>
							<p>Repos</p>
							<strong>{data.public_repos}</strong>
						</div>
						<div>
							<p>Followers</p>
							<strong>{data.followers}</strong>
						</div>
						<div>
							<p>Following</p>
							<strong>{data.following}</strong>
						</div>
					</div>
					<div className="socials">
						<div>
							<img
								src="/assets/icon-location.svg"
								alt="icon-location"
							/>
							<p>
								{data.location != null
									? data.location
									: "Not Available"}
							</p>
						</div>
						<div>
							<img
								src="/assets/icon-twitter.svg"
								alt="icon-twitter"
							/>
							<p>
								{data.twitter_username != null
									? data.twitter_username
									: "Not Available"}
							</p>
						</div>
						<div>
							<img
								src="/assets/icon-website.svg"
								alt="icon-website"
							/>
							<p>
								{data.blog != null
									? data.blog
									: "Not Available"}
							</p>
						</div>
						<div>
							<img
								src="/assets/icon-company.svg"
								alt="icon-company"
							/>
							<p>
								{data.company != null
									? data.company
									: "Not Available"}
							</p>
						</div>
					</div>
				</section>
			)}
			{error && <p>{error}</p>}
		</section>
	);
};

export default Details;
