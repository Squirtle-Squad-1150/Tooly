import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ToolContainer from './components/ToolContainer/ToolContainer';
import ToolCard from './components/ToolCard/ToolCard';
import Header from './components/Header/Header';
import AddListing from './components/AddListing/AddListing';
import UpdateTool from './components/UpdateTool/UpdateTool';
import ToolCardDetail from './components/ToolCardDetail/ToolCardDetail';

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
					<Route path='/' exact element={<ToolContainer />} />
					<Route path='/toolcard/:id' element={<ToolCardDetail />} />
					<Route path='/add-listing' element={<AddListing />} />
					<Route path='/update-listing/:id' element={<UpdateTool />} />
				</Routes>
			</toolContext.Provider>
		</>
	);
}

export default App;
