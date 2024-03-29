import './GifteeDetailsPageCard.scss';
import GifteeDetailsCardMultiGift from '../GifteeDetailsCardMultiGift/GifteeDetailsCardMultiGift'
import GifteeDetailsCardSingleGift from '../GifteeDetailsCardSingleGift/GifteeDetailsCardSingleGift'
import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import calcDaysTo from '../../utils/utils'

import backArrow from '../../assets/icons/arrow_back-24px.svg'
import editIcon from '../../assets/icons/edit-24px-inverted.svg'

const API_URL = process.env.REACT_APP_SERVER_URL || '';

export default function GifteeDetailsPageCard() {
	const token = sessionStorage.authToken
	const [gifteeData, setGifteeData] = useState([])
	const [gifteeGifts, setGifteeGifts] = useState([])
	const [hasMultipleGifts, setHasMultipleGifts] = useState(false)
	const [hasZeroGifts, setHasZeroGifts] = useState(true)
	const [next_holiday_date, setNext_holiday_date] = useState('')
	const [birthday, setBirthday] = useState('')
	
	const {giftee_id} = useParams()


	useEffect(() => {
		axios
		.get(`${API_URL}/giftees/${giftee_id}`,{
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then((response) => {
			setGifteeData(response.data[0])
		})

		axios
		.get(`${API_URL}/giftees/${giftee_id}/gifts`,{
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then((response) => {
			setGifteeGifts(response.data)
		})
	},[giftee_id, token])

	useEffect(() => {
		if(gifteeGifts.length === 0) {
			setHasZeroGifts(true)
		} else if ( gifteeGifts.length === 1){
			setHasZeroGifts(false)
			setHasMultipleGifts(false)
			setGifteeGifts(gifteeGifts[0])
		} else if (gifteeGifts.length >= 2 ) {
			setHasZeroGifts(false)
			setHasMultipleGifts(true)
		}
		
	},[gifteeData, gifteeGifts, hasMultipleGifts])

	useEffect(() => {
		setNext_holiday_date(gifteeData.next_holiday_date)
		setBirthday(gifteeData.birthday)
	},[gifteeData]) 

	return (
		<>
			<main className='giftee-deets'>
				<section className="giftee-deets__header">
					<div className="giftee-deets__header-section"><Link className='giftee-deets__link' to={`/dashboard`}><img src={backArrow} alt="Back Arrow" /></Link><h1 className="giftee-deets__title">{gifteeData.name}</h1></div>
					<div className="giftee-deets__header-btn-wrapper"><div className="giftee-deets__header-section"><Link to={`/${giftee_id}/add`}><h3 className='giftee-deets__add-gift'>Add Gift</h3></Link></div>
					<div className="giftee-deets__header-section giftee-deets__edit"><Link to={`/${giftee_id}/edit`}><img src={editIcon} alt="Edit Giftee Button" className='giftee-deets__edit-icon'/></Link></div></div>
				</section>
				<section className='details'>
					<div className='details__side'>
						<div className='details__section'>
							<h4 className='details__subheader'>RELATIONSHIP</h4>
							<p className='details__info'>{gifteeData.relationship}</p>
						</div>
						<div className='details__section'>
							<h4 className='details__subheader'>BIRTHDAY</h4>
							<p className='details__info'>{gifteeData.birthday}</p>
							<p className='details__info'>{birthday?calcDaysTo(birthday):""} days away</p>
						</div>
					</div>
					<div className='details__side'>
						<div className='details__section'>
							<Link to={`/${giftee_id}/requestgift`}><h3 className='details__request-btn'>Request Gift Idea</h3></Link>
						</div>
						<div className='details__section'>
							<h4 className='details__subheader'>NEXT HOLIDAY</h4>
							<p className='details__info'>{gifteeData.next_holiday}</p>
							<p className='details__info'>{next_holiday_date?calcDaysTo(next_holiday_date):""} days away</p>
						</div>
					</div>
				</section>
				<section className='gifts'>
					{hasZeroGifts? <></> : hasMultipleGifts ? 
						gifteeGifts
							.map((data)=>{
								return(
								<div key={data.gift_id}>
									<GifteeDetailsCardMultiGift
										key={data.gift_id}
										gift_id={data.gift_id}
										giftee_id={data.giftee_id}
										user_id={data.user_id}
										gift_status={data.gift_status}
										item_description={data.item_description}
										item_name={data.item_name}
										order_number={data.order_number}
										price={data.price}
										product_link={data.product_link}
										retailer={data.retailer}
										tracking_number={data.tracking_number}
									/>
								</div>
							)})
					:
					<GifteeDetailsCardSingleGift 
						giftee_name={gifteeData.name}
						gift_id={gifteeGifts.gift_id}
						giftee_id={gifteeGifts.giftee_id}
						user_id={gifteeGifts.user_id}
						gift_status={gifteeGifts.gift_status}
						item_description={gifteeGifts.item_description}
						item_name={gifteeGifts.item_name}
						order_number={gifteeGifts.order_number}
						price={gifteeGifts.price}
						product_link={gifteeGifts.product_link}
						retailer={gifteeGifts.retailer}
						tracking_number={gifteeGifts.tracking_number}
					/>
					}
				</section>
			</main>
		</>
	);
}