import React from 'react'
import LogInForm from './LogInForm'
import './LogInPage.css'

const LogInPage = () => {

    const randomNumber = Math.floor(Math.random() * 10) + 1

    return (
        <div className='login-page'>
            <LogInForm />
            <img src={`./images/calvin-hobbes-${randomNumber}.png`} alt='cartoon' width='700px'></img>
        </div>
    )
}

export default LogInPage