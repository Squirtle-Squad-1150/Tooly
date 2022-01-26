import React, { useState } from 'react';
import './updateTool.css';

function UpdateTool(props) {
	const defaultData = {
		tool: '',
		brand: '',
		model: '',
		category: '',
		condition: '',
		cordless: true,
		available: true,
		location: '',
		price: null,
		description: '',
	};
	const [formData, setFormData] = useState(defaultData);

	function handleSubmit(event) {
		event.preventDefault();
		console.log(formData);
		// setFormData(defaultData);
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
							onChange={(event) => setFormData(event.target.value)}>
                                {console.log(formData)}
							<option value='tableSaw'>Table Saw</option>
							<option value='airCompressor'>Air Compressor</option>
							<option value='angleGrinder'>Angle Grinder</option>
							<option value='airImpactWrench'>Air Impact Wrench</option>
							<option value='beltSander'>Belt Sander</option>
						</select>
					</li>
					<li>
						<label htmlFor='brand'>Brand: </label>
						<input id='brand' type='text'></input>
					</li>
					<li>
						<label htmlFor='model'>Model: </label>
						<input id='model' type='text'></input>
					</li>
					<li>
						<label htmlFor='category'>Category: </label>
						<input id='category' type='text'></input>
					</li>
					<li>
						<span>Condition: </span>
						<label htmlFor='new'>New </label>
						<input id='new' type='checkbox' value='new'></input>
						<label htmlFor='used'>Used </label>
						<input id='used' type='checkbox' value='used'></input>
					</li>
					<li>
						<span>Cordless: </span>
						<label htmlFor='yes'>Yes </label>
						<input id='yes' type='checkbox' value='true'></input>
						<label htmlFor='no'> No </label>
						<input id='no' type='checkbox' value='false'></input>
					</li>
					<li>
						<span>Available: </span>
						<label htmlFor='available-yes'>Yes </label>
						<input id='avaiable-yes' type='checkbox' value='true'></input>
						<label htmlFor='available-no'> No </label>
						<input id='available-no' type='checkbox' value='false'></input>
					</li>
					<li>
						<label htmlFor='location'>Location: </label>
						<input id='location' type='text'></input>
					</li>
					<li>
						<label htmlFor='price'>Price: $</label>
						<input id='price' type='number' min='1'></input>
					</li>
					<li>
						<label htmlFor='description'>Description: </label>
						<textarea id='description' rows='5' cols='40'></textarea>
					</li>
					<li>
						<button>Submit</button>
					</li>
				</ul>
			</form>
		</div>
	);
}

export default UpdateTool;
