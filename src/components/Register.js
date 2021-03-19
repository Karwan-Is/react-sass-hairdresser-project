import React from 'react'

const Register = () => {
    return (
        <div className="register">
            <h2>Register</h2>
            <form>
                <input type="text" placeholder="First Name"></input>
                <input type="text" placeholder="Last Name"></input>
                <input type="email" placeholder="Email Address"></input>
                <input type="password" placeholder="Password"></input>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register