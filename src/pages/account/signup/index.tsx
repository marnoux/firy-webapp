import { useContext, MouseEvent } from 'react';
import Card from '../../../components/ui/Card';
import ThemeContext from '../../../contexts/ThemeContext';
import classes from './signup.module.css';

const Signup = () => {
	const { dark, toggleDark } = useContext(ThemeContext);

	const changeThemeClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		if (toggleDark) toggleDark();
	};

	return (
		<Card className={classes.input}>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<button onClick={changeThemeClickHandler}>{dark ? '🌜' : '🌞'}</button>
			</div>
			<form>
				<label htmlFor='email'>Email</label>
				<input type='email' id='email' />
				<label htmlFor='password'>Password</label>
				<input type='password' id='password' />
				<button type='submit'>Sign Up</button>
			</form>
		</Card>
	);
};

export default Signup;
