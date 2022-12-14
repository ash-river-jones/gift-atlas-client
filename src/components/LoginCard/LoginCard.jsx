import './LoginCard.scss';
import error from '../../assets/icons/error-24px.svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_SERVER_URL || '';

export default function LoginCard() {
	const navigate = useNavigate()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState(null)
	const [passwordError, setPasswordError] = useState(null)

	const [loginInfo, setLoginInfo] = useState({})

	const handelLogin = (e) => {
		e.preventDefault()
		if (emailError === true || passwordError === true) {
		} else {
			axios.post(`${API_URL}/login`,loginInfo)
			.then((response) => {
				if (response.status === 200) {
					sessionStorage.authToken = response.data.authToken
					navigate('/dashboard')
				}
			})
			.catch((err) => {
				console.log(err.response.data)
			})
		}
	}

	useEffect(() => {
		setLoginInfo({
			email: email,
			password: password
		})
	},[email, password])

	useEffect(() => {
        if (email === '') {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
    },[email])

    useEffect(() => {
        if (password === '') {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
    },[password])

	return (
		<>
			<main className='login'>
				<section className='login__header'>
					<div className='login__header-wrapper'>
						<h1 className="login__heading">Log In to Gift Atlas</h1>
					</div>
					<form onSubmit={handelLogin}>
						<div className="login-details__wrapper">
							<h2 className="login-details__heading">Login Details</h2>
							<label htmlFor="email" className='login-details__label'>Email</label>
							<input type="text" name='email' id='email' className='login-details__input' value={email} placeholder='example@example.com' onChange={(e)=>{setEmail(e.target.value)}} />
							{emailError && (
							<div className='login-details__error-wrapper'>
								<img className='login-details__error-img' src={error} alt='' />
								<p className='login-details__error--text'>This field is required</p>
							</div>
							)}
							<label htmlFor="password" className='login-details__label'>Password</label>
							<input type="password" name='password' id='password' className='login-details__input' value={password} placeholder='Enter your password' onChange={(e)=>{setPassword(e.target.value)}} />
							{passwordError && (
							<div className='login-details__error-wrapper'>
								<img className='login-details__error-img' src={error} alt='' />
								<p className='login-details__error--text'>This field is required</p>
							</div>
							)}
						</div>
						<div className="login-details__btn-container">
							<div className="login-details__btn-wrapper--cancel"><button type="button" className='login-details__btn--cancel' onClick={()=>{navigate(`/`)}}>Cancel</button></div>
							<div className="login-details__btn-wrapper--submit"><button type="button" className='login-details__btn--submit' onClick={()=>{navigate(`/signup`)}}>Sign Up Instead</button></div>
							<div className="login-details__btn-wrapper--submit"><button type="submit" className='login-details__btn--submit'>Login</button></div>
						</div>
					</form>
				</section>
			</main>
		</>
	);
}