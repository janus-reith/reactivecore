const fetchGraphQL = (graphQLUrl, url, credentials, app, query) => {
	//const fetchUrl = credentials ? url.replace('//', `//${credentials}@`) : url;

	const mSearchBody = query.map(item => JSON.stringify(item));

	const query = {
		elastic72: {
			msearch: {
				index: app,
				body: mSearchBody
			}
		}
	}

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
