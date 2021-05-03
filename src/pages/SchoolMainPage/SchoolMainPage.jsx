import React from 'react';
import { Link, Route } from "react-router-dom";
import NavBar from '../../Components/NavBar/NavBar'


export default function SchoolMainPage() {
	return (
              <>
       <h1>School Main Page!</h1>
     
       <h2>Figured it out! YAY ME!</h2>
     
       
       <Route exact path='/school/accidentalHBCU'>
		
		</Route>
        <button>
        <Link to="/school/accidentalHBCU">Read More
        
        </Link>
     
        </button>
       </>
	);
		

}