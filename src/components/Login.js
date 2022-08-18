
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

const Login = ({ setAuth }) => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const onChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const { email, password } = form


    const onSubmitForm = async e => {
        e.preventDefault()
        const body = { email, password }
        try {
            const response = await fetch('http://localhost:4000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const parseRes = await response.json(body)

            console.log(parseRes, "token")

            // localStorage.setItem('token', parseRes.token)

            setAuth(true)

        } catch (err) {
            console.error(err.message)
        }
    }


    return (
        <Fragment>
            <h1>Login</h1>
            <form onSubmit={onSubmitForm}>
                <input className="form-control my-3" name='email' type="email" placeholder='email' value={email} onChange={e => onChange(e)} />
                <input className="form-control my-3" name='password' type="password" placeholder='password' value={password} onChange={e => onChange(e)} />
                <button className='btn-success btn-block'>Auth</button>
                <Link to='/register'>Register</Link>
            </form>
        </Fragment>
    )
}

export default Login