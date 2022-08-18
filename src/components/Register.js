import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
const Register = ({ setAuth }) => {

    const [form, setForm] = useState({
        email: "",
        password: "",
        name: ""
    });

    const { email, password, name } = form;

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const body = { email, name, password }
            const response = await fetch('http://localhost:4000/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify(body)
            })

            const parseRes = await response.json()

            console.log(parseRes, "token")

            // localStorage.setItem('token', parseRes)

            setAuth(true)
        } catch (err) {
            console.error(err.message)
        }
    }


    return (
        <Fragment>
            <h1>Register</h1>
            <form onSubmit={onSubmitForm}>
                <input className='form-control my-3' type="email" name="email" placeholder='email' value={email} onChange={e => onChange(e)} />
                <input className='form-control my-3' type="password" name="password" placeholder='password' value={password} onChange={e => onChange(e)} />
                <input className='form-control my-3' type="text" name="name" placeholder='name' value={name} onChange={e => onChange(e)} />
                <button className="btn-success btn-block" >Submit</button>
                <Link to='/login'>Login</Link>
            </form>
        </Fragment>

    )
}

export default Register