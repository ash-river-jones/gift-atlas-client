import './GifteeProfileCard.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import rightArrow from '../../assets/icons/chevron_right-24px.svg';


import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_URL = process.env.REACT_APP_SERVER_URL || '';


export default function GifteeProfileCard({ giftee_id, address, birthday, email, gift_form_opt_in, name, next_holiday, next_holiday_date, phone, relationship, user_id }) {
	const [purchasedGifts, setPurchasedGifts] = useState([])
    const [hasPurchasedGifts, setHasPurchasedGifts] = useState(false)
    const [daysToBirthday, setDaysToBirthday] = useState('mock data')
    const [daysToNextHoliday, setDaysToNextHoliday] = useState('mock data')

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
                        <div className='profile__info-section'><p className='profile__info profile__order-status'>{next_holiday}</p></div>
                    </li>
                    {hasPurchasedGifts ? 
                    <li className='profile__section'>   
                        <h4 className='profile__table-heading'>GIFT STATUS</h4>
                        <div className='profile__info-section'><p className='profile__info'>Ordered/Purchasde</p></div>
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
                        <div className='profile__info-section'><p className='profile__info'>{daysToBirthday}</p></div>
                    </li>
                    <li className='profile__section'>   
                        <h4 className='profile__table-heading'>DAYS UNTIL</h4>
                        <div className='profile__info-section'><p className='profile__info'>{daysToNextHoliday}</p></div>
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