import { useState } from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';

import NavBar from '../../Components/NavBar/NavBar';
import SchoolMainPage from '../SchoolMainPage/SchoolMainPage'
import About from '../About/About';


import './App.css';
import AccidentalHBCUPage from '../SchoolMainPage/AccidentalHBCUPage';

export default function App() {
	
	return (
		<>
		<NavBar />
		<Route exact path='/school'>
		<SchoolMainPage />
		</Route>
		<Route exact path='/school/accidentalHBCU'>
			<AccidentalHBCUPage />
		</Route>
		
	


	


		
		
		
		
		
		</>
	);
}
