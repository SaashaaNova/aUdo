import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom'
  

class SignInPage extends Component {
  render() {
   return (
        <div className="user-container">
        <div className="user-sign-in">
            <div className="user-title">
                <h1>Zaloguj się </h1>
            </div>
        

            <div className="form-sign-in">

                <form action=""> 

                    <input type="email" name="email" className="form-control-sign-in" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" />
                    

                    <input type="password" name="password" className="form-control-sign-in" id="exampleInputPassword1" placeholder="hasło"/>
                    
                    <div className="btn-sign-in">
                        <Link to="/dashboard">
                            <button type="submit" >Zaloguj</button>
                        </Link>
                    </div>
                    
                </form>

            </div>

            <div className="go-to-register">
                <Link to="/register">
                   <button>Zarejstruj się</button>
                </Link>
            </div>
            <div style={{clear:'both'}}></div>
        </div>
    </div>
   );
  }
}

export default SignInPage;