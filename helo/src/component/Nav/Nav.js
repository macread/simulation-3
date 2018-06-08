import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



function Nav(props) {
  console.log(props)
  return (
    <div className="Nav">
      User: {props.username} 
      <img src={props.profilePic} alt="Robot" />
      
      <p>
      <Link to={'/dashboard'}> <button>Home</button> </Link>
      <Link to={'/new'}> <button>New Post</button> </Link>
      <Link to={'/auth'}> <button>Logout</button> </Link>
      </p>
    </div> 
  )
}

function mapStateToProps(state){
  return({
    username: state.username,
    profilePic: state.profilePic
  })
}

export default connect(mapStateToProps)(Nav)