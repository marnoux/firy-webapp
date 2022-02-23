import * as React from 'react';

interface AppContextInterface {
	name: string;
	author: string;
	url: string;
}

const AppCtx = React.createContext<AppContextInterface | null>(null);

const sampleAppContext: AppContextInterface = {
	name: 'Firy',
	author: 'Marnoux Manser',
	url: 'http://localhost:3000',
};

export const App = () => <AppCtx.Provider value={sampleAppContext}>...</AppCtx.Provider>;
