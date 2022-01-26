import React from 'react';
import toolCard from './toolCard.css';
import { Link } from 'react-router-dom';
// import { Paper } from '@mui/material';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableRow from '@mui/material/TableRow';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

function ToolCard({ tools }) {
	console.log(tools);

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
