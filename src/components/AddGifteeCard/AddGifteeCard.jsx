import './AddGifteeCard.scss';
import backArrow from "../../assets/icons/arrow_back-24px.svg"
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
const { v4: uuid } = require("uuid");

const API_URL = process.env.REACT_APP_SERVER_URL || '';


export default function AddGifteeCard() {
	const navigate = useNavigate();


	const [name, setName] = useState('')
	const [relationship, setRelationship] = useState('')
	const [birthday, setBirthday] = useState('')
	const [nextHoliday, setNextHoliday] = useState('')
	const [nextHolidayDate, setNextHolidayDate] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [address, setAddress] = useState('')
	const [giftFormOptIn, setGiftFormOptIn] = useState('')

	const [nameError, setNameError] = useState(null)
	const [relationshipError, setRelationshipError] = useState(null)
	const [birthdayError, setBirthdayError] = useState(null)
	const [nextHolidayError, setNextHolidayError] = useState(null)
	const [nextHolidayDateError, setNextHolidayDateError] = useState(null)
	const [emailError, setEmailError] = useState(null)
	const [phoneError, setPhoneError] = useState(null)
	const [addressError, setAddressError] = useState(null)
	const [giftFormOptInError, setGiftFormOptInError] = useState(null)

	function validatecontact_phoneNumber(number) {
		const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
		return re.test(number);
	}

	function validatecontact_email(contact_email) {
		const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]*$/;
		return re.test(contact_email);
	}

	useEffect(() => {
		if (name === '') {
			setNameError(true)
		} else {
			setNameError(null)
		}
	},[name])

	useEffect(() => {
		if (relationship === '') {
			setRelationshipError(true)
		} else {
			setRelationshipError(null)
		}
	},[relationship])

	useEffect(() => {
		if (birthday === '') {
			setBirthdayError(true)
		} else {
			setBirthdayError(null)
		}
	},[birthday])

	useEffect(() => {
		if (nextHoliday === '') {
			setNextHolidayError(true)
		} else {
			setNextHolidayError(null)
		}
	},[nextHoliday])

	useEffect(() => {
		if (nextHolidayDate === '') {
			setNextHolidayDateError(true)
		} else {
			setNextHolidayDateError(null)
		}
	},[nextHolidayDate])

	useEffect(() => {
		if (validatecontact_email(email) === false || email === '') {
			setEmailError(true)
		} else {
			setEmailError(null)
		}
	},[email])

	useEffect(() => {
		if (validatecontact_phoneNumber(phone) === false || phone === '') {
			setPhoneError(true)
		} else {
			setPhoneError(null)
		}
	},[phone])

	useEffect(() => {
		if (address === '') {
			setAddressError(true)
		} else {
			setAddressError(null)
		}
	},[address])

	useEffect(() => {
		if (giftFormOptIn === '') {
			setGiftFormOptInError(true)
		} else {
			setGiftFormOptInError(null)
		}
	},[giftFormOptIn])

	const handleAddGiftee = (e) => {
		e.preventDefault()

		if (
			nameError === true ||
			relationshipError === true ||
			birthdayError === true ||
			nextHolidayError === true ||
			nextHolidayDateError === true ||
			emailError === true ||
			phoneError === true ||
			addressError === true ||
			giftFormOptInError === true
		) {
			console.log(`missing required data to post new giftee`)
		} else {
			axios
			.post(`${API_URL}/giftees`, {
				giftee_id: uuid(),
				user_id: `c2186be8-4195-4745-9627-b4c83d1d6307`,
				name: name, 
				relationship: relationship, 
				birthday: birthday,
				next_holiday: nextHoliday,
				next_holiday_date: nextHolidayDate,
				email: email,
				phone: phone,
				address: address,
				gift_form_opt_in: giftFormOptIn
			})
			.then((response) => {
				console.log(response.data)
			})
			.catch((err) => {
				console.log(err)
			})
		}
	}

	return (
		<>
			<main className='add-giftee'>
				<section className='add-giftee__header'>
					<div className='add-giftee__header-wrapper'>
						<Link to={`/`}><img className='add-giftee__back-arrow' src={backArrow} alt="Back arrow to home dashboard" /></Link>
						<h1 className='add-giftee__headingr'>Add Giftee</h1>
					</div>
					<form onSubmit={handleAddGiftee}>
						<div className='giftee-details__wrapper'>
							<h2 className='giftee-details__heading'>Giftee Details</h2>
							<label htmlFor='name' className='giftee-details__label'>Name</label>
							<input type="text" id='name' name='name' className='giftee-details__input' value={name} placeholder='Name' onChange={(e)=>{setName(e.target.value)}} />
							<label htmlFor="relationship" className='giftee-details__label'>Relationship</label>
							<input type="text" id='relationship' name='relationship' className='giftee-details__input' value={relationship} placeholder='Relationshop' onChange={(e)=>{setRelationship(e.target.value)}} />
							<label htmlFor="birthday" className='giftee-details__label'>Birthday</label>
							<input type="text" id='birthday' name='birthday' className='giftee-details__input' value={birthday} placeholder='Birthday (Month, Day)' onChange={(e)=>{setBirthday(e.target.value)}} />
							<label htmlFor="next_holiday" className='giftee-details__label'>Next Holiday</label>
							<input type="text" id='next_holiday' name='next_holiday' className='giftee-details__input' value={nextHoliday} placeholder='Holiday' onChange={(e)=>{setNextHoliday(e.target.value)}} />
							<label htmlFor="next_holiday_date" className='giftee-details__label'>Date of Next Holiday</label>
							<input type="text" id='next_holiday_date' name='next_holiday_date' className='giftee-details__input' value={nextHolidayDate} placeholder='Next Holiday Date (Month, Day)' onChange={(e)=>{setNextHolidayDate(e.target.value)}} />
						</div>
						<div className='giftee-details__wrapper'>
							<h2 className='giftee-details__heading'>Contact Details</h2>
							<label htmlFor='email' className='giftee-details__label'>Email</label>
							<input type="text" id='email' name='email' className='giftee-details__input' value={email} placeholder='example@example.com' onChange={(e)=>{setEmail(e.target.value)}} />
							<label htmlFor='phone' className='giftee-details__label'>Phone Number (Optional)</label>
							<input type="text" id='phone' name='phone' className='giftee-details__input' value={phone} placeholder='+1 (234) 567-8901' onChange={(e)=>{setPhone(e.target.value)}} />
							<label htmlFor='address' className='giftee-details__label'>Address (Optional)</label>
							<input type="text" id='address' name='address' className='giftee-details__input' value={address} placeholder='address' onChange={(e)=>{setAddress(e.target.value)}} />
							<label htmlFor='gift_form_opt_in' className='giftee-details__label'>Opt-in Gift Form</label>
							<label htmlFor='gift_form_opt_in-yes' className='giftee-details__radio-label'><input type="radio" id='gift_form_opt_in-yes' name='gift_form_opt_in' className='giftee-details__radio' value='yes' onChange={(e)=>{setGiftFormOptIn(e.target.value)}} />Yes</label>
							<label htmlFor='gift_form_opt_in-no' className='giftee-details__radio-label'><input type="radio" id='gift_form_opt_in-no' name='gift_form_opt_in' className='giftee-details___radio' value='no' onChange={(e)=>{setGiftFormOptIn(e.target.value)}} />No</label>
						</div>
						<div className='giftee-details__btn-container'>
							<div className='giftee-details__btn-wrapper--cancel'><button type="button" className='giftee-details__btn--cancel'>Cancel</button></div>
							<div className='giftee-details__btn-wrapper--submit'><button type="submit" className='giftee-details__btn--submit'>Save</button></div>
						</div>
					</form>
				</section>
			</main>
		</>
	);
}