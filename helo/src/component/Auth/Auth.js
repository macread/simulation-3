import React, { Component } from 'react';
import axios from 'axios';

export default class Auth extends Component {
    constructor() {
        super()
        
        this.state = {
            userName: '',
            password: ''
        }
    }

    updateUser(val){
        this.setState ({
            userName: val
        })
    }

    updatePassword(val){
        this.setState({
            password: val
        })
    }

    addUser(){
        let {userName, password } = this.state;
        axios.post('/api/user',
        {userName: userName,
        password: password
        }).then(() => this.props.history.push('/dashboard'))
    }

    render() {
        return (
            <div className='Auth'>
                <p> User : <input type='' className='' onChange={ ( e ) => this.updateUser( e.target.value ) }/> </p>

                <p> Password: <input type='' className='' onChange={ ( e ) => this.updatePassword( e.target.value ) }/> </p>

                <p><button>Login</button> <button onClick={()=>this.addUser()}>Register</button></p>
            </div> 
        )
    }
}