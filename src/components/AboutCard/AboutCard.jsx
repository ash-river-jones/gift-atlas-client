import './AboutCard.scss';
import iconCombo from '../../assets/icons/icon-combo.svg';
import giftStress from '../../assets/images/gift-stress.jpeg'
import familyGift from '../../assets/images/family-gift.jpeg'
import holidayStress from '../../assets/images/holiday-stress.jpeg'
import happyGift from '../../assets/images/happy-gift.jpg'
import { useNavigate } from 'react-router-dom';

export default function AboutCard() {
	const navigate = useNavigate()
	return (
		<>
			<main className="about">
				<section className='about__header'>
					<div className='about__header-wrapper'>
						<h1 className="about__heading">About Gift Atlas</h1>
					</div>
				</section>
				<section className='hero'>
					<div className="hero__heading-wrapper">
						<h1 className="hero__heading">Making Holiday Gifting Easy</h1>
						</div>
					<div className="hero__subheading-wrapper">
						<p className="hero__subheading">Welcome to Gift Atlas, the ultimate gift-giving solution! With our website, you can easily add Giftees and their details, keep track of gift ideas, monitor gifts with order ID and tracking info, set budgets for each giftee and request gift ideas directly from the giftee to load into your dashboard. We have made the process of gift-giving organized and stress-free. Give it a try and experience the ease of gift-giving with Gift Atlas.</p>
					</div>
					<div className="hero__img-wrapper">
						<img className='hero__img' src={iconCombo} alt="Hero" />
					</div>
					<div className='hero__login-wrapper'>
						<div onClick={()=>{navigate('/signup')}} className='hero__signup-btn'>Sign Up</div>
						<div onClick={()=>{navigate('/login')}} className='hero__login-btn'>Login</div>
					</div>
				</section>
				<section className='hiw'>
					<div className='hiw__heading-wrapper'>
						<h2 className='hiw__heading'>How It Works</h2>
					</div>
					<div className="hiw__side">
						<div className="hiw__section">
							<img src={holidayStress} alt="holiday stress" className="hiw__img" />
							<h3 className="hiw__subheader">Holiday Stress about what gifts to get?</h3>
							<p className="hiw__info">Gift giving during holidays can be stressful for the giver as finding the perfect gift, staying within budget, and avoiding disappointment can be difficult. Furthermore, it can be a way to express emotions and feelings, adding more pressure. Additionally, with the holiday season being a busy time for many, finding the time to shop and plan can also be challenging.</p>
						</div>
						<div className="hiw__section">
							<img src={giftStress} alt="gift stress" className="hiw__img" />
							<h3 className="hiw__subheader">Not knowing what colour or size to get?</h3>
							<p className="hiw__info">One aspect of gift giving that can be particularly stressful is not knowing what color or size to get for someone. This can be especially difficult when buying clothing or accessories. If the person is picky about their appearance, or if they have a unique sense of style, it can be hard to know what they would like or what will fit them properly. This can lead to uncertainty and doubt about whether or not the gift will be well-received.</p>
						</div>
					</div>
					<div className="hiw__side">
						<div className="hiw__section">
							<img src={happyGift} alt="happy gift" className="hiw__img" />
							<h3 className="hiw__subheader">Knowing exactly what everyone wants</h3>
							<p className="hiw__info">One of our most unique features is the ability for you to request gift ideas directly from a Giftee. This allows you to get a better understanding of what the Giftee wants or needs, which can be particularly helpful if they are difficult to buy for. This feature eliminates the stress of trying to come up with a gift idea on your own, and makes it easy to find something that the giftee will truly appreciate. With this feature, Gift Atlas takes the guesswork out of gift giving and makes it easy to find the perfect gift for everyone on your list.</p>
						</div>
						<div className="hiw__section">
							<img src={familyGift} alt="family gift" className="hiw__img" />
							<h3 className="hiw__subheader">Staying within your holiday budget</h3>
							<p className="hiw__info">Gift Atlas is a website that helps make sure everyone gets the perfect gift, while also being mindful of budget. One of the standout features of Gift Atlas is the ability for users to set a gift budget for each giftee. This ensures that users stay within their means and don't overspend during the holiday season.</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}