import React, { useContext } from 'react';
import { Link, json } from 'react-router-dom';
import { authContext } from './AuthProvider';

const Register = () => {


    const authInfo = useContext(authContext)
    const {createUser} = authInfo
     const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value;
        const user = {name: name, email : email, password : password}
        console.log(user)

        createUser(email, password)
        .then(result => {
            if(result.user.accessToken){
                fetch('http://localhost:5000/users', {
                    method : 'POST',
                    headers : {
                        'content-type' : 'application/json'
                    },
                    body : JSON.stringify(user) 
                })
                .then(res => {
                    console.log('from db', res)
                })
                .catch(err => console.error(err))
            }
        })
        .catch(err => console.error(err))
    }
    return (
        <div className="hero min-h-screen bg-violet-50">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register</h1>
                </div>
                <div className="card shrink-0 w-[500px] shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password*</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have an account? <Link to="/login">LOGIN</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;