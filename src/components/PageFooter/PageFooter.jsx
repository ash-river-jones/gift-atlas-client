import './PageFooter.scss';
import email from '../../assets/icons/email.png'
import linkedin from '../../assets/icons/linkedin.svg'
import logo from '../../assets/icons/logo_4.png'

export default function PageFooter() {
	return (
		<>
			<footer className='footer'>
				<div className='footer__header'>
					<h2 className="footer__heading">Get in Touch</h2>
					<div className="footer__social">
						<a className='footer__social-link' href="mailto:gift.atlas.holiday.gift.tracker@gmail.com"><img className='footer__social-img' src={email} alt="Email" /></a>
						<a className='footer__social-link' href="https://www.linkedin.com/in/ash-river-jones/"><img className='footer__social-img' src={linkedin} alt="LinkedIn" /></a>
					</div>
				</div>	
				<div className="footer__body">
					<div className="footer__details">
						<div className="footer__name-section">
							<h3 className="footer__name">Ash Jones</h3>
							<h3 className="footer__name">Gift Atlas - Holiday Gift Tracker</h3>
						</div>
						<div className='footer__contact-section'>
							<p className="footer__contact">Based in Vancouver Canada</p>
							<a href="mailto:gift.atlas.holiday.gift.tracker@gmail.com" className='footer__contact'><p className="footer__contact">gift.atlas.holiday.gift.tracker@gmail.com</p></a>
							<a href="mailto:ash.river.jones@outlook.com" className='footer__contact'><p className="footer__contact">ash.river.jones@outlook.com</p></a>
						</div>
					</div>
					<div className='footer__copy-section'>
						<img src={logo} alt="logo" className='footer__copy-logo'/>
						<p className='footer__copy-message'>Copyright Gift Atlas &copy; 2022 All Rights Reserved</p>
					</div>
				</div>
			</footer>
		</>
	);
}