import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom'

class RegisterPage extends Component {
  render() {
   return (
        <div className="user-container">
        <div className="user-register">
            <div className="user-title">
                <h1>Zarejstruj się</h1>
            </div>
        

            <div className="form-register">

                <form action=""> 

                    <input type="email" name="email" className="form-control-register" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" />
                    

                    <input type="password" name="password" className="form-control-register" id="exampleInputPassword1" placeholder="hasło"/>

                    <input type="password" name="password" className="form-control-register" id="exampleInputPassword1" placeholder="powtórz hasło"/>
                    
                    <Link to="/dashboard">
                        <button type="submit" >Zarejstruj się</button>
                    </Link>
                    
                </form>

            </div>

            <div className="go-to-sing-in">
                <Link to="/signin">
                    <button>Zaloguj</button>
                </Link>
            </div>
            <div style={{clear:'both'}}></div>
        </div>
    </div>
   );
  }
}

export default RegisterPage;