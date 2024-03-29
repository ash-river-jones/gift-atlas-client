import './RequestGiftFormCard.scss';
import backArrow from "../../assets/icons/arrow_back-24px.svg"
import { Link, useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';

const API_URL = process.env.REACT_APP_SERVER_URL || '';
const CLIENT_URL = process.env.REACT_APP_CLIENT_URL || '';
const emailjs_service_id = process.env.REACT_APP_emailjs_service_id || '';
const emailjs_public_key = process.env.REACT_APP_emailjs_public_key || '';
const emailjs_template_budget = process.env.REACT_APP_emailjs_template_budget || '';
const emailjs_template_no_budget = process.env.REACT_APP_emailjs_template_no_budget || '';

export default function RequestGiftFormCard() {
	const token = sessionStorage.authToken
	const navigate = useNavigate()
	const params_obj = useParams()
	const gifteeID = params_obj.giftee_id

	const [gifteeData, setGifteeData] = useState({})
	const [userData, setUserData] = useState({})
	const [budgetDefined, setBudgetDefined] = useState("false")
	const [gifteeName, setGifteeName] = useState('')
	const [userName, setUserName] = useState('')
	const [userID, setUserID] = useState('')
	const [giftBudget, setGiftBudget] = useState('')
	const [userEmail, setUserEmail] = useState('')
	const [gifteeEmail, setGifteeEmail] = useState('')
	const [message, setMessage] = useState('')

	useEffect(() => {
		axios
			.get(`${API_URL}/giftees/${gifteeID}`,{
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then((response) => {
				setGifteeData(response.data[0])
			})
	},[gifteeID, token])

	useEffect(() => {
		if(gifteeData){
			setUserID(gifteeData.user_id)
			setGifteeName(gifteeData.name)
			setGifteeEmail(gifteeData.email)	
		}
	},[gifteeData, token])

	useEffect(() => {
		if (userID) {
		axios
			.get(`${API_URL}/users/${userID}`,{
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then((response) => {
				setUserData(response.data[0])
			})
		}
	},[userID, token])

	useEffect(() => {
		if(userData){
			setUserName(userData.user_name)
			setUserEmail(userData.email)
		}
	},[userData])
	

	const emailParamsBudget = {
		giftee_name: gifteeName,
		user_name: userName,
		message: message,
		client_link: CLIENT_URL,
		user_id: userID,
		giftee_id: gifteeID,
		gift_budget: giftBudget,
		giftee_email: gifteeEmail,
		user_email: userEmail
	}
	const emailParamsNoBudget = {
		giftee_name: gifteeName,
		user_name: userName,
		message: message,
		client_link: CLIENT_URL,
		user_id: userID,
		giftee_id: gifteeID,
		gift_budget: giftBudget,
		giftee_email: gifteeEmail,
		user_email: userEmail
	}

	const sendEmailBudget = (e) => {
		e.preventDefault();
		emailjs.send(emailjs_service_id, emailjs_template_budget, emailParamsBudget, emailjs_public_key)
			.then(function(response) {
				navigate('/dashboard')
			}, function(error) {
				alert('FAILED...', error);
			})
	};
	const sendEmailNoBudget = (e) => {
		e.preventDefault();
		emailjs.send(emailjs_service_id, emailjs_template_no_budget, emailParamsNoBudget, emailjs_public_key)
			.then(function(response) {
				navigate('/dashboard')
			}, function(error) {
				alert('FAILED...', error);
			})
	};

	
	return (
		<>
			<main className="request-gift">
				<section className='request-gift__header'>
					<div className="request-gift__header-wrapper">
						<Link to={'/dashboard'}><img className='request-gift__back-arrow' src={backArrow} alt="Back arrow to giftee profile" /></Link>
						<h1 className="request-gift__heading">Request a Gift Idea</h1>
					</div>
				</section>

				<form onSubmit={budgetDefined === 'true' ?  sendEmailBudget : sendEmailNoBudget}>
					<div className="request-gift-details__wrapper">
						<h2 className="request-gift-details__heading">Send an email to {gifteeName} so they can send their gift idea.</h2>

						<label htmlFor="message" className='request-gift-details__label'>Enter a message here for {gifteeName}</label>
						<textarea name="message" id="message" cols="30" rows="10" className='request-gift-details__text-area' value={message} placeholder={`Please enter a breif message to ${gifteeName}`}  onChange={(e) => {setMessage(e.target.value)}}></textarea>

						<label htmlFor='define_budget' className='request-gift-details__label'>Set a budget for this gift:</label>
						<div className="request-gift-details__radio-wrapper">
							<label htmlFor="define_budget" className='request-gift-details__radio-label'><input type="radio" name="define_budget" id="define_budget-yes" className='request-gift-details__radio' value={'true'} checked={budgetDefined === 'true' ? true : false} onChange={(e)=>{setBudgetDefined(e.target.value)}}/>Yes</label>
							<label htmlFor="define_budget" className='request-gift-details__radio-label'><input type="radio" name="define_budget" id="define_budget-no" className='request-gift-details__radio' value={'false'} checked={budgetDefined === 'true' ? false : true} onChange={(e)=>{setBudgetDefined(e.target.value)}} />No</label>
						</div>
						{budgetDefined === "true" ?
						<>
							<label htmlFor='gift_budget' className='request-gift-details__label'>Budget</label>
							<input type="text" name="gift_budget" id="gift_budget" className='request-gift-details__input' placeholder='$' onChange={(e)=>{setGiftBudget(e.target.value)}}/>
						</>
						:<></>}
					</div>
					<div className='hidden'>
							<label htmlFor='giftee_name' className='hidden'>Giftee Name</label>
							<input type="text" name="giftee_name" id="giftee_name" className='hidden' value={gifteeName} readOnly/>
							<label htmlFor='user_name' className='hidden'>User Name</label>
							<input type="text" name="user_name" id="user_name" className='hidden' value={userName} readOnly/>
							<label htmlFor='client_link' className='hidden'>Client Link</label>
							<input type="text" name="client_link" id="client_link" className='hidden' value={CLIENT_URL} readOnly/>
							<label htmlFor='user_id' className='hidden'>User ID</label>
							<input type="text" name="user_id" id="user_id" className='hidden' value={userID} readOnly/>
							<label htmlFor='giftee_id' className='hidden'>Giftee ID</label>
							<input type="text" name="giftee_id" id="giftee_id" className='hidden' value={gifteeID} readOnly/>
							<label htmlFor='giftee_email' className='hidden'>Giftee Email</label>
							<input type="text" name="giftee_email" id="giftee_email" className='hidden' value={gifteeEmail} readOnly/>
							<label htmlFor='user_email' className='hidden'>User Email</label>
							<input type="text" name="user_email" id="user_email" className='hidden' value={userEmail}readOnly/>
					</div>
					<div className='request-gift-details__btn-container'>
						<div className='request-gift-details__btn-wrapper--cancel'><button type="button" className='request-gift-details__btn--cancel' onClick={()=>{navigate(`/${gifteeID}`)}}>Cancel</button></div>
						<div className='request-gift-details__btn-wrapper--submit'><button type="submit" className='request-gift-details__btn--submit'>Send Email</button></div>
					</div>
				</form>
			</main>
		</>
	);
}