const fetchGraphQL = (graphQLUrl, url, credentials, app, mSearchQuery) => {
	const mSearchBody = mSearchQuery.map(item => JSON.stringify(item));

	const query = {
		elastic72: {
			msearch: {
				index: app,
				body: mSearchBody,
			},
		},
	};

	return fetch(graphQLUrl, {
		method: 'POST',
		body: JSON.stringify(query),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then(res => res.json())
		.then(jsonRes => jsonRes.data.elastic50.msearch)
		.catch((error) => {
			console.error(error);
		});
};

export default fetchGraphQL;
