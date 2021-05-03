import { useState } from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../About/About';
import OrderHistoryPage from '../Home/Home';
import NavBar from '../../Components/NavBar/NavBar';
import ArticlePage from '../ArticlePage/ArticlePage'
import About from '../About/About';


import './App.css';

export default function App() {
	
	return (
		<>
		<NavBar />
		<Route exact path='/article'>
		<ArticlePage />
		</Route>
		
	


	


		
		
		
		
		
		</>
	);
}
