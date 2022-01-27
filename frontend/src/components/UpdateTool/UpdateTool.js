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
		price: Number,
		description: '',
	};
	const [formData, setFormData] = useState(defaultData);
	

	function handleSubmit(event) {
		event.preventDefault();
		console.log(formData);
		setFormData(defaultData);
		console.log(formData);
	}

	function resetRadios () {

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
							value={formData.tool}
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
							value={formData.model}
							onChange={(event) =>
								setFormData({ ...formData, model: event.target.value })
							}></input>
					</li>
					<li>
						<label htmlFor='category'>Category: </label>
						<input
							id='category'
							type='text'
							value={formData.category}
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
							// Learned how to reset radio buttons on form submit from
							//https://surajsharma.net/blog/react-handle-radio-buttons
							checked={formData.condition === 'new'}
							onChange={(event) =>
								setFormData({ ...formData, condition: event.target.value })
							}></input>
						<label htmlFor='used'>Used </label>
						<input
							id='used'
							type='radio'
							name='condition'
							value='used'
							checked={formData.condition === 'used'}
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
							checked={formData.cordless === 'true'}
							onChange={(event) =>
								setFormData({ ...formData, cordless: event.target.value })
							}></input>
						<label htmlFor='no'> No </label>
						<input
							id='no'
							type='radio'
							name='cordless'
							value='false'
							checked={formData.cordless === 'false'}
							onChange={(event) =>
								setFormData({ ...formData, cordless: event.target.value })
							}></input>
					</li>
					<li>
						<span>Available: </span>
						<label htmlFor='available-yes'>Yes </label>
						<input
							id='available-yes'
							type='radio'
							name='available'
							value='true'
							checked={formData.available === 'true'}
							onChange={(event) =>
								setFormData({ ...formData, available: event.target.value })
							}></input>
						<label htmlFor='available-no'> No </label>
						<input
							id='available-no'
							type='radio'
							name='available'
							value= 'false'
							checked={formData.available === 'false'}
							onChange={(event) =>
								setFormData({ ...formData, available: event.target.value })
							}></input>
					</li>
					<li>
						<label htmlFor='location'>Location: </label>
						<input
							id='location'
							type='text'
							value={formData.location}
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
							value={formData.price}
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
							value={formData.description}
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
