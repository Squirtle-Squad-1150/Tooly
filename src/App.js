import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ToolContainer from './components/ToolContainer/ToolContainer';
import Header from './components/Header/Header';
import AddListing from './components/AddListing/AddListing';
import UpdateTool from './components/UpdateTool/UpdateTool';
import ToolCardDetail from './components/ToolCardDetail/ToolCardDetail';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import ReserveTool from './components/ReserveTool/ReserveTool';

import { toolContext } from './toolContext';

function App() {
	const navigate = useNavigate();
	const url = 'https://cryptic-dusk-16798.herokuapp.com/listing';
	const [tools, setTools] = useState();

	useEffect(() => {
		axios.get(url).then((res) => {
			setTools(res.data);
			navigate('/');
		});
	}, []);

	return (
		<>
			<toolContext.Provider value={{ tools, setTools }}>
				<Header />
				<Routes>
					<Route path='/' exact element={<SignIn />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/toolcard' element={<ToolContainer />} />
					<Route path='/toolcard/:_id' element={<ToolCardDetail />} />
					<Route path='/add-listing' element={<AddListing />} />
					<Route path='/update-listing/:_id' element={<UpdateTool />} />
					<Route path='/reserve-listing/:_id' element={<ReserveTool />} />
				</Routes>
			</toolContext.Provider>
		</>
	);
}

export default App;
