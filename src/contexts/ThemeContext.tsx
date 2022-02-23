import React, { FC, useState } from 'react';

// Begin Context
interface IThemeContext {
	dark: boolean;
	toggleDark?: () => void;
}

const defaultState = {
	dark: false,
};

const ThemeContext = React.createContext<IThemeContext>(defaultState);

export default ThemeContext;

// Begin Provider
export const ThemeProvider: FC = ({ children }) => {
	const [dark, setDark] = useState(defaultState.dark);

	const toggleDark = () => {
		setDark(!dark);
	};

	return (
		<ThemeContext.Provider
			value={{
				dark,
				toggleDark,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
