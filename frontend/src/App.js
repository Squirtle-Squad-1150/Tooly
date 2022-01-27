import './App.css';
import { Routes, Route } from 'react-router-dom';
import ToolContainer from './components/ToolContainer/ToolContainer';
import ToolCard from './components/ToolCard/ToolCard';
import Header from './components/Header/Header';
import AddListing from './components/AddListing/AddListing';
import UpdateTool from './components/UpdateTool/UpdateTool';
import ToolCardDetail from './components/ToolCardDetail/ToolCardDetail';


function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' exact element={<ToolContainer />} />
				<Route path='/toolcard/:_id' element={<ToolCardDetail />} />
				<Route path='/add-listing' element={<AddListing />} />
				<Route path='/update-listing' element={<UpdateTool />} />
			</Routes>
		</>
	);
}

export default App;
