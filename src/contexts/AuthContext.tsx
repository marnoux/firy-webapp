import React, { FC, useContext, useEffect, useState } from 'react';
import { auth } from '../data/firebase';
import { createUserWithEmailAndPassword, User, UserCredential } from 'firebase/auth';

type initialStateType = {
	currentUser: User | null;
	signup?: (email: string, password: string) => Promise<UserCredential>;
};

const initialState: initialStateType = {
	currentUser: null,
};

const AuthContext = React.createContext(initialState);

export const UseAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider: FC = ({ children }) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);

	const signup = (email: string, password: string) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		signup,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
