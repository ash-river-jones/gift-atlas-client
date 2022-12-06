import './GifteeProfileCard.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import rightArrow from '../../assets/icons/chevron_right-24px.svg';

import calcDaysTo from "../../utils/utils"

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_URL = process.env.REACT_APP_SERVER_URL || '';


export default function GifteeProfileCard({ giftee_id, address, birthday, email, gift_form_opt_in, name, next_holiday, next_holiday_date, phone, relationship, user_id }) {
	const [purchasedGifts, setPurchasedGifts] = useState([])
    const [hasPurchasedGifts, setHasPurchasedGifts] = useState(false)

    const holidaySplit = next_holiday_date.toLowerCase().split(" ")
    const [holidayMonth, setHolidayMonth] = useState(holidaySplit[0].slice(0,3))
    const [holidayDay, setHolidayDay] = useState(holidaySplit[1])

    const birthdaySplit = birthday.toLowerCase().split(" ")

    const [birthdayMonth, setBirthdayMonth] = useState(birthdaySplit[0].slice(0,3))
    const [birthdayDay, setBirthdayDay] = useState(birthdaySplit[1])

    var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]

    useEffect(() => {
        axios
            .get(`${API_URL}/giftees/${giftee_id}/purchased`)
            .then((response) => {
                if (response.data[0]) {
                    setPurchasedGifts(response.data[0])
                    setHasPurchasedGifts(true)
                } else {
                    setPurchasedGifts([])
                    setHasPurchasedGifts(false)
                }
            })
    }, [giftee_id])

    useEffect(() => {
        setBirthdayMonth(months.indexOf(birthdayMonth))
        setBirthdayDay(+birthdayDay)
        setHolidayMonth(months.indexOf(holidayMonth))
        setHolidayDay(+holidayDay)
    },[birthday,next_holiday_date])

    return (
		<>
			<section className='profile'>
                <ul className='profile__side'>
                    <li className='profile__section'>   
                        <h4 className='profile__table-heading'>NAME</h4>
                        <Link to={`/${giftee_id}`}><div className='profile__info-section'><p className='profile__name'>{name}</p><img src={rightArrow} alt="right arrow" /></div></Link>
                    </li>
                    <li className='profile__section'>   
                        <h4 className='profile__table-heading'>BIRTHDAY</h4>
                        <div className='profile__info-section'><p className='profile__info'>{birthday}</p></div>
                    </li>
                    <li className='profile__section'>   
                        <h4 className='profile__table-heading'>NEXT HOLIDAY</h4>
                        <div className='profile__info-section'><p className='profile__info'>{next_holiday}</p></div>
                    </li>
                    {hasPurchasedGifts ? 
                    <li className='profile__section'>   
                        <h4 className='profile__table-heading'>GIFT STATUS</h4>
                        <div className='profile__info-section'><p className='profile__info profile__order-status'>Ordered/Purchasde</p></div>
                    </li> : <></>
                    }
                    <li className='profile__section'>   
                        <div className='profile__info-section profile__delete'><Link to={`/${giftee_id}/delete`}><img src={deleteIcon} alt="Delete Giftee Icon" /></Link></div>
                    </li>
                </ul>
                <ul className='profile__side'>
                <li className='profile__section'>   
                        <h4 className='profile__table-heading'>RELATIONSHIP</h4>
                        <div className='profile__info-section'><p className='profile__info'>{relationship}</p></div>
                    </li>
                    <li className='profile__section'>   
                        <h4 className='profile__table-heading'>DAYS TO BIRTHDAY</h4>
                        <div className='profile__info-section'><p className='profile__info'>{calcDaysTo(birthdayMonth, birthdayDay)}</p></div>
                    </li>
                    <li className='profile__section'>   
                        <h4 className='profile__table-heading'>DAYS UNTIL</h4>
                        <div className='profile__info-section'><p className='profile__info'>{calcDaysTo(holidayMonth, holidayDay)}</p></div>
                    </li>
                    {hasPurchasedGifts ? 
                    <li className='profile__section'>   
                        <h4 className='profile__table-heading'>GIFT PURCHASED</h4>
                        <div className='profile__info-section'><p className='profile__info'>{purchasedGifts.item_name}</p></div>
                    </li>: <></>
                    }
                    <li className='profile__section'>   
                        <div className='profile__info-section profile__edit'><Link to={`/${giftee_id}/edit`}><img src={editIcon} alt="Edit Giftee Icon" /></Link></div>
                    </li>
                </ul>
            </section>
		</>
	);
}