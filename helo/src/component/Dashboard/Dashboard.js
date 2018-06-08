import React, { Component } from 'react';
import Nav from './../Nav/Nav'

export default class Dashboard extends Component {
    constructor() {
        super()
        
        this.state = {
            searchText: '',
            posts: [{id: 0, title: '', username: '', profile_pict: ''}]
        }
    }

    updateSearchText(val){
        this.setState({searchText: val})
    }

    render() {
        return (
            <div className='Dashboard'>
                <Nav />
               
                    <input placeholder='Search by Title' onChange={ ( e ) => this.updateSearchText( e.target.value ) } />
                    <button>Search</button> 
                    <button >Reset</button>
                    <input type="checkbox" /> My Posts
                    <hr />
                    {this.state.posts.map( post => (
                        <div key={post.id}>
                            {post.title} 
                            {post.username} 
                            <img src={post.profile_pict} alt="Robot" />
                        </div>
                    ))}
                
            </div> 
        )
    }
}