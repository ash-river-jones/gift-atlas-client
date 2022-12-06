import backArrow from "../../assets/icons/arrow_back-24px.svg"
import './AddGiftCard.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const { v4: uuid } = require("uuid");


const API_URL = process.env.REACT_APP_SERVER_URL || '';


export default function AddGiftCard() {
	const navigate = useNavigate();
	const giftee_id_obj = useParams()
	const giftee_id = giftee_id_obj.giftee_id
	
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
		if (price === '') {
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

	useEffect(() => {
		axios
			.get(`${API_URL}/giftees`)
			.then((response) => {
				setGifteeList(response.data)
			})
			.catch((err) => {
				console.log(err)
			})
	},[])

	const handelAddGift = (e) => {
		e.preventDefault()

		if (
			itemNameError === true ||
			itemDescriptionError === true ||
			retailerError === true ||
			productLinkError === true ||
			priceError === true ||
			giftStatusError === true ||
			orderNumberError === true ||
			trackingNumberError === true
			// gifteeIDError === true   // turn back on when select giftee fixed
		) {
			console.log(`missing required data to post new gift`)
		} else {
			axios
			.post(`${API_URL}/gifts`,{
				gift_id: uuid(),
				giftee_id: '09484d50-a7f8-4048-9bc5-a41deefac6ca', // replace with "gifteeID"
				user_id: `c2186be8-4195-4745-9627-b4c83d1d6307`,
				item_name: itemName,
				item_description: itemDescription,
				retailer: retailer,
				product_link: productLink,
				price: price, 
				gift_status: giftStatus,
				order_number: orderNumber,
				tracking_number: trackingNumber
			})
			.then((response) => {
				console.log(response.data)
				navigate(`/${giftee_id}`)
			})
			.catch((err) => {
				console.log(err)
			})
		}
	}

	return (
		<>
			<main className="add-gift">
				<section className='add-gift__header'>
					<div className='add-gift__header-wrapper'>
						<Link to={`/${giftee_id}`}><img className='add-gift__back-arrow' src={backArrow} alt="Back arrow to giftee profile" /></Link>
						<h1 className='add-gift__heading'>Add new Gift</h1>
					</div>
					<form onSubmit={handelAddGift}>
						<div className="add-gift-details__wrapper">
							<h2 className="add-gift-details__heading">Gift Details</h2>

							<label htmlFor="item_name" className='add-gift-details__label'>Item Name</label>
							<input type="text" name="item_name" id="item_name" className='add-gift-details__input' value={itemName} placeholder='Item Name' onChange={(e)=>{setItemName(e.target.value)}}/>
							
							<label htmlFor="item_description" className='add-gift-details__label'>Item Description</label>
							<textarea name="item_description" id="item_description" cols="30" rows="10" className='add-gift-details__text-area' value={itemDescription} placeholder='Please enter a breif item description...' onChange={(e) => {setItemDescription(e.target.value)}}></textarea>
							
							<label htmlFor="retailer" className='add-gift-details__label'>Retailer</label>
							<input type="text" name="retailer" id="retailer" className='add-gift-details__input' value={retailer} placeholder='Retailer' onChange={(e) => {setRetailer(e.target.value)}}/>
							
							<label htmlFor="price" className='add-gift-details__label'>Price</label>
							<input type="text" name="price" id="price" className='add-gift-details__input' value={price} placeholder='$' onChange={(e) => {setPrice(e.target.value)}}/>
						</div>
						<div className="add-gift-details__wrapper">
							<h2 className="add-gift-details__heading">Gift Status</h2>

							<label htmlFor="gift_status" className='add-gift-details__label'>Status</label>
							<label htmlFor="gift_status-not-purchased" className='add-gift-details__radio-label'><input type="radio" name="gift_status" id="gift_status-not-purchased" className='add-gift-details__radio' value='Not Purchased' checked={giftStatus === "Not Purchased" ? true : false} onChange={(e) => {setGiftStatus(e.target.value)}} />Not Purchased</label>
							<label htmlFor="gift_status-purchased" className='add-gift-details__radio-label'><input type="radio" name="gift_status" id="gift_status-purchased" className='add-gift-details__radio' value='Ordered/Purchased' checked={giftStatus === "Ordered/Purchased" ? true : false} onChange={(e) => {setGiftStatus(e.target.value)}} />Ordered/Purchased</label>


							<label htmlFor="order_number" className='add-gift-details__label'>Order Number</label>
							<input type="text" name="order_number" id="order_number" className='add-gift-details__input' value={orderNumber} placeholder='Order Number' onChange={(e) => {setOrderNumber(e.target.value)}}/>
							
							<label htmlFor="tracking_number" className='add-gift-details__label'>Tracking Number</label>
							<input type="text" name="tracking_number" id="tracking_number" className='add-gift-details__input' value={trackingNumber} placeholder='Tracking number' onChange={(e) => {setTrackingNumber(e.target.value)}}/>

							<label htmlFor="product_link" className='add-gift-details__label'>Product Link</label>
							<input type="text" name="product_link" id="product_link" className='add-gift-details__input' value={productLink} placeholder='Product Link' onChange={(e) => {setProductLink(e.target.value)}}/>

							<label htmlFor="giftee" className='add-gift-details__label'>Giftee</label>
							<select name="giftee" id="giftee" className='add-gift-details__select' onChange={(e) => {setGifteeID(e.target.value)}}>
								<option value={null} className='add-gift-details__select-option'>Please Select</option>
								{gifteeList.map((giftee) => {
									// {console.log(giftee.name, giftee.giftee_id)}
									<option value={giftee.giftee_id}>{giftee.name}</option>
								})}
							</select>
						</div>
						<div className='add-gift-defails__btn-container'>
						<div className='add-gift-details__btn-wrapper--cancel'><button type="button" className='add-gift-details__btn--cancel' onClick={()=>{navigate(`/${giftee_id}`)}}>Cancel</button></div>
							<div className='add-gift-details__btn-wrapper--submit'><button type="submit" className='add-gift-details__btn--submit'>Save</button></div>
						</div>
					</form>
				</section>

			</main>
		</>
	);
}