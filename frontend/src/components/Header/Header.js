import { Link } from 'react-router-dom';
import header from './header.css';

const Header = () => {
	return (
		<div className='header-nav'>
			<nav>
				<Link to='/' className='links'>
					<h1>
						Tooly{' '}
						<span role='img' aria-label='hammer and wrench'>
							🛠️
						</span>
					</h1>
				</Link>

				<div className='main-nav'>
					<ul>
						<li>
							<Link to='/' className='links'>
								Home
							</Link>
						</li>
						<li>
							{' '}
							<Link to='/add-listing' className='links'>
								Add Listing
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Header;
