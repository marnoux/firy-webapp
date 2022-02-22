import type { NextPage } from 'next';
import { Fragment } from 'react';

const Home: NextPage = () => {
	return (
		<Fragment>
			<h1>{process.env.REACT_APP_FIREBASE_APP_ID}</h1>
		</Fragment>
	);
};

export default Home;
