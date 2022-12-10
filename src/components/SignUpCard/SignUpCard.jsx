import './SignUpCard.scss';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';



const API_URL = process.env.REACT_APP_SERVER_URL || '';


export default function SignUpCard() {
	const navigate = useNavigate()

    const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const [nameError, setNameError] = useState(null)
	const [emailError, setEmailError] = useState(null)
	const [passwordError, setPasswordError] = useState(null)

	const handelSignUp = (e) => {
		e.preventDefault()

		if (emailError === true || passwordError === true || nameError === true) {
			alert('please provide your email and password')
		} else {
			axios.post(`${API_URL}/login/signup`, {
                user_name: name,
				email: email,
				password: password
			})
			.then((response) => {
				if (response.data.status === 200) {
					sessionStorage.authToken = response.data.token
					navigate('/dashboard')
				}
			})
			.catch((err) => {
				console.log(err)
			})
		}
	}

    useEffect(() => {
        if (name === '') {
            setNameError(true)
        } else {
            setNameError(false)
        }
    },[name])

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
			<main className='sign-up'>
				<section className='sign-up__header'>
					<div className='sign-up__header-wrapper'>
						<h1 className="sign-up__heading">Sign Up for Gift Atlas</h1>
					</div>
					<form onSubmit={handelSignUp}>
						<div className="sign-up-details__wrapper">
							<h2 className="sign-up-details__heading">Sign Up Details</h2>
							<label htmlFor="user_name" className='login-details__label'>Name</label>
							<input type="text" name='user_name' id='user_name' className='login-details__input' value={name} placeholder='FirstName LastName' onChange={(e)=>{setName(e.target.value)}} />
                            <label htmlFor="email" className='login-details__label'>Email</label>
							<input type="text" name='email' id='email' className='login-details__input' value={email} placeholder='example@example.com' onChange={(e)=>{setEmail(e.target.value)}} />
							<label htmlFor="password" className='login-details__label'>Password</label>
							<input type="text" name='password' id='password' className='login-details__input' value={email} placeholder='Enter your password' onChange={(e)=>{setPassword(e.target.value)}} />
						</div>
						<div className="sign-up-details__btn-container">
							<div className="sign-up-details__btn-wrapper--cancel"><button type="button" className='login-details__btn--cancel' onClick={()=>{navigate(`/about`)}}>Cancel</button></div>
							<div className="sign-up-details__btn-wrapper--submit"><button type="submit" className='login-details__btn--submit'>Login</button></div>
						</div>
					</form>
				</section>
			</main>
		</>
	);
}