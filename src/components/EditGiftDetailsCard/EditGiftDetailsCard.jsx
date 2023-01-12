import './EditGiftDetailsCard.scss';
import backArrow from "../../assets/icons/arrow_back-24px.svg"
import error from '../../assets/icons/error-24px.svg'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_SERVER_URL || '';

export default function EditGiftDetailsCard() {
	const token = sessionStorage.authToken
	const navigate = useNavigate();
	const params_obj = useParams()
	const giftee_id = params_obj.giftee_id
	const gift_id = params_obj.gift_id

	const [itemName, setItemName] = useState('')
	const [itemDescription, setItemDescription] = useState('')
	const [retailer, setRetailer] = useState('')
	const [productLink, setProductLink] = useState('')
	const [price, setPrice] = useState('')
	const [giftStatus, setGiftStatus] = useState('')
	const [orderNumber, setOrderNumber] = useState('')
	const [trackingNumber, setTrackingNumber] = useState('')
	const [gifteeID, setGifteeID] = useState('')

	const [itemNameError, setItemNameError] = useState(null)
	const [itemDescriptionError, setItemDescriptionError] = useState(null)
	const [retailerError, setRetailerError] = useState(null)
	const [productLinkError, setProductLinkError] = useState(null)
	const [priceError, setPriceError] = useState(null)
	const [giftStatusError, setGiftStatusError] = useState(null)
	const [orderNumberError, setOrderNumberError] = useState(null)
	const [trackingNumberError, setTrackingNumberError] = useState(null)
	const [gifteeIDError, setGifteeIDError] = useState(null)

	const [gifteeList, setGifteeList] = useState([])
	const [giftData, setGiftData] = useState({})

	useEffect(() => {
		axios
			.get(`${API_URL}/giftees`,{
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then((response) => {
				setGifteeList(response.data)
			})
			.catch((err) => {
				console.log(err)
			})

		axios
			.get(`${API_URL}/gifts/${gift_id}`,{
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then((response) => {
				setGiftData(response.data[0])
			})
			.catch((err) => {
				console.log(err)
			})
	},[gift_id, token])

	useEffect(() => {
		setItemName(giftData.item_name)
		setItemDescription(giftData.item_description)
		setRetailer(giftData.retailer)
		setProductLink(giftData.product_link)
		setPrice(giftData.price)
		setGiftStatus(giftData.gift_status)
		setOrderNumber(giftData.order_number)
		setTrackingNumber(giftData.tracking_number)
		setGifteeID(giftData.giftee_id)

	},[giftData])

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

	useEffect(() => {
		if (giftStatus === '') {
			setGiftStatusError(true)
		} else {
			setGiftStatusError(null)
		}
	},[giftStatus])

	useEffect(() => {
		if (orderNumber === '') {
			setOrderNumberError(true)
		} else {
			setOrderNumberError(null)
		}
	},[orderNumber])

	useEffect(() => {
		if (trackingNumber === '') {
			setTrackingNumberError(true)
		} else {
			setTrackingNumberError(null)
		}
	},[trackingNumber])
	
	useEffect(() => {
		if (gifteeID === '') {
			setGifteeIDError(true)
		} else {
			setGifteeIDError(null)
		}
	},[gifteeID])

	const handelEditGift = (e) => {
		e.preventDefault()
		if (
			itemNameError === true ||
			itemDescriptionError === true ||
			retailerError === true ||
			productLinkError === true ||
			priceError === true ||
			giftStatusError === true ||
			orderNumberError === true ||
			trackingNumberError === true ||
			gifteeIDError === true
		) {
			alert(`missing data required to update gift`)
		} else {
			axios
				.put(`${API_URL}/gifts/${gift_id}`, {
					gift_id: gift_id,
					giftee_id: gifteeID,
					user_id: `c2186be8-4195-4745-9627-b4c83d1d6307`,
					item_name: itemName,
					item_description: itemDescription,
					retailer: retailer,
					product_link: productLink,
					price: price, 
					gift_status: giftStatus,
					order_number: orderNumber,
					tracking_number: trackingNumber
				},{
					headers: {
						Authorization: `Bearer ${token}`
					}
				})
				.then(() => {
					navigate(`/${gifteeID}`)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}

	return (
		<>
			<main className="edit-gift">
				<section className='edit-gift__header'>
					<div className='edit-gift__header-wrapper'>
						<Link to={`/${giftee_id}`}><img className='edit-gift__back-arrow' src={backArrow} alt="Back arrow to giftee profile" /></Link>
						<h1 className='edit-gift__heading'>Edit Gift</h1>
					</div>
				</section>
				<form onSubmit={handelEditGift}>
					<div className="edit-gift-details">
						<div className="edit-gift-details__wrapper">
							<h2 className="edit-gift-details__heading">Gift Details</h2>
							<label htmlFor="item_name" className='edit-gift-details__label'>Item Name</label>
							<input type="text" name="item_name" id="item_name" className='edit-gift-details__input' value={itemName} placeholder='Item Name' onChange={(e)=>{setItemName(e.target.value)}}/>
							{itemNameError && (
							<div className='edit-gift-details__error-wrapper'>
								<img className='edit-gift-details__error-img' src={error} alt='' />
								<p className='edit-gift-details__error--text'>This field is required</p>
							</div>
							)}
							<label htmlFor="item_description" className='edit-gift-details__label'>Item Description</label>
							<textarea name="item_description" id="item_description" cols="30" rows="10" className='edit-gift-details__text-area' value={itemDescription} placeholder='Please enter a breif item description...' onChange={(e) => {setItemDescription(e.target.value)}}></textarea>
							{itemDescriptionError && (
							<div className='edit-gift-details__error-wrapper'>
								<img className='edit-gift-details__error-img' src={error} alt='' />
								<p className='edit-gift-details__error--text'>This field is required</p>
							</div>
							)}
							<label htmlFor="retailer" className='edit-gift-details__label'>Retailer</label>
							<input type="text" name="retailer" id="retailer" className='edit-gift-details__input' value={retailer} placeholder='Retailer' onChange={(e) => {setRetailer(e.target.value)}}/>
							{retailerError && (
							<div className='edit-gift-details__error-wrapper'>
								<img className='edit-gift-details__error-img' src={error} alt='' />
								<p className='edit-gift-details__error--text'>This field is required</p>
							</div>
							)}
							<label htmlFor="price" className='edit-gift-details__label'>Price</label>
							<input type="text" name="price" id="price" className='edit-gift-details__input' value={price} placeholder='$' onChange={(e) => {setPrice(e.target.value)}}/>
							{priceError && (
							<div className='edit-gift-details__error-wrapper'>
								<img className='edit-gift-details__error-img' src={error} alt='' />
								<p className='edit-gift-details__error--text'>This field is required to be a number</p>
							</div>
							)}
						</div>
						<div className="edit-gift-details__wrapper">
							<h2 className="edit-gift-details__heading">Gift Status</h2>
							<label htmlFor="gift_status" className='edit-gift-details__label'>Status</label>
							<label htmlFor="gift_status-not-purchased" className='edit-gift-details__radio-label'><input type="radio" name="gift_status" id="gift_status-not-purchased" className='edit-gift-details__radio' value='Not Purchased' checked={giftStatus === "Not Purchased" ? true : false} onChange={(e) => {setGiftStatus(e.target.value)}} />Not Purchased</label>
							<label htmlFor="gift_status-purchased" className='edit-gift-details__radio-label'><input type="radio" name="gift_status" id="gift_status-purchased" className='edit-gift-details__radio' value='Ordered/Purchased' checked={giftStatus === "Ordered/Purchased" ? true : false} onChange={(e) => {setGiftStatus(e.target.value)}} />Ordered/Purchased</label>
							{giftStatusError && (
							<div className='edit-gift-details__error-wrapper'>
								<img className='edit-gift-details__error-img' src={error} alt='' />
								<p className='edit-gift-details__error--text'>This field is required</p>
							</div>
							)}
							<label htmlFor="order_number" className='edit-gift-details__label'>Order Number</label>
							<input type="text" name="order_number" id="order_number" className='edit-gift-details__input' value={orderNumber} placeholder='Order Number' onChange={(e) => {setOrderNumber(e.target.value)}}/>
							{orderNumberError && (
							<div className='edit-gift-details__error-wrapper'>
								<img className='edit-gift-details__error-img' src={error} alt='' />
								<p className='edit-gift-details__error--text'>This field is required</p>
							</div>
							)}
							<label htmlFor="tracking_number" className='edit-gift-details__label'>Tracking Number</label>
							<input type="text" name="tracking_number" id="tracking_number" className='edit-gift-details__input' value={trackingNumber} placeholder='Tracking number' onChange={(e) => {setTrackingNumber(e.target.value)}}/>
							{trackingNumberError && (
							<div className='edit-gift-details__error-wrapper'>
								<img className='edit-gift-details__error-img' src={error} alt='' />
								<p className='edit-gift-details__error--text'>This field is required</p>
							</div>
							)}
							<label htmlFor="product_link" className='edit-gift-details__label'>Product Link</label>
							<input type="text" name="product_link" id="product_link" className='edit-gift-details__input' value={productLink} placeholder='Product Link' onChange={(e) => {setProductLink(e.target.value)}}/>
							{productLinkError && (
							<div className='edit-gift-details__error-wrapper'>
								<img className='edit-gift-details__error-img' src={error} alt='' />
								<p className='edit-gift-details__error--text'>This field is required</p>
							</div>
							)}
							<label htmlFor="giftee" className='edit-gift-details__label'>Giftee</label>
							<div className="edit-gift-details__select-wrapper">
								<select name="giftee" id="giftee" className='edit-gift-details__select' onChange={(e) => {setGifteeID(e.target.value)}}>
									<option value={null} className='edit-gift-details__select-option'>Please select giftee</option>
									{gifteeList.map((giftee) => (
										<option key={giftee.giftee_id} value={giftee.giftee_id} selected={giftee.giftee_id === gifteeID ? true : false} className='edit-gift-details__select-option'>{giftee.name}</option>
									))}
								</select>
								<span className='edit-gift-details__select-focus'></span>
							</div>
							{gifteeIDError && (
							<div className='edit-gift-details__error-wrapper'>
								<img className='edit-gift-details__error-img' src={error} alt='' />
								<p className='edit-gift-details__error--text'>This field is required</p>
							</div>
							)}
						</div>
					</div>
					<div className='edit-gift-details__btn-container'>
						<div className='edit-gift-details__btn-wrapper--cancel'><button type="button" className='edit-gift-details__btn--cancel' onClick={()=>{navigate(`/${giftee_id}`)}}>Cancel</button></div>
						<div className='edit-gift-details__btn-wrapper--submit'><button type="submit" className='edit-gift-details__btn--submit'>Save</button></div>
					</div>
				</form>
			</main>
		</>
	);
}