import React, { useState } from 'react';
import './updateTool.css';

function UpdateTool(props) {
	const defaultData = {
		tool: 'tableSaw',
		brand: '',
		model: '',
		category: '',
		condition: '',
		cordless: Boolean,
		available: Boolean,
		location: '',
		price: null,
		description: '',
	};
	const [formData, setFormData] = useState(defaultData);

	function handleSubmit(event) {
		event.preventDefault();
		console.log(formData);
		setFormData(defaultData);
		console.log(formData);
	}
	return (
		<div>
			<h2>Update My Listing</h2>
			<form onSubmit={handleSubmit}>
				<ul>
					<li>
						<label htmlFor='tool'>Tool: </label>
						<select
							id='tool'
							name='tool'
							onChange={(event) =>
								setFormData({ ...formData, tool: event.target.value })
							}>
							<option value='tableSaw'>Table Saw</option>
							<option value='airCompressor'>Air Compressor</option>
							<option value='angleGrinder'>Angle Grinder</option>
							<option value='airImpactWrench'>Air Impact Wrench</option>
							<option value='beltSander'>Belt Sander</option>
						</select>
					</li>
					<li>
						<label htmlFor='brand'>Brand: </label>
						<input
							id='brand'
							type='text'
							value={formData.brand}
							onChange={(event) =>
								setFormData({ ...formData, brand: event.target.value })
							}></input>
					</li>
					<li>
						<label htmlFor='model'>Model: </label>
						<input
							id='model'
							type='text'
							onChange={(event) =>
								setFormData({ ...formData, model: event.target.value })
							}></input>
					</li>
					<li>
						<label htmlFor='category'>Category: </label>
						<input
							id='category'
							type='text'
							onChange={(event) =>
								setFormData({ ...formData, category: event.target.value })
							}></input>
					</li>
					<li>
						<span>Condition: </span>
						<label htmlFor='new'>New </label>
						<input
							id='new'
							type='radio'
							name='condition'
							value='new'
							onChange={(event) =>
								setFormData({ ...formData, condition: event.target.value })
							}></input>
						<label htmlFor='used'>Used </label>
						<input
							id='used'
							type='radio'
							name='condition'
							value='used'
							onChange={(event) =>
								setFormData({ ...formData, condition: event.target.value })
							}></input>
					</li>
					<li>
						<span>Cordless: </span>
						<label htmlFor='yes'>Yes </label>
						<input
							id='yes'
							type='radio'
							name='cordless'
							value='true'
							onChange={(event) =>
								setFormData({ ...formData, cordless: event.target.value })
							}></input>
						<label htmlFor='no'> No </label>
						<input
							id='no'
							type='radio'
							name='cordless'
							value='false'
							onChange={(event) =>
								setFormData({ ...formData, cordless: event.target.value })
							}></input>
					</li>
					<li>
						<span>Available: </span>
						<label htmlFor='available-yes'>Yes </label>
						<input
							id='avaiable-yes'
							type='radio'
							name='available'
							value='true'
							onChange={(event) =>
								setFormData({ ...formData, available: event.target.value })
							}></input>
						<label htmlFor='available-no'> No </label>
						<input
							id='available-no'
							type='radio'
							name='available'
							value='false'
							onChange={(event) =>
								setFormData({ ...formData, available: event.target.value })
							}></input>
					</li>
					<li>
						<label htmlFor='location'>Location: </label>
						<input
							id='location'
							type='text'
							onChange={(event) =>
								setFormData({ ...formData, location: event.target.value })
							}></input>
					</li>
					<li>
						<label htmlFor='price'>Price: $</label>
						<input
							id='price'
							type='number'
							min='1'
							onChange={(event) =>
								setFormData({ ...formData, price: event.target.value })
							}></input>
					</li>
					<li>
						<label htmlFor='description'>Description: </label>
						<textarea
							id='description'
							rows='5'
							cols='40'
							onChange={(event) =>
								setFormData({ ...formData, description: event.target.value })
							}></textarea>
					</li>
					<li>
						<button type='submit'>Submit</button>
					</li>
				</ul>
			</form>
		</div>
	);
}

export default UpdateTool;
