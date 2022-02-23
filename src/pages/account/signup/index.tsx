import Card from '../../../components/ui/Card';
import { UseAuth } from '../../../contexts/AuthContext';
import classes from './signup.module.css';

const Signup = () => {
	const { signup } = UseAuth();

	return (
		<Card className={classes.input}>
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
