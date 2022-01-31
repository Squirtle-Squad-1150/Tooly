import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ToolCardDetail.css';

function ToolCardDetail() {
	const { _id } = useParams();

	const [tool, setTool] = useState(null);

	function getTool(_id) {
		const url = `https://cryptic-dusk-16798.herokuapp.com/listing/${_id}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setTool(res);
			})
			.catch(console.error);
	}

	useEffect(() => {
		// This code to run when component mounts
		getTool(_id);
		// console.log(_id);
	}, [_id]);

	if (!tool) {
		return <p>Loading tool information ...</p>;
	}

	return (
		<div className='tool-card'>
			<div className='cardDetail'>
				<h2>{tool.tool}</h2>
				<img src={tool.image} alt={tool.title} />
				<p>{tool.description}</p>
				<div className='cardBtns'>
					<Link to='/update-listing/:_id' className='links'>
						<button className='updateBtn'>Update</button>
					</Link>
					<Link to={`/reserve-listing/${tool._id}`} className='links'>
						<button className='reserveBtn'>Reserve</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ToolCardDetail;
