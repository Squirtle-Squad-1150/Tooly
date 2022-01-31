import React, { useState } from 'react';
import '../UpdateTool/updateTool.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UpdateTool(props) {
	const defaultData = {
		tool: '',
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
	const navigate = useNavigate();

	// Post request to add new tool to API
	function handleSubmit(event) {
		event.preventDefault();
		console.log(formData);
		axios
			.post(`https://cryptic-dusk-16798.herokuapp.com/listing/`, formData)
			.then((res) => {
				console.log(res);
				navigate('/toolcard');
			});

		console.log(formData);
	}

	return (
		<main className='form-container'>
			<h2 className='form-h2'>New Listing</h2>
			<form className='form' onSubmit={handleSubmit}>
				<ul className='form-ul'>
					<li className='form-li'>
						<label className='form-label' htmlFor='tool'>
							Tool:{' '}
						</label>
						<select
							className='form-select'
							id='tool'
							name='tool'
							value={formData.tool}
							onChange={(event) =>
								setFormData({ ...formData, tool: event.target.value })
							}>
							<option value='Air Compressor'>Air Compressor</option>
							<option value='Air Impact Wrench'>Air Impact Wrench</option>
							<option value='Angle Grinder'>Angle Grinder</option>
							<option value='Belt Sander'>Belt Sander</option>
							<option value='Table Saw' selected={true}>
								Table Saw
							</option>
						</select>
					</li>
					<li className='form-li'>
						<label className='form-label' htmlFor='brand'>
							Brand:{' '}
						</label>
						<input
							className='form-input'
							id='brand'
							type='text'
							value={formData.brand}
							onChange={(event) =>
								setFormData({ ...formData, brand: event.target.value })
							}></input>
					</li>
					<li className='form-li'>
						<label className='form-label' htmlFor='model'>
							Model:{' '}
						</label>
						<input
							className='form-input'
							id='model'
							type='text'
							value={formData.model}
							onChange={(event) =>
								setFormData({ ...formData, model: event.target.value })
							}></input>
					</li>
					<li className='form-li'>
						<label className='form-label' htmlFor='category'>
							Category:{' '}
						</label>
						<select
							className='form-select'
							id='category'
							name='category'
							value={formData.category}
							onChange={(event) =>
								setFormData({ ...formData, category: event.target.value })
							}>
							<option value='Compressors'>Compressors</option>
							<option value='Grinders'>Grinders</option>
							<option value='Air Tools'>Air Tools</option>
							<option value='Saws'>Saws</option>
						</select>
					</li>
					<li className='form-li'>
						<label className='form-label' htmlFor='condition'>
							Condition:{' '}
						</label>
						<select
							className='form-select'
							id='condition'
							name='condition'
							value={formData.condition}
							onChange={(event) =>
								setFormData({ ...formData, condition: event.target.value })
							}>
							<option value='Excellent'>Excellent</option>
							<option value='Good'>Good</option>
							<option value='Okay'>Okay</option>
							<option value='Used'>Used</option>
						</select>
					</li>
					<li className='form-li'>
						<span className='form-span'>Cordless: </span>
						<label className='form-label form-radio-label' htmlFor='yes'>
							Yes{' '}
						</label>
						<input
							className='form-input'
							id='yes'
							type='radio'
							name='cordless'
							value='true'
							checked={formData.cordless === 'true'}
							onChange={(event) =>
								setFormData({ ...formData, cordless: event.target.value })
							}></input>
						<label className='form-label form-radio-label' htmlFor='no'>
							{' '}
							No{' '}
						</label>
						<input
							className='form-input'
							id='no'
							type='radio'
							name='cordless'
							value='false'
							checked={formData.cordless === 'false'}
							onChange={(event) =>
								setFormData({ ...formData, cordless: event.target.value })
							}></input>
					</li>
					<li className='form-li'>
						<span className='form-span'>Available: </span>
						<label
							className='form-label form-radio-label'
							htmlFor='available-yes'>
							Yes{' '}
						</label>
						<input
							className='form-input'
							id='avaiable-yes'
							type='radio'
							name='available'
							value='true'
							checked={formData.available === 'true'}
							onChange={(event) =>
								setFormData({ ...formData, available: event.target.value })
							}></input>
						<label
							className='form-label form-radio-label'
							htmlFor='available-no'>
							{' '}
							No{' '}
						</label>
						<input
							className='form-input'
							id='available-no'
							type='radio'
							name='available'
							value='false'
							checked={formData.available === 'false'}
							onChange={(event) =>
								setFormData({ ...formData, available: event.target.value })
							}></input>
					</li>
					<li className='form-li'>
						<label className='form-label' htmlFor='location'>
							Location:{' '}
						</label>
						<input
							className='form-input'
							id='location'
							type='text'
							value={formData.location}
							onChange={(event) =>
								setFormData({ ...formData, location: event.target.value })
							}></input>
					</li>
					<li className='form-li'>
						<label className='form-label' htmlFor='price'>
							Price: $
						</label>
						<input
							className='form-input'
							id='price'
							type='number'
							min='1'
							value={formData.price}
							onChange={(event) =>
								setFormData({ ...formData, price: event.target.value })
							}></input>
					</li>
					<li className='form-li'>
						<label className='form-label' htmlFor='img-url'>
							Image URL:
						</label>
						<input
							className='form-input'
							id='url'
							type='url'
							min='1'
							value={formData.url}
							onChange={(event) =>
								setFormData({ ...formData, url: event.target.value })
							}></input>
					</li>
					<li className='form-li'>
						<label className='form-label' htmlFor='description'>
							Description:{' '}
						</label>
						<textarea
							className='form-textarea'
							id='description'
							rows='5'
							cols='40'
							value={formData.description}
							onChange={(event) =>
								setFormData({ ...formData, description: event.target.value })
							}></textarea>
					</li>
					<li className='form-li'>
						<button className='form-button' id='add' type='submit'>
							Add
						</button>
					</li>
				</ul>
			</form>
		</main>
	);
}

export default UpdateTool;
