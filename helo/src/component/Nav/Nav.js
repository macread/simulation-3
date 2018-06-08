import React from 'react';
import { Link } from 'react-router-dom';


export default function Nac(props) {
  return (
    <div className="Nav">
       <Link to={'/dashboard'}> <button>Home</button> </Link>
       <Link to={'/new'}> <button>New Post</button> </Link>
       <Link to={'/auth'}> <button>Logout</button> </Link>
    </div> 
  )
}