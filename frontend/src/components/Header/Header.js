import { Link } from 'react-router-dom';

const Header = () => {
    return (
			<div className='header-nav'>
				<h1>
					Tooly{' '}
					<span role='img' aria-label='hammer and wrench'>
						🛠️
					</span>
				</h1>
                <nav>
                    <Link to='/' className='links'>Home</Link>
                    <Link to='/add-listing' className='links'>Add Listing</Link>
                </nav>
			</div>
		);
};


export default Header;