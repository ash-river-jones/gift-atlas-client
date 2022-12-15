import './GifteeRequestFormCard.scss';
import backArrow from "../../assets/icons/arrow_back-24px.svg"
import error from '../../assets/icons/error-24px.svg'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const { v4: uuid } = require("uuid");

const API_URL = process.env.REACT_APP_SERVER_URL || '';


export default function GifteeRequestFormCard() {
	const navigate = useNavigate();
	const params_obj = useParams()
	const giftee_id = params_obj.giftee_id
	const user_id = params_obj.user_id

	const [itemName, setItemName] = useState('')
	const [itemDescription, setItemDescription] = useState('')
	const [retailer, setRetailer] = useState('')
	const [productLink, setProductLink] = useState('')
	const [price, setPrice] = useState('')

	const [itemNameError, setItemNameError] = useState(null)
	const [itemDescriptionError, setItemDescriptionError] = useState(null)
	const [retailerError, setRetailerError] = useState(null)
	const [_productLinkError, setProductLinkError] = useState(null)
	const [priceError, setPriceError] = useState(null)

	useEffect(() => {
		if (itemName === '') {
			setItemNameError(true)
		} else {
			setItemNameError(null)
		}
	},[itemName])

	useEffect(() => {
		if (itemDescription === '') {
			setItemDescriptionError(true)
		} else {
			setItemDescriptionError(null)
		}
	},[itemDescription])

	useEffect(() => {
		if (retailer === '') {
			setRetailerError(true)
		} else {
			setRetailerError(null)
		}
	},[retailer])

	useEffect(() => {
		if (productLink === '') {
			setProductLinkError(true)
		} else {
			setProductLinkError(null)
		}
	},[productLink])

	useEffect(() => {
		if (price === '' || isNaN(price)) {
			setPriceError(true)
		} else {
			setPriceError(null)
		}
	},[price])

	const handelAddGift = (e) => {
		e.preventDefault()

		if (
			itemNameError === true ||
			itemDescriptionError === true ||
			retailerError === true ||
			priceError === true
		) {
			alert(`missing required data to post new gift`)
		} else {
			axios
				.post(`${API_URL}/gifts/${user_id}/${giftee_id}`,{
					gift_id: uuid(),
					giftee_id: giftee_id,
					user_id: user_id,
					item_name: itemName,
					item_description: itemDescription,
					retailer: retailer,
					product_link: productLink,
					price: price, 
					gift_status: 'Not Purchased',
					order_number: '',
					tracking_number: ''
				})
				.then(() => {
					navigate(`/`)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}


	return (
		<>
			<main className="giftee-add-gift">
				<section className='giftee-add-gift__header'>
					<div className='giftee-add-gift__header-wrapper'>
						<Link to={`/`}><img className='giftee-add-gift__back-arrow' src={backArrow} alt="Back arrow to giftee profile" /></Link>
						<h1 className='giftee-add-gift__heading'>Submit Gift Request</h1>
					</div>
					<form onSubmit={handelAddGift}>
						<div className="giftee-add-gift-details__wrapper">
							<h2 className="giftee-add-gift-details__heading">Gift Details</h2>
							<label htmlFor="item_name" className='giftee-add-gift-details__label'>Item Name</label>
							<input type="text" name="item_name" id="item_name" className='giftee-add-gift-details__input' value={itemName} placeholder='Item Name' onChange={(e)=>{setItemName(e.target.value)}}/>
							{itemNameError && (
							<div className='giftee-add-gift-details__error-wrapper'>
								<img className='giftee-add-gift-details__error-img' src={error} alt='' />
								<p className='giftee-add-gift-details__error--text'>This field is required</p>
							</div>
							)}
							<div className="giftee-add-gift-details__bottom-wrapper">
								<div className="giftee-add-gift-details__bottom-side">
									<label htmlFor="item_description" className='giftee-add-gift-details__label'>Item Description</label>
									<textarea name="item_description" id="item_description" cols="30" rows="10" className='giftee-add-gift-details__text-area' value={itemDescription} placeholder='Please enter a breif item description...' onChange={(e) => {setItemDescription(e.target.value)}}></textarea>
									{itemDescriptionError && (
									<div className='giftee-add-gift-details__error-wrapper'>
										<img className='giftee-add-gift-details__error-img' src={error} alt='' />
										<p className='giftee-add-gift-details__error--text'>This field is required</p>
									</div>
									)}
								</div>
								<div className="giftee-add-gift-details__bottom-side">
									<label htmlFor="retailer" className='giftee-add-gift-details__label'>Retailer</label>
									<input type="text" name="retailer" id="retailer" className='giftee-add-gift-details__input' value={retailer} placeholder='Retailer' onChange={(e) => {setRetailer(e.target.value)}}/>
									{retailerError && (
									<div className='giftee-add-gift-details__error-wrapper'>
										<img className='giftee-add-gift-details__error-img' src={error} alt='' />
										<p className='giftee-add-gift-details__error--text'>This field is required</p>
									</div>
									)}
									<label htmlFor="price" className='giftee-add-gift-details__label'>Price</label>
									<input type="text" name="price" id="price" className='giftee-add-gift-details__input' value={price} placeholder='$' onChange={(e) => {setPrice(e.target.value)}}/>
									{priceError && (
									<div className='giftee-add-gift-details__error-wrapper'>
										<img className='giftee-add-gift-details__error-img' src={error} alt='' />
										<p className='giftee-add-gift-details__error--text'>This field is required to be a number</p>
									</div>
									)}
									<label htmlFor="product_link" className='giftee-add-gift-details__label'>Product Link</label>
									<input type="text" name="product_link" id="product_link" className='giftee-add-gift-details__input' value={productLink} placeholder='Product Link' onChange={(e) => {setProductLink(e.target.value)}}/>
								</div>
							</div>
						</div>
						<div className='giftee-add-gift-details__btn-container'>
							<div className='giftee-add-gift-details__btn-wrapper--cancel'><button type="button" className='giftee-add-gift-details__btn--cancel' onClick={()=>{navigate(`/`)}}>Cancel</button></div>
							<div className='giftee-add-gift-details__btn-wrapper--submit'><button type="submit" className='giftee-add-gift-details__btn--submit'>Save</button></div>
						</div>
					</form>
				</section>
			</main>
		</>
	);
}