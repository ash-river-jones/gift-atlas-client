import './EditGifteeDetailsCard.scss';
import backArrow from "../../assets/icons/arrow_back-24px.svg"
import error from '../../assets/icons/error-24px.svg'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

const API_URL = process.env.REACT_APP_SERVER_URL || '';

export default function EditGifteeDetailsCard() {
	const giftee_id_obj = useParams()
	const giftee_id = giftee_id_obj.giftee_id
	const navigate = useNavigate();
	const [gifteeData, setGifteeData] = useState({})

	useEffect(() => {
		axios
		.get(`${API_URL}/giftees/${giftee_id}`)
		.then((response) => {
			setGifteeData(response.data[0])
		})
	},[giftee_id])

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

	useEffect(() => {
		setName(gifteeData.name)
		setRelationship(gifteeData.relationship)
		setBirthday(gifteeData.birthday)
		setNextHoliday(gifteeData.next_holiday)
		setNextHolidayDate(gifteeData.next_holiday_date)
		setEmail(gifteeData.email)
		setPhone(gifteeData.phone)
		setAddress(gifteeData.address)
		setGiftFormOptIn(gifteeData.gift_form_opt_in)
	}, [gifteeData])

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

	const handleEditGiftee = (e) => {
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
			alert(`missing required data to update giftee`)
		} else {
			axios
			.put(`${API_URL}/giftees/${giftee_id}`, {
				giftee_id: giftee_id,
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
			.then(() => {
				navigate('/')
			})
			.catch((err) => {
				console.log(err)
			})
		}
	}

	return (
		<>
			<main className='edit-giftee'>
				<section className='edit-giftee__header'>
					<div className='edit-giftee__header-wrapper'>
						<Link to={`/`}><img className='edit-giftee__back-arrow' src={backArrow} alt="Back arrow to home dashboard" /></Link>
						<h1 className='edit-giftee__heading'>Edit Giftee</h1>
					</div>
					<form onSubmit={handleEditGiftee}>
						<div className='edit-giftee-details__wrapper'>
							<h2 className='edit-giftee-details__heading'>Giftee Details</h2>
							<label htmlFor='name' className='edit-giftee-details__label'>Name</label>
							<input type="text" id='name' name='name' className='edit-giftee-details__input' value={name} placeholder='Name' onChange={(e)=>{setName(e.target.value)}} />
							{nameError && (
							<div className='edit-giftee-details__error-wrapper'>
								<img className='edit-giftee-details__error-img' src={error} alt='' />
								<p className='edit-giftee-details__error--text'>This field is required</p>
							</div>
							)}
							<label htmlFor="relationship" className='edit-giftee-details__label'>Relationship</label>
							<input type="text" id='relationship' name='relationship' className='edit-giftee-details__input' value={relationship} placeholder='Relationshop' onChange={(e)=>{setRelationship(e.target.value)}} />
							{relationshipError && (
							<div className='edit-giftee-details__error-wrapper'>
								<img className='edit-giftee-details__error-img' src={error} alt='' />
								<p className='edit-giftee-details__error--text'>This field is required</p>
							</div>
							)}
							<label htmlFor="birthday" className='edit-giftee-details__label'>Birthday</label>
							<input type="text" id='birthday' name='birthday' className='edit-giftee-details__input' value={birthday} placeholder='Birthday (Month, Day)' onChange={(e)=>{setBirthday(e.target.value)}} />
							{birthdayError && (
							<div className='edit-giftee-details__error-wrapper'>
								<img className='edit-giftee-details__error-img' src={error} alt='' />
								<p className='edit-giftee-details__error--text'>This field is required</p>
							</div>
							)}
							<label htmlFor="next_holiday" className='edit-giftee-details__label'>Next Holiday</label>
							<input type="text" id='next_holiday' name='next_holiday' className='edit-giftee-details__input' value={nextHoliday} placeholder='Holiday' onChange={(e)=>{setNextHoliday(e.target.value)}} />
							{nextHolidayError && (
							<div className='edit-giftee-details__error-wrapper'>
								<img className='edit-giftee-details__error-img' src={error} alt='' />
								<p className='edit-giftee-details__error--text'>This field is required</p>
							</div>
							)}
							<label htmlFor="next_holiday_date" className='edit-giftee-details__label'>Date of Next Holiday</label>
							<input type="text" id='next_holiday_date' name='next_holiday_date' className='edit-giftee-details__input' value={nextHolidayDate} placeholder='Next Holiday Date (Month, Day)' onChange={(e)=>{setNextHolidayDate(e.target.value)}} />
							{nextHolidayDateError && (
							<div className='edit-giftee-details__error-wrapper'>
								<img className='edit-giftee-details__error-img' src={error} alt='' />
								<p className='edit-giftee-details__error--text'>This field is required</p>
							</div>
							)}
						</div>
						<div className='edit-giftee-details__wrapper'>
							<h2 className='edit-giftee-details__heading'>Contact Details</h2>
							<label htmlFor='email' className='edit-giftee-details__label'>Email</label>
							<input type="text" id='email' name='email' className='edit-giftee-details__input' value={email} placeholder='example@example.com' onChange={(e)=>{setEmail(e.target.value)}} />
							{emailError && (
							<div className='edit-giftee-details__error-wrapper'>
								<img className='edit-giftee-details__error-img' src={error} alt='' />
								<p className='edit-giftee-details__error--text'>This field is required</p>
							</div>
							)}
							<label htmlFor='phone' className='edit-giftee-details__label'>Phone Number (Optional)</label>
							<input type="text" id='phone' name='phone' className='edit-giftee-details__input' value={phone} placeholder='+1 (234) 567-8901' onChange={(e)=>{setPhone(e.target.value)}} />
							<label htmlFor='address' className='edit-giftee-details__label'>Address (Optional)</label>
							<input type="text" id='address' name='address' className='edit-giftee-details__input' value={address} placeholder='Address' onChange={(e)=>{setAddress(e.target.value)}} />
							<label htmlFor='gift_form_opt_in' className='edit-giftee-details__label'>Opt-in Gift Form</label>
							<div className="edit-giftee-details__radio-wrapper">
								<div className='edit-giftee-details__radio-container'><input type="radio" id='gift_form_opt_in-yes' name='gift_form_opt_in' className='edit-giftee-details__radio' value='Yes' checked={giftFormOptIn === "Yes" ? true : false} onChange={(e)=>{setGiftFormOptIn(e.target.value)}} /><label htmlFor='gift_form_opt_in-yes' className='edit-giftee-details__radio-label'>Yes</label></div>
								<div className='edit-giftee-details__radio-container'><input type="radio" id='gift_form_opt_in-no' name='gift_form_opt_in' className='edit-giftee-details___radio' value='No' checked={giftFormOptIn === "No" ? true : false} onChange={(e)=>{setGiftFormOptIn(e.target.value)}} /><label htmlFor='gift_form_opt_in-no' className='edit-giftee-details__radio-label'>No</label></div>
							</div>
							{giftFormOptInError && (
							<div className='edit-giftee-details__error-wrapper'>
								<img className='edit-giftee-details__error-img' src={error} alt='' />
								<p className='edit-giftee-details__error--text'>This field is required</p>
							</div>
							)}
						</div>
						<div className='edit-giftee-details__btn-container'>
							<div className='edit-giftee-details__btn-wrapper--cancel'><button type="button" className='edit-giftee-details__btn--cancel' onClick={()=>{navigate(`/${giftee_id}`)}} >Cancel</button></div>
							<div className='edit-giftee-details__btn-wrapper--submit'><button type="submit" className='edit-giftee-details__btn--submit'>Save</button></div>
						</div>
					</form>
				</section>
			</main>
		</>
	);
}