import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateDisplayName } from './../../ducks/reducer'

class Auth extends Component {
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

    register(){
        let {userName, password } = this.state;
        axios.post('/api/user',
        {userName: userName,
        password: password
        }).then(() => this.props.history.push('/dashboard'))
        .then( results => this.props.updateDisplayName(results.data[0].id, results.data[0].username, results.data[0].profile_pic))
    }

    login(){
        let {userName, password } = this.state;
        axios.post('/api/login',
        {userName: userName,
        password: password
        }).then(results=> this.props.updateDisplayName(results.data[0].id, results.data[0].username, results.data[0].profile_pic))
        .then(() => this.props.history.push('/dashboard'))
        
    }

    render() {
        return (
            <div className='Auth'>
                <p> User : <input type='' className='' onChange={ ( e ) => this.updateUser( e.target.value ) }/> </p>

                <p> Password: <input type='' className='' onChange={ ( e ) => this.updatePassword( e.target.value ) }/> </p>

                <p><button onClick={()=>this.login()}>Login</button> <button onClick={()=>this.register()}>Register</button></p>
            </div> 
        )
    }
}

export default connect(null, { updateDisplayName })(Auth)