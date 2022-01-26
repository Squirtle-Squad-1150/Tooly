import './App.css';
import { Routes, Route } from 'react-router-dom';
import ToolContainer from './components/ToolContainer/ToolContainer';
import ToolCard from './components/ToolCard/ToolCard';
import Header from './components/Header/Header';
import AddListing from './components/AddListing/AddListing';
import UpdateTool from './components/UpdateTool/UpdateTool';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' exact element={<ToolContainer />} />
				<Route path='/toolcard/:id' element={<ToolCard />} />
				<Route path='/add-listing' element={<AddListing />} />
				<Route path='/update-listing' element={<UpdateTool />} />
			</Routes>
		</>
	);
}

export default App;
