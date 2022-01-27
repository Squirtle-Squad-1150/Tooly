import React from 'react';
import './toolCard.css';
import { Link } from 'react-router-dom';

function ToolCard({ tools }) {
	if (!tools) return <div>load</div>;

	return (
		<section className='container'>
			{tools.map((tool) => (
				<div className='tool'>
					<div className='tool-image'>
						<img src={tool.image} alt={tool.title} />
					</div>
					<div className='tool-location'>
						<p>📍 {tool.location}</p>
					</div>
					<div className='tool-title'>
						<h3>
							{tool.title} ({tool.brand})
						</h3>
					</div>
					<div className='cardBtns'>
						<Link to='/update-listing' className='links'>
							<button className='updateBtn'>Update</button>
						</Link>
						<button className='reserveBtn'>Reserve</button>
					</div>
				</div>
			))}
		</section>
	);
}

export default ToolCard;
