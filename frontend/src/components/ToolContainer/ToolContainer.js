import React from 'react';
import ToolCard from '../ToolCard/ToolCard';
import './toolContainer.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ToolContainer(props) {
	const navigate = useNavigate();
	const url = 'https://cryptic-dusk-16798.herokuapp.com/listing';
	const [tools, setTools] = useState();

	useEffect(() => {
		axios.get(url).then((res) => {
			setTools(res.data);
			navigate('/');
		});
	}, []);

	return <div className='toolContainer'>{<ToolCard tools={tools}/>}</div>;
}

export default ToolContainer;
