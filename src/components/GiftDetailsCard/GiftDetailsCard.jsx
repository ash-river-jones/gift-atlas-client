import './GiftDetailsCard.scss';
import backArrow from "../../assets/icons/arrow_back-24px.svg"
import editIcon from '../../assets/icons/edit-24px-inverted.svg'

import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_SERVER_URL || '';


export default function GiftDetailsCard() {
	const navigate = useNavigate()
	const params_obj = useParams()
	const gift_id = params_obj.gift_id
	const giftee_id = params_obj.giftee_id

	const [productLink, setProductLink] = useState('')

	const [giftData, setGiftData] = useState({})
	const [gifteeData, setGifteeData] = useState({})

	useEffect(() => {
		axios
		.get(`${API_URL}/giftees/${giftee_id}`)
		.then((response) => {
			setGifteeData(response.data[0])
		})

		axios
		.get(`${API_URL}/gifts/${gift_id}`)
		.then((response) => {
			setGiftData(response.data[0])
			setProductLink(response.data[0].product_link)
		})
	},[])

	useEffect(() => {
		if(!productLink.includes(`https://`)){
			setProductLink(`https://${productLink}`)
		}
	},[productLink])

	

	return (
		<>
			<main className='gift-details'>
				<section className='gift-details__header'>
					<div className='gift-details__header-wrapper'>
						<Link to={`/${giftee_id}`}><img className='gift-details__back-arrow' src={backArrow} alt="Back arrow to giftee profile" /></Link>
						<div className='gift-details__heading-container'>
							<h1 className="gift-details__heading">{giftData.item_name}</h1>						</div>
						<div className='gift-details__heading-container--edit'>
							<Link to={`/${giftee_id}/${gift_id}/edit`}><div className='gift-details__edit-wrapper'><img className='gift-details__edit-idon' src={editIcon} alt="edit-gift" /></div></Link>
						</div>
					</div>
					<div className='gift-details__wrapper'>
						<div className='gift-details__top'>
							<h4 className='gift-details__label'>ITEM DESCRIPTION</h4>
							<p className='gift-details__info--desc'>{giftData.item_description}</p>
						</div>
						<div className="gift-details__bottom">
							<div className='gift-details__side'>
								<h4 className='gift-details__label'>RETAILER</h4>
								<p className="gift-details__info">{giftData.retailer}</p>
								<h4 className='gift-details__label'>STATUS</h4>
								<p className="gift-details__info">{giftData.gift_status}</p>
								<h4 className='gift-details__label'>GIFTEE</h4>
								<p className="gift-details__info">{gifteeData.name}</p>
							</div>
							<div className='gift-details__side'>
								<h4 className='gift-details__label'>PRICE</h4>
								<p className="gift-details__info">{giftData.price}</p>
								<h4 className='gift-details__label'>ORDER NUMBER</h4>
								<p className="gift-details__info">{giftData.order_number}</p>
								<h4 className='gift-details__label'>TRACKING NUMBER</h4>
								<p className="gift-details__info">{giftData.tracking_number}</p>
							</div>
						</div>
						<div>
							<h4 className='gift-details__label'>PRODUCT LINK (Click here for website)</h4>
							<a className="gift-details__info--link" href={productLink}>{giftData.product_link}</a>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}