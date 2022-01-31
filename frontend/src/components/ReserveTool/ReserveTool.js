import React, { useState, useEffect } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker, { Calendar } from 'react-modern-calendar-datepicker';
import { useParams, useNavigate } from 'react-router-dom';
import './reserveTool.css';
import axios from 'axios';

function ReserveTool() {
	const { _id } = useParams();
	const navigate = useNavigate();
	const [selectedDayRange, setSelectedDayRange] = useState([]);
    const [disabledDays, setDisabledDays] = useState()
	const [tool, setTool] = useState({
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
		reserve: [],
	});


	function getToolInfo(_id) {
		const url = `https://cryptic-dusk-16798.herokuapp.com/listing/${_id}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setTool(res);
                console.log('disabled days', disabledDays)
				setDisabledDays(res.reserve)
			})
			.catch(console.error);
	}

	function handleSubmit(event) {
		event.preventDefault();

		tool.reserve.push(selectedDayRange);

		axios
			.put(`https://cryptic-dusk-16798.herokuapp.com/listing/${_id}`, tool)
			.then((res) => {
				navigate('/');
			});
	}

	useEffect(() => {
		getToolInfo(_id);
        console.log(disabledDays)
	}, [_id]);

	if (!selectedDayRange) {
		return <p>Loading tool information ...</p>;
	}

	return (
		<form className='calendar-form'>
			<div className='calendar'>
				<h4>Choose the dates you would like to reserve this tool.</h4>
				<Calendar
					value={selectedDayRange}
					onChange={setSelectedDayRange}

					// disabledDays={disabledDays}
				/>
				<div>
					<button classname='submit-calendar' onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</div>
		</form>
	);
}

export default ReserveTool;
