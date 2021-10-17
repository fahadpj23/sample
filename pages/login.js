import React, { useState,Component } from 'react';
import axios from 'axios'
class Login extends Component{


    constructor(){
        super()
                    this.state={
                        username:"",
                        password:"",
                        error:"",
                        userdetails:""
                                 }
                 }
   
    handlechange=(e)=>{
        // console.log(e.target.name)
        this.setState({
            [e.target.name]:e.target.value
        })
    
    }

     handlelogin=(e)=>{
         e.preventDefault()
        
     }


    render(){
        return(
            <div>
                 
                    <form onSubmit={this.handlelogin}>
                        <div className="flex">
                            <h5>enter username</h5>
                            <input name="username" value={this.state.username} onChange={this.handlechange} type="text"/>
                        </div>
                        <div className="flex">
                            <h5>password</h5>
                            <input name="password" value={this.state.password} onChange={this.handlechange} type="password"/>
                        </div>
                        <button type="submit" >login</button>
                        <span>{this.state.error}</span>
                        
                        
                    </form>

          </div>
        )

    }
}
export default Login