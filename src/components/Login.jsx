import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from './AuthProvider';

const Login = () => {
    const authInfo = useContext(authContext)
    const {logIn} = authInfo;
    
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value;
        console.log(email, password)

        logIn(email, password)
        .then(result => {
            if(result.user.accessToken){
                alert('Loged In successfully')
            }
        })
        .catch(err => console.error(err))
    }
    return (
        <div className="hero min-h-screen bg-violet-50">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!  </h1>
                </div>
                <div className="card shrink-0 w-[500px] shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New to this website? <Link to="/register">REGISTER</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;