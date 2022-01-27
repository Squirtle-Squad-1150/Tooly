import React from 'react';
import './toolCard.css';
import { Link } from 'react-router-dom';
import UpdateTool from '../UpdateTool/UpdateTool';

function ToolCard({ tools }) {
	if (!tools) return <div></div>;

	return (
		<section className='container'>
			{tools.map((tool) => (
				<Link to={`toolcard/${tool._id}`} key={tool._id}>
					<div className='tool' key={tool._id}>
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
							<Link to={`/update-listing/${tool._id}`} className='links'>
								<button className='updateBtn'>Update</button>
							</Link>
							<button className='reserveBtn'>Reserve</button>
						</div>
					</div>
				</Link>
			))}
		</section>
	);
}

export default ToolCard;
