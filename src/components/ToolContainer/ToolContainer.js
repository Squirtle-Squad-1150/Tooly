import React from 'react';
import ToolCard from '../ToolCard/ToolCard';
import './toolContainer.css';
import { useContext, useEffect } from 'react';
import { toolContext } from '../../toolContext';
import axios from 'axios';

function ToolContainer(props) {
	const { tools, setTools } = useContext(toolContext);
	// const navigate = useNavigate()
	const url = 'https://cryptic-dusk-16798.herokuapp.com/listing';

	useEffect(() => {
		axios.get(url).then((res) => {
			setTools(res.data);
			// navigate('/');
		});
	}, []);

	return <div className='toolContainer'>{<ToolCard tools={tools} />}</div>;
}

export default ToolContainer;
