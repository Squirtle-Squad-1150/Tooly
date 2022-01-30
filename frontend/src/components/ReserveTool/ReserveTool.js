import React, { useState, useEffect } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker, { Calendar } from 'react-modern-calendar-datepicker';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ReserveTool() {
	const { _id } = useParams();
	const navigate = useNavigate();
	const [selectedDayRange, setSelectedDayRange] = useState([]);
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

	// let disabledDays=[]

	function getToolInfo(_id) {
		const url = `https://cryptic-dusk-16798.herokuapp.com/listing/${_id}`;
		console.log(url);
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				// console.log(res);
				// console.log(selectedDayRange)
				setTool(res);
				// disabledDays = res.reserve
			})
			.catch(console.error);
		console.log(tool);
	}
	function handleSubmit(event) {
		event.preventDefault();
		// console.log(selectedDayRange);
		// console.log(tool.reserve)
		tool.reserve.push(selectedDayRange);
		// console.log('reserve', tool.reserve)

		axios
			.put(`https://cryptic-dusk-16798.herokuapp.com/listing/${_id}`, tool)
			.then((res) => {
				console.log(res);
				navigate('/');
			});
	}

	useEffect(() => {
		getToolInfo(_id);
	}, []);

	if (!selectedDayRange) {
		return <p>Loading tool information ...</p>;
	}

	return (
		<form>
			<Calendar
				value={selectedDayRange}
				onChange={setSelectedDayRange}
				// disabledDays={disabledDays}
			/>
			<button onClick={handleSubmit}>Submit</button>
		</form>
	);
}

export default ReserveTool;

// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// function ReserveTool(props) {
//     const [date, setDate] = useState(new Date());
//     return (
// 			<div>
// 				<label for='start'>Start date:</label>

// 				<input
// 					type='date'
// 					_id='start'
// 					name='trip-start'
// 					value='2018-07-22'
// 					min='2018-01-01'
// 					max='2023-12-31'></input>
// 				<label for='end'>End date:</label>

// 				<input
// 					type='date'
// 					id='end'
// 					name='trip-end'
// 					value='2018-07-22'
// 					min='2018-01-01'
// 					max='2023-12-31'></input>
// 				<button>Submit</button>
// 				<Calendar onChange={setDate} date={date} tileDisabled={tileDisabled} />
// 			</div>
// 		);
// }

// export default ReserveTool;
