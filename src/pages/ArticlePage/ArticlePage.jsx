import React from 'react';
import NavBar from '../../Components/NavBar/NavBar'
import Article from '../../Components/Article/Article'
import CommentBox from '../../Components/CommentBox/CommentBox'
import { Link, Route } from "react-router-dom";

export default function ArticlePage() {
	return (
              <>
       <h1>Article Page!</h1>
       <Article />
       <h2>Figured it out! YAY ME!</h2>
       <CommentBox />
       </>
	);
		

}