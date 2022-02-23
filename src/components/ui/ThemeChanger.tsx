import React from 'react';
import { useContext, MouseEvent } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

const ThemeChanger = () => {
	const { dark, toggleDark } = useContext(ThemeContext);

	const changeThemeClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		if (toggleDark) {
			toggleDark();
		}
	};

	return <button onClick={changeThemeClickHandler}>{dark ? '🌜' : '🌞'}</button>;
};

export default ThemeChanger;
