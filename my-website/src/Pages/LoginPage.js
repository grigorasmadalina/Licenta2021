import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const LoginPage = () => {
   const [email, setEmail] = useState('');
   const[password, setPassword] = useState('');

    return(
        <div className="maincontainer">
        <div class="container-fluid">
            <div class="row no-gutter">
               
                <div class="col-md-6 d-none d-md-flex bg-image"></div>
                
                <div class="col-md-6 bg-light">
                    <div class="login d-flex align-items-center py-5">
                       
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    <h3 class="display-4">DARKSY</h3>
                                    <p class="text-muted mb-4">Create a login split page using Bootstrap 4.</p>
                                    <form>
                                        <div class="form-group mb-3">
                                            <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div class="form-group mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input id="customCheck1" type="checkbox" checked class="custom-control-input" />
                                            <label for="customCheck1" class="custom-control-label">Remember password</label>
                                        </div>
                                        <Link onClick={event => (!email || !password) ? event.preventDefault(): null} to = {`/dashboard?email${email}&password=${password}`}>
                                        <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Log in</button>
                                        </Link>
                                        <div class="text-center d-flex justify-content-between mt-4"><p>Code by <a href="#" class="font-italic text-muted"> 
                                                <u>Jassa</u></a></p></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default LoginPage;