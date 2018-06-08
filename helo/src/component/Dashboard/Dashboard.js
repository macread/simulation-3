import React, { Component } from 'react';
import Nav from './../Nav/Nav';
import { connect } from 'react-redux';
import axios from 'axios';


class Dashboard extends Component {
    constructor() {
        super()
        
        this.state = {
            searchText: '',
            posts: [{id: 0, title: '', username: '', profile_pict: ''}],
            userposts: false
        }
    }

    updateSearchText(val){
        this.setState({searchText: val})
    }

    getPosts() {
        let {searchText, userposts } = this.state;
        axios.get('/api/posts',
        {params: 
            {userid: this.props.id,
            searchText: searchText,
            userposts: userposts}
        }).then((posts) => {
        console.log(posts.data)
        this.setState({posts: posts.data})})
    }

    render() {
        console.log(this.state.posts)
        return (
            <div className='Dashboard'>
                <Nav />
               
                    <input placeholder='Search by Title' onChange={ ( e ) => this.updateSearchText( e.target.value ) } />
                    <button onClick={() => this.getPosts()}>Search</button> 
                    <button >Reset</button>
                    <input type="checkbox" /> My Posts
                    <hr />
                    {this.state.posts.map( post => (
                        <div key={post.id}>
                            {post.title} 
                            {post.username} 
                            <img src={post.profile_pic} alt="Robot" />
                        </div>
                    ))}
                
            </div> 
        )
    }
}

function mapStateToProps(state){
    return { id: state.id}
}

export default connect(mapStateToProps)(Dashboard)