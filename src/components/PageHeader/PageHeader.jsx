import './PageHeader.scss';
import logo from '../../assets/icons/logo.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function PageHeader() {
	const [aboutPage, setAboutPage] = useState(false);
	let path = window.location.pathname;

	useEffect(() => {
		if (path.includes(`/about`)) {
			setAboutPage(true);
		} else {
			setAboutPage(false);
		}
	}, [path]);

	return (
		<>
			<div className='header'>
				<Link to='/'><div className='header__logo-wrapper'><img className='header__logo' src={logo} alt='' /></div></Link>
				<div className='header__nav'>
					<Link to='/'><button className={aboutPage ? 'header__nav-item--inactive' : 'header__nav-item--active'}>Dashboard</button></Link>
					<Link to='/about'><button className={aboutPage ? 'header__nav-item--active' : 'header__nav-item--inactive'}>About</button></Link>
					<Link to='/login'><button className='header__nav-item--inactive'>Log Out</button></Link>
				</div>
			</div>
		</>
	);
}


// <>
// 	<header className='header'>
// 		<div className='header__logo-wrapper'><Link to='/'><img src={logo} alt='Gift Atlas Logo' className="header__logo" /></Link></div>
// 		<div className='header__nav-list'>
// 			<Link to='/'><button className={aboutPage ? 'header__nav-item-inactive' : 'header__nav-item-active'}>Dashboard</button></Link>
// 			<Link to='/inventory'><button className={aboutPage ? 'header__nav-item-active' : 'header__nav-item-inactive'}>About</button></Link>
// 			<Link to='/login'><button className='header__nav-item-inactive'>Log Out</button></Link>
// 		</div>
// 	</header>
// </>

// <>
// 	<header className='header'>
// 		<div className="header__logo-wrapper"><Link to='/'><img src={logo} alt='Gift Atlas Logo' className="header__logo" /></Link></div>
// 		<nav className='header__nav'>
// 			<div className="header__nav-list">
// 				<Link to='/'><button className={aboutPage ? 'header__nav-item-inactive' : 'header__nav-item-active'}>Dashboard</button></Link>
// 				<Link to='/about'><button className={aboutPage ? 'header__nav-item-active' : 'header__nav-item-inactive'}>About</button></Link>
// 				<Link to='/login'><div className='header__nav-item-inactive'>Log Out</div></Link>
// 			</div>
// 		</nav>
// 	</header>
// </>